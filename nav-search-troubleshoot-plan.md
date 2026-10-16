# Plan: Fix Nav Search Field Visibility

## Overview

The nav search input is correctly rendered in the built HTML — confirmed at
`site/index.html` lines 111–113. It is not visible in the browser.

The root cause is that `cds-side-nav` (a Carbon web component with a Shadow DOM)
renders its own internal panel at full height, covering the search input above it.
Our CSS cannot pierce the Shadow DOM directly.

The fix requires two coordinated changes:
1. Push `cds-side-nav` down so the search input above it is not covered
2. Make the search input visually match the sidebar background

Both changes live in files we control: `docs/assets/stylesheets/extra.css` and
`tools/overrides/base.html.j2`.

---

## Sub-Tasks

---

### Sub-Task 1 — Confirm the exact rendering issue via browser DevTools

**Intent**  
Verify whether `cds-side-nav` is overlapping the search container using absolute or
fixed positioning from within its shadow root, or whether the container is simply
being rendered with zero height or hidden overflow.

**Expected Outcomes**  
- We know whether `cds-side-nav` uses `position: absolute/fixed` internally
- We know the computed height of `.nav-search-container` in the browser
- We know whether the container is visually clipped or covered

**Todo List**  
1. Open `python3 -m mkdocs serve` and load the site
2. Open DevTools → Elements, find `.nav-search-container`
3. Check computed styles: `height`, `display`, `visibility`, `overflow`, `z-index`
4. Expand the `cds-side-nav` shadow root and check if its inner panel uses
   `position: absolute` or `height: 100%`
5. Record findings

**Relevant Context**  
- Built HTML: `site/index.html` lines 110–114
- `cds-side-nav` CSS: `site/css/theme.css` lines 1006–1056
- Shadow DOM is not accessible from our CSS without `::part()` or CSS custom properties

**Status** `[ ] pending`

---

### Sub-Task 2 — Add a top margin to cds-side-nav to create space for the search box

**Intent**  
Force `cds-side-nav` to start below the search input by giving it a top margin equal
to the height of the search container (~50px). This is the most reliable approach
because it works regardless of Shadow DOM internals.

**Expected Outcomes**  
- Search input is visible above the nav list
- Nav list starts below the search input with no overlap

**Todo List**  
1. Measure the rendered height of `.nav-search-container` (approximately 50px with
   padding + input + border)
2. In `docs/assets/stylesheets/extra.css`, add `margin-top` to `cds-side-nav` to
   match that height
3. Make `.nav-search-container` `position: absolute; top: 0; width: 100%` so it
   sits above the nav component in the stacking context
4. Build locally and verify visually

**Relevant Context**  
- `docs/assets/stylesheets/extra.css` — current `cds-side-nav` rule at line ~297
- `tools/overrides/base.html.j2` — search input injected at line 82
- `site/css/theme.css` line 204: `.md-sidebar__inner { padding: var(--spacing-05) 0 }`
  — this 16px top padding must be removed or overridden so the search sits flush at top

**Status** `[ ] pending`

---

### Sub-Task 3 — Match search container background to sidebar theme

**Intent**  
Ensure the search container background colour matches the dark sidebar in the default
g90 theme so it looks like a native part of the sidebar rather than a floating box.

**Expected Outcomes**  
- Search container background matches `#393939` (g90 sidebar colour)
- Input field uses the correct dark field colour `#525252`
- Placeholder text is legible (`#c6c6c6`)

**Todo List**  
1. In `docs/assets/stylesheets/extra.css`, update `.nav-search-container` background
   to use `var(--cds-background, #393939)` to follow the active theme
2. Update `.nav-search-input` background to `var(--cds-layer, #525252)`
3. Update placeholder colour to `var(--cds-text-secondary, #c6c6c6)`
4. Build locally and verify in both light and dark themes

**Relevant Context**  
- `docs/assets/stylesheets/extra.css` lines 287–324 — current nav search styles
- `site/css/theme.css` lines 1021–1029 — g90/g100 Carbon tokens for sidebar

**Status** `[ ] pending`

---

### Sub-Task 4 — Build and deploy

**Intent**  
Confirm the fix works locally then push to live.

**Todo List**  
1. Run `python3 -m mkdocs build`
2. Run `python3 -m mkdocs serve` and visually confirm search is visible
3. `git add -A && git commit -m "Fix nav search visibility" && git push`

**Status** `[ ] pending`
