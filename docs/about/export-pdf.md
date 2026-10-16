# How to export the documentation as PDF

The Maximo Application Suite Select documentation site can be exported to PDF using automated scripts or your browser's print functionality.

## Method 1: Use the automated script (Recommended)

The easiest way to generate a complete PDF with all pages is to use the provided Python script.

**What to do:**

```bash
cd /Users/yvetteharrington/Documents/GitHub/user_centered_doc
python3 scripts/generate-pdf-complete.py
```

This will:

- Build the site locally
- Process all 36 pages in the navigation
- Combine them into a single PDF
- Save as `maximo-application-suite-select-documentation-complete.pdf` (approximately 0.9 MB)

**Requirements:**

- Python 3.9+
- Playwright (already installed)
- PyPDF2 (install with `pip3 install PyPDF2`)

## Method 2: Print individual pages

1. Navigate to any page on the documentation site
2. Use your browser's print function (Ctrl+P or Cmd+P)
3. Select "Save as PDF" as the destination
4. Adjust print settings as needed:
   - Remove headers and footers
   - Enable background graphics for better appearance
5. Save the PDF

## Method 2: Print the entire site (Recommended)

To create a comprehensive PDF of all documentation:

1. Open the deployed site (`<live site URL>`)
2. Open your browser's Developer Tools (F12)
3. Run this JavaScript in the console to create a single-page version:

```javascript
// Expand all navigation items
document.querySelectorAll('.bx--side-nav__item').forEach(item => {
    if (item.classList.contains('bx--side-nav__item--icon')) {
        item.click();
    }
});

// Wait a moment, then print
setTimeout(() => {
    window.print();
}, 1000);
```

4. In the print dialog:
   - Select "Save as PDF"
   - Set margins to "Default" or "Minimum"
   - Enable "Background graphics"
   - Adjust scale if needed (90-100% works well)
5. Save the PDF

## Method 3: Use a PDF generation tool

For automated PDF generation, you can use tools such as:

- **Playwright** (already installed): Can automate browser-based PDF generation
- **Pandoc**: Convert markdown files directly to PDF
- **Prince XML**: Professional PDF generation from HTML

### Example using Playwright:

```python
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto('<live site URL>')
    page.pdf(path='maximo-application-suite-select-docs.pdf', format='A4')
    browser.close()
```

## 💡 Tips for better PDF output

- Use landscape orientation for wide tables
- Adjust zoom level (90-95%) to fit more content per page
- Enable background graphics to preserve styling
- Consider printing sections separately for better organization
- Use browser extensions like "Print Friendly" for cleaner output

## Note about PDF plugins

The Carbon Design System theme used by this site is not compatible with standard MkDocs PDF plugins. The browser-based methods above provide the best results while maintaining the site's styling and layout.