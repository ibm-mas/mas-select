// Custom abbreviation tooltips with HTML support
// Only shows tooltip on first instance per major section (h2)

document.addEventListener('DOMContentLoaded', function() {
    // Find all abbr elements
    const abbrs = document.querySelectorAll('abbr[title]');
    
    // Track which terms have been seen in each section
    const seenInSection = new Map();

    // Build a list of all h2 elements in document order for section lookup
    const allH2s = Array.from(document.querySelectorAll('h2'));

    function getSectionIdForElement(el) {
        // Walk up to find the nearest preceding h2 in document order
        const allEls = Array.from(document.querySelectorAll('h2, abbr[title], abbr[data-tooltip]'));
        let lastH2Id = 'top';
        for (const node of allEls) {
            if (node === el) break;
            if (node.tagName === 'H2') lastH2Id = node.id || node.textContent.trim();
        }
        return lastH2Id;
    }
    
    abbrs.forEach(abbr => {
        // Skip abbreviations inside links
        if (abbr.closest('a')) {
            abbr.removeAttribute('title');
            return;
        }
        
        const sectionId = getSectionIdForElement(abbr);
        const term = abbr.textContent.toLowerCase();
        const sectionKey = `${sectionId}-${term}`;
        
        // Check if this is the first instance in this section
        if (seenInSection.has(sectionKey)) {
            // Not the first instance - remove tooltip
            abbr.removeAttribute('title');
            abbr.style.borderBottom = 'none';
            abbr.style.cursor = 'inherit';
            return;
        }
        
        // Mark as seen in this section
        seenInSection.set(sectionKey, true);
        
        // Get the title and parse HTML
        const titleText = abbr.getAttribute('title');
        
        // Replace <br><br> with line breaks and <strong> with bold
        const formattedTitle = titleText
            .replace(/<br><br>/g, '\n\n')
            .replace(/<strong>/g, '')
            .replace(/<\/strong>/g, '');
        
        // Store formatted title and remove original to prevent double tooltips
        abbr.setAttribute('data-tooltip', formattedTitle);
        abbr.removeAttribute('title');
        
        // Create tooltip element
        const tooltip = document.createElement('div');
        tooltip.className = 'abbr-tooltip';
        tooltip.style.display = 'none';
        document.body.appendChild(tooltip);
        
        // Show tooltip on hover
        abbr.addEventListener('mouseenter', function(e) {
            const text = this.getAttribute('data-tooltip');
            const parts = text.split('\n\n');
            
            // Format with HTML
            if (parts.length > 1) {
                tooltip.innerHTML = parts[0] + '<br><br><strong>' + parts[1] + '</strong>';
            } else {
                tooltip.textContent = text;
            }
            
            tooltip.style.display = 'block';
            
            // Position tooltip
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = (rect.bottom + window.scrollY + 8) + 'px';
            
            setTimeout(() => tooltip.classList.add('show'), 10);
        });
        
        abbr.addEventListener('mouseleave', function() {
            tooltip.classList.remove('show');
            setTimeout(() => {
                tooltip.style.display = 'none';
            }, 200);
        });
    });
});

// Made with Bob
