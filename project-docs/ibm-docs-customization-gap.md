# MAS Select help center: customizations vs IBM Docs (DITA)

Status: draft. The "IBM Docs platform" column is **unverified**. I found no public documentation on what IBM Docs allows for custom scripts, styling, or page layout. Confirm with the IBM Docs platform team before using this list to justify the approach.

DITA itself does not block these customizations. DITA-OT can produce HTML5 output and can be extended with plug-ins, CSS, and JavaScript. Any limit comes from the IBM Docs publishing shell.

| # | MAS Select customization | Source in repo | DITA standard | IBM Docs platform |
|---|---|---|---|---|
| 1 | Role selector that reshapes the homepage by persona, in the browser | `docs/assets/javascripts/role-selector.js` | No. Audience filtering is a build-time condition, so it makes separate outputs rather than a live switch. | Needs custom JavaScript. Confirm. |
| 2 | HTML-rich term tooltips, first use per section only | `abbr-tooltips.js`, `docs/.snippets` | No. DITA has glossary entries but no first-use-per-section tooltip logic. | Confirm. |
| 3 | Hover tooltips on the work order lifecycle diagram | `lifecycle-tooltips.js` | Partial. `<imagemap>` gives clickable hotspots, not tooltips. | Needs custom JavaScript. Confirm. |
| 4 | Field-level context-sensitive help that deep-links and highlights a field (`?csh=`, `?field=`, `?error=`) | `csh.js` | No. DITA has no field-level deep-link behavior. | Confirm. |
| 5 | "Was this page helpful?" widget with follow-up questions, posting to your own Power Automate endpoint | `page-feedback.js` | No. This is a runtime feature, not content. | Likely replaced by IBM Docs' own feedback. Confirm whether it can be routed to your endpoint. |
| 6 | Copy-table button (HTML and TSV) and click-to-copy inline code | `copy-table.js`, `copy-inline-code.js` | No. | Needs custom JavaScript. Confirm. |
| 7 | Search keyword highlight and scroll to the matching spot on the destination page | `search-highlight.js` | No. | The platform controls search. Confirm. |
| 8 | Left-nav filter and search box | `nav-search.js` | No. | The platform controls navigation. Confirm. |
| 9 | Journey-based homepage with a hero search bar, custom layout, and Carbon web components | `docs/index.md`, `tools/overrides/` | No. DITA maps give a topic tree, not custom page layouts. | The platform controls the shell. Confirm. |
| 10 | Active-section highlighting in the right-hand table of contents | `scroll-spy.js` | No. | The platform controls the shell. Confirm. |
| 11 | Tips callouts wrapped in a styled container with an icon | `tips-wrapper.js` | Partly. `<note type="tip">` exists, but the styling is the platform's. | Confirm. |
| 12 | Translation control: committed translations, glossary and do-not-translate enforcement, English fallback with a notice, human review before release | `scripts/translate_docs.py` | Out of scope for DITA. | Translation runs in IBM's pipeline, so a review gate likely can't be added. Confirm. |
| 13 | Per-language search page and language switcher you control | `tools/overrides/search.html`, `base.html.j2` | No. | The platform controls both. Confirm. |
| 14 | Release timing: publish any time with `mkdocs gh-deploy` | `scripts/build.sh` | N/A | Releases follow the IBM Docs publishing pipeline. Confirm. |
| 15 | Embedded IBM Mediacenter videos in a responsive 16:9 frame, with a text link and transcript line below | `.video-embed` and `.video-caption` in `docs/assets/stylesheets/extra.css` | Partial. DITA has `<object>` for embedded media, and the text link ports as a plain link. | Mediacenter videos are restricted by domain. They play on `www.ibm.com/docs` and `mediacenter.ibm.com`, but not on `ibm-mas.github.io` (see video-embed-pattern.md). Confirm the responsive styling in IBM Docs. The text link works either way. |

## Related evidence

An IBM Docs FAQ in Seismic ("IBM Docs FAQ", Apptio documentation) says the site does not natively support downloading or exporting documentation, and tells users to print to PDF from the browser. Check that it applies to MAS. It would affect `docs/about/export-pdf.md`.

## Questions for the IBM Docs platform team

1. Can a publisher add custom JavaScript or CSS to a content set? Items 1 to 11 depend on this.
2. Can the site shell (header, navigation, search, feedback) be replaced or extended? Items 5, 7 to 10, and 13 depend on this.
3. Can machine translation be gated or reviewed before it ships? Item 12 depends on this.
