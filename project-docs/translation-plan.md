# MAS Select help center: translation plan

Status: draft for refinement. Nothing in this plan has been implemented.

Repository: `ibm-mas/mas-select` (new docs repo). Branch: `master`.

## Top-level overview

### Goal

Offer the MAS Select help center in multiple languages so that it matches the multi-language support confirmed for the MAS Select UI. Translation should be automated as far as practical.

### Scope

- Translate only the Markdown pages that are listed in `nav` in `mkdocs.yml` (62 pages). Pages that are not in `nav` are out of scope.
- Translate snippet files that nav pages include (currently `docs/_snippets/add-users.md`), because the translated pages depend on them.
- Localize site configuration: navigation titles, site name, search language, and UI strings in the theme overrides and custom JavaScript.
- Add a language switcher to the built site.
- Keep translations in sync with the English source on an ongoing basis. Machine translation runs automatically, and only new or changed English text is retranslated.
- Show a machine-translation notice on translated pages, and fall back to English for any page that fails validation.
- Handle images in a later phase, after the temporary images are replaced with final ones.

### Non-goals (for now)

- Choosing the final list of target languages (pending from the business).
- Translating at deploy time. Deployment stays a manual `mkdocs gh-deploy` from `scripts/build.sh`, so translations are committed to the repo (see Translation approach). Moving deployment to CI is a possible later change.
- Localized product screenshots. These require a localized MAS Select UI.

### Approach in one paragraph

Add an i18n plugin to MkDocs, add a translation script with a glossary and a do-not-translate list, and keep a segment-level translation cache so that only new or changed text is retranslated. Translations are committed to the repo so that they are reviewable and so that local builds and deploys need no API access. Initially, Bob translates content in a session at no API cost. Once an API is approved, a CI job runs the same script on changes to `docs/` and opens a pull request with updated translations. Images are handled last.

## Current state (evidence from the repo)

| Area | Finding | Source |
| --- | --- | --- |
| Source content | 66 Markdown files under `docs/`: 62 are in `nav`, 1 is an included snippet, and 3 are not in `nav` | `docs/**/*.md`, `mkdocs.yml` |
| Build tool | MkDocs with the `carbon` theme and a `tools/overrides` custom directory | `mkdocs.yml` |
| Search | Search plugin is set to `lang: en` | `mkdocs.yml` |
| Site strings | `site_name`, `site_description`, and all `nav` titles are English | `mkdocs.yml` |
| Custom JavaScript | 10 scripts loaded via `extra_javascript` (role selector, tooltips, page feedback, CSH, and others) | `mkdocs.yml` |
| Markdown extensions | `toc`, `admonition`, `attr_list`, `md_in_html`, `abbr`, `pymdownx.snippets` (base path `docs`, auto-append `.snippets`), `pymdownx.highlight`, `pymdownx.inlinehilite`, `pymdownx.superfences` | `mkdocs.yml` |
| CI | Runs `scripts/link_checker.py` and `mkdocs build` on push and pull request to `master` or `main` | `.github/workflows/validate.yml` |
| Dependencies | `mkdocs`, `mkdocs-carbon`, `mkdocs-glightbox`, `playwright`, `pymdown-extensions` | `requirements.txt` |
| Build and deploy | `scripts/build.sh` builds, serves, and deploys to GitHub Pages with `mkdocs gh-deploy` | `scripts/build.sh` |
| Images | `docs/images/` holds 30 PNG and JPG files. There are no SVG files and no Markdown references to `.svg` | `docs/images/` |
| Image status | Many images are temporary | Confirmed by the content owner |
| Pages not in `nav` (out of scope) | `docs/start-fast/first-task/admin-first-task.md`, `docs/start-fast/first-task/clerk-first-task.md`, and `docs/about/export-pdf.md`. The nav uses `administrator-first-task.md` and `inventory-clerk-first-task.md` instead of the first two | `mkdocs.yml`, `docs/` |
| Snippets | `docs/_snippets/add-users.md` and `docs/.snippets` exist | `docs/` |
| URLs | `use_directory_urls: false` | `mkdocs.yml` |

## Proposed architecture

1. **i18n plugin.** Use an MkDocs i18n plugin such as `mkdocs-static-i18n` to provide per-language builds and a language switcher. It must be tested against the `carbon` theme and the overrides in `tools/overrides` before it is adopted. If it does not work with the theme, evaluate alternatives or add a minimal switcher in the override templates.
2. **Translation script.** Add `scripts/translate_docs.py`. It reads the English sources and writes translated output for each target language, following the folder or suffix convention that the chosen plugin requires.
3. **Glossary and do-not-translate list.** Maintain a glossary file (term to approved translation, per language) and a protected-token list covering product names, UI labels, code, file paths, and URLs.
4. **Segment-level translation cache.** Split each page into translatable segments (for example paragraphs, headings, list items, and table cells) and store a hash of each English segment, the glossary version, and the approved translation. On each run, translate only segments whose hash is new or changed, and reuse the cached translation for the rest. This keeps the wording of unchanged text stable between runs and limits cost. Reviewer corrections to a cached translation are kept until the English segment changes.
5. **Validation with English fallback.** After translating a page, check that its structure matches the English page (same headings, links, admonitions, code blocks, snippet includes, and attributes). If a page fails, keep the previous translation or use the English page for that language, and report the failure. A single bad page must not fail the whole run or break the site.
6. **Machine-translation notice.** Add a notice to translated pages, through the overrides or the plugin, that says the page was machine translated and links to the English version.
7. **Stable heading anchors.** Translated headings change the generated anchor IDs, which breaks links such as `page.md#heading`. Give headings explicit IDs through `attr_list`, or map anchors from the English page, so that cross-page links keep working in every language.
8. **CI automation.** A GitHub Actions job that runs on changes to `docs/`, runs the translation script, and opens or updates a single pull request. The existing link checker and `mkdocs build` validate the pull request. This depends on a translation API decision (see Translation approach).

The translation script must preserve:

- Front matter, admonition syntax (`!!! note`), `attr_list` attributes (`{ .no-lightbox }`, `{ width="16" }`), and `abbr` definitions.
- Code blocks and inline code.
- Links, anchors, image references, and snippet includes (`--8<--`).
- Product names and UI labels listed in the glossary.

## Translation approach

Translation is an ongoing sync: whenever the English source changes, the affected translations are updated automatically. This is similar to how IBM Docs runs machine translation on each build, with one difference. Here the translations are committed to the repo instead of generated at deploy time.

**Why committed translations**

- Deployment is manual and local (`scripts/build.sh` runs `mkdocs gh-deploy`), so translating at deploy time would need API credentials on every machine that deploys.
- A committed translation appears as a diff, so it can be spot-checked, corrected, and validated in a pull request. There is no other review step in this plan.
- Reverting a bad translation is a git revert.
- Local builds, forks, and pull request validation work without API access, and an API outage cannot break the English site.
- Committed output cannot change between builds.

**Costs of this choice**

- Each batch of English changes produces a translation pull request. Run the job so that it updates a single standing pull request instead of opening one per change.
- Translations lag behind English changes. Until a page is retranslated, it shows the previous translation with the machine-translation notice.

**Phases**

- **Initial phase.** Bob translates the content in a session. This has no API cost and is sufficient for a pilot and for a first full pass. The quality of the translation should be reviewed by a native speaker before publication.
- **Ongoing phase.** A CI job needs a translation API (for example watsonx.ai or another approved service), credentials stored as repository secrets, and a cost owner. Confirm that the content may be sent to the chosen service. This is listed under open questions.
- **Possible later change.** The cache and script work the same way at deploy time. If deployment moves to CI and an API is approved, translations could be generated during the build instead of being committed. Only the location of the output would change.

**Other effects of ongoing sync**

- `mkdocs serve` and local builds should use cached translations only and should not call the API. Add a flag so that authors can build English only.
- `scripts/generate_pdf_playwright.py` produces an English PDF today. Decide whether translated PDFs are in scope.
- PRs from forks do not receive secrets, so the translation job must run only on the main repo.

## Image strategy

- **Text-bearing diagrams.** Recreate them as SVG, then translate by text node. SVG text lives in `<text>` and `<tspan>` elements, so a script can translate only those nodes and write a localized copy. Diagrams exported with text converted to outlines need their labels recreated as real text first.
- **Screenshots.** Keep the English versions until the MAS Select UI is localized. They must then be re-captured from the localized UI.
- **Images without text.** Icons, arrows, banners, and light and dark variants are shared across all languages.
- **Timing.** Many images are temporary, so defer all image work until the final images exist.
- **Candidates to inspect** (not yet verified to contain text): `Locs-assets-WOs.png`, `locations-diagram.png`, `work-order-lifecycle.png`, `maximo-core-structure.png`, `work-orders.png`.

## Caveats

- **Text expansion.** Some languages, such as German and French, are often longer than English. Labels in diagrams and UI-like elements can overflow and may need layout adjustment.
- **Right-to-left languages.** Arabic and Hebrew need layout and CSS changes in the theme overrides, and diagrams and arrows may need mirroring.
- **Search language support.** The MkDocs search plugin supports a limited set of languages. Some languages, such as Japanese and Chinese, need extra configuration. The `separator` setting in `mkdocs.yml` may also need per-language tuning.
- **IBM NLS review.** An IBM translation (NLS) process may apply to customer-facing documentation. If it does, it may take precedence over, or add review steps to, an automated pipeline. Confirm before publishing.
- **Fonts.** Target scripts, such as CJK and Arabic, need fonts that cover them.
- **Terminology consistency.** The "Term differences" page (`docs/start-fast/basics/why-do-terms-differ.md`) and `abbr` tooltips need glossary-driven translation so that terms match the UI.

## Open questions

1. What is the target language list? (Pending.)
2. Resolved: translation is an ongoing sync with the English source, as IBM Docs does.
3. Does IBM NLS apply to this help center? This matters more with an ongoing sync, because no human review is planned.
4. Which UI strings must the glossary match, and where can the localized UI string files be obtained?
5. Which translation API will be used for CI automation, and who owns the cost?
6. Who holds the credentials, and is the content allowed to be sent to that service?
7. Who reviews translations, and how often? Who is the native-speaker reviewer for each language?
8. Should the pages that are not in `nav` (`admin-first-task.md`, `clerk-first-task.md`, `export-pdf.md`) be removed from the repo? They are excluded from translation either way.

## Sub-tasks

Each sub-task is designed to be implemented and reviewed independently, in order.

### Sub-task 0: Decide languages and glossary

- **Intent:** Establish the inputs that every later step depends on.
- **Expected Outcomes:**
  - A confirmed list of target languages.
  - A confirmed answer on IBM NLS applicability, plus owners for API cost, credentials, and translation review. (Ongoing sync is already decided.)
  - A glossary of key terms and a do-not-translate list, aligned with UI strings where available.
- **Todo List:**
  1. Obtain the target language list from the business.
  2. Confirm whether IBM NLS applies and what it requires.
  3. Request the UI string files or term list for the localized MAS Select UI.
  4. Draft the glossary (for example `translations/glossary.yml`) and the do-not-translate list.
  5. Define the translation file list as the pages in `nav`, plus snippets that those pages include. Have the script read the list from `mkdocs.yml` so that it stays in sync.
- **Relevant Context:** `docs/start-fast/basics/why-do-terms-differ.md`, `docs/start-fast/basics/what-are-basic-concepts.md`, `mkdocs.yml` (`abbr` usage and nav titles).
- **Status:** `[ ] pending`

### Sub-task 1: Pilot with a few pages in one language

- **Intent:** Prove the structure, the translation quality, and the build with a small, low-risk sample before translating everything.
- **Expected Outcomes:**
  - The i18n plugin is installed and verified to work with the `carbon` theme and overrides, or an alternative is chosen.
  - A small set of pages (a mix of plain text, admonitions, tables, code, and snippets) is translated into one language.
  - The segment-level cache, structural validation with English fallback, the machine-translation notice, and stable heading anchors work on the pilot pages.
  - `mkdocs build` and the link checker pass, including on `use_directory_urls: false` output paths and links to anchors.
  - A reviewer confirms that translation quality and formatting are acceptable.
- **Todo List:**
  1. Add the chosen i18n plugin to `requirements.txt` and `mkdocs.yml` and test it with the theme.
  2. Select pilot pages, for example `docs/index.md`, `docs/start-fast/first-task/technician-first-task.md`, and `docs/start-fast/basics/what-is-asset.md`.
  3. Write the first version of `scripts/translate_docs.py` with the protected-content rules, the segment-level cache, and structural validation with English fallback.
  4. Add explicit heading IDs (or an anchor mapping) so that links to anchors survive translation.
  5. Add the machine-translation notice to the overrides.
  6. Confirm that translated pages that include `--8<-- "_snippets/add-users.md"` resolve the snippet correctly for the language, and decide whether snippets are translated per language.
  7. Translate the pilot pages and build the site.
  8. Run `scripts/link_checker.py` and confirm that links, anchors, and images still work. Update the checker if it does not cover translated pages.
  9. Collect reviewer feedback and adjust the glossary and rules.
- **Relevant Context:** `mkdocs.yml`, `requirements.txt`, `tools/overrides/`, `scripts/link_checker.py`, `docs/_snippets/add-users.md`, `docs/.snippets`.
- **Status:** `[~] French pilot built, awaiting native-speaker review` (branch `translation-pilot-fr`)
- **Pilot results:**
  - Pages: `index.md`, `technician-first-task.md`, `administrator-first-task.md` (with the `add-users` snippet), `what-is-asset.md`. 250 segments, all validated and cached.
  - `mkdocs-static-i18n` (suffix structure) works with the `carbon` theme and `use_directory_urls: false`. It does not build its language switcher for non-Material themes, so the switcher is rendered in `tools/overrides/base.html.j2` from the plugin's per-page alternates. `<html lang>` is set per language.
  - Files: `scripts/translate_docs.py` (extract, import, build, status), `translations/glossary.yml`, `translations/cache/fr.json`, French nav titles and site name in `mkdocs.yml`, the machine-translation notice and fallback notice in `base.html.j2`.
  - Heading IDs and cross-page anchors match between English and French. Heading IDs are pinned with `attr_list`.
  - Validation rejects translations that change placeholders, bold or link markers, or protected terms. A page with a missing or invalid segment falls back to English.
  - `mkdocs build` and `scripts/link_checker.py` pass.
- **Findings and work remaining for Sub-task 2:**
  - Raw HTML in pages is not rewritten by MkDocs. The script adds `../` to `src` paths and the search redirect on translated pages. Other raw HTML paths (`href`, inline scripts) need an audit.
  - `base.html.j2` and `nav-search.js` use absolute `config.site_url` for search and base paths, which sends French users to the English search page. Search is not yet localized.
  - The search index mixes English and French entries on one index. Decide whether to index per language.
  - `tools/overrides/assets/javascripts/` and the custom JS strings in `extra_javascript` are still English.
  - The `abbr` definitions in `docs/.snippets` are appended to every page and are still English. They need a per-language `.snippets` file, or the tooltips stay in English on French pages.
  - Only `fr` has nav titles and notice text. A new language needs its own nav titles, notice text, glossary terms, and search language.
  - `site/` is tracked in git. Building modifies it, so decide how translated output is published.
  - Glossary values and the French wording are drafts and need review. Page titles are rewritten as headings, so the nav titles and page titles should be reviewed together.

### Sub-task 2: Full translation, language switcher, and configuration

- **Intent:** Translate all pages and localize the site configuration and interface strings.
- **Expected Outcomes:**
  - All in-scope pages exist in every target language.
  - The language switcher is visible and works in the built site.
  - Navigation titles, `site_name`, `site_description`, and custom UI strings are localized.
  - The search plugin is configured for each language.
  - The build and link checker pass for every language.
- **Todo List:**
  1. Translate all in-scope pages (pages in `nav` plus included snippets) with the script, using the glossary.
  2. Translate `nav` titles and site-level strings in `mkdocs.yml` for each language.
  3. Audit `tools/overrides/` templates and the custom JavaScript files for hard-coded English strings, and localize them.
  4. Configure search language support and test search in each language.
  5. Check that the translation cache is committed or stored, so that later runs retranslate only new or changed segments.
  6. Check layout for text expansion and, if needed, right-to-left languages.
  7. Update `scripts/build.sh` and the deployment guides: add an English-only build flag, make local builds use cached translations only, and confirm that `mkdocs gh-deploy` publishes all languages.
  8. Decide whether translated PDFs are in scope (`scripts/generate_pdf_playwright.py`).
- **Relevant Context:** `mkdocs.yml`, `tools/overrides/base.html.j2`, `tools/overrides/nav.html.j2`, `tools/overrides/partials/nav.html`, `tools/overrides/assets/javascripts/`, `scripts/build.sh`, `LOCAL_DEPLOYMENT_GUIDE.md`, `GITHUB_PAGES_DEPLOYMENT_GUIDE.md`.
- **Status:** `[ ] pending`

### Sub-task 3: CI automation

- **Intent:** Keep translations in sync with the English source without manual effort. Machine translation runs automatically whenever the English source changes, and the results are committed through a pull request.
- **Expected Outcomes:**
  - A GitHub Actions workflow runs when `docs/` changes and opens or updates a single pull request containing updated translations.
  - The existing validation (link checker and `mkdocs build`) runs on that pull request.
  - Only new or changed segments are retranslated, and the cache is preserved between runs.
  - A page that fails structural validation falls back to the previous translation or to English, and the failure is reported without failing the whole run.
  - The job does not run for pull requests from forks, which have no access to secrets.
- **Todo List:**
  1. Decide on the translation API and obtain approval and credentials (see open questions 5 and 6). If no API is approved, define a manual process in which Bob translates in a session and commits the results.
  2. Add API access to the script behind a configuration option, with a mode that uses cached translations only.
  3. Add a workflow under `.github/workflows/` that runs the script and opens or updates a single pull request.
  4. Store credentials as repository secrets, and restrict the job to the main repo.
  5. Confirm that the workflow does not loop on its own pull requests.
  6. Report validation failures and fallbacks in the pull request description.
- **Relevant Context:** `.github/workflows/validate.yml`, `scripts/translate_docs.py`, the translation cache from Sub-task 1.
- **Status:** `[ ] pending`

### Sub-task 4: Images

- **Intent:** Localize text-bearing images after the final images exist.
- **Expected Outcomes:**
  - Final images are in place and inventoried by type: text-bearing diagram, screenshot, or no text.
  - Text-bearing diagrams exist as SVG and are translated per language.
  - Pages reference the correct language-specific image path, with a fallback to the English image.
  - Screenshots are either re-captured from the localized UI or intentionally left in English.
- **Todo List:**
  1. Wait for the temporary images to be replaced, then inventory `docs/images/`.
  2. For each text-bearing diagram, recreate it as SVG with real text elements.
  3. Add an SVG translation step to the script (translate only text nodes, and write a localized copy).
  4. Check translated SVGs for overflow, fonts, and right-to-left mirroring.
  5. Update image references so that each language resolves to its localized image or falls back to English.
  6. Re-capture screenshots after the UI is localized.
- **Relevant Context:** `docs/images/`, pages that reference images (for example `docs/start-fast/basics/how-concepts-work-together.md`, `docs/start-fast/first-task/technician-first-task.md`, `docs/index.md`).
- **Status:** `[ ] pending`

## Notes for implementation in Agent mode

- Implement one sub-task at a time and wait for review before starting the next.
- After each sub-task, update its **Status** in this file and add any context the next sub-task needs.
- Sub-task 0 is a prerequisite for the others. Sub-task 4 should not start until the final images exist.
