// Clickable tooltips for abbreviations - only first instance per term
document.addEventListener('DOMContentLoaded', function() {
    const abbrs = document.querySelectorAll('abbr[title]');
    let activeTooltip = null;
    const seenTerms = new Set();

    abbrs.forEach(function(abbr) {
        // Skip tooltips in headings, titles, tables, admonitions, and links
        if (abbr.closest('h1, h2, h3, h4, h5, h6, table, th, td, .admonition, a')) {
            abbr.removeAttribute('title');
            return;
        }

        // Get the term text (normalized to lowercase for comparison)
        const termText = abbr.textContent.toLowerCase().trim();
        
        // If we've already seen this term, remove the tooltip
        if (seenTerms.has(termText)) {
            abbr.removeAttribute('title');
            return;
        }
        
        // Mark this term as seen
        seenTerms.add(termText);

        // Prevent default browser tooltip
        const title = abbr.getAttribute('title');
        abbr.removeAttribute('title');
        abbr.setAttribute('data-title', title);

        // Click handler
        abbr.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            // Remove any existing tooltip
            if (activeTooltip) {
                activeTooltip.remove();
                if (activeTooltip.previousSibling === abbr) {
                    activeTooltip = null;
                    return;
                }
            }

            // Create tooltip
            const tooltip = document.createElement('div');
            tooltip.className = 'abbr-tooltip show';
            tooltip.innerHTML = abbr.getAttribute('data-title').replace(/\n/g, '<br>');

            // Position tooltip
            document.body.appendChild(tooltip);
            const rect = abbr.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = (rect.bottom + window.scrollY + 8) + 'px';

            activeTooltip = tooltip;
            activeTooltip.previousSibling = abbr;
        });
    });

    // Close tooltip when clicking outside
    document.addEventListener('click', function(e) {
        if (activeTooltip && !e.target.closest('abbr[data-title]')) {
            activeTooltip.remove();
            activeTooltip = null;
        }
    });

    // Close tooltip on scroll
    window.addEventListener('scroll', function() {
        if (activeTooltip) {
            activeTooltip.remove();
            activeTooltip = null;
        }
    });
});

// Home page search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.home-search-input');
    const searchButton = document.querySelector('.home-search-button');
    
    if (searchInput && searchButton) {
        // Function to trigger MkDocs search
        function triggerSearch() {
            const query = searchInput.value.trim();
            if (query) {
                // Find the MkDocs search input
                const mkdocsSearchInput = document.querySelector('.md-search__input');
                if (mkdocsSearchInput) {
                    // Set the value and trigger the search
                    mkdocsSearchInput.value = query;
                    mkdocsSearchInput.dispatchEvent(new Event('input', { bubbles: true }));
                    mkdocsSearchInput.focus();
                    
                    // Open the search dialog if it exists
                    const searchLabel = document.querySelector('.md-search__icon[for="__search"]');
                    if (searchLabel) {
                        searchLabel.click();
                    }
                }
            }
        }
        
        // Button click handler
        searchButton.addEventListener('click', triggerSearch);
        
        // Enter key handler
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                triggerSearch();
            }
        });
    }
});

// Made with Bob
