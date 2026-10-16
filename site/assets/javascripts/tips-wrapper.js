// Wrap Tips sections in a unified container
(function() {
    'use strict';

    function wrapTipsSections() {
        // Use MkDocs' base_url variable to build the correct image path
        var root = (typeof base_url !== 'undefined') ? base_url + '/' : './';
        var imgTag = '<img src="' + root + 'images/tips_final.png" class="tips-icon" alt="Tip">\u00a0';

        // Find all h2 and h3 elements with IDs containing "tips"
        const tipsHeadings = document.querySelectorAll('h2[id*="tips"], h3[id*="tips"]');
        
        tipsHeadings.forEach(function(heading) {
            // Create wrapper div
            const wrapper = document.createElement('div');
            wrapper.className = 'tips-callout';
            
            // Insert wrapper before the heading
            heading.parentNode.insertBefore(wrapper, heading);

            // Replace 💡 emoji with image using regex to match the emoji character
            heading.innerHTML = heading.innerHTML.replace(/\u{1F4A1}\s*/u, imgTag);

            // Move heading into wrapper
            wrapper.appendChild(heading);
            
            // Collect all following siblings until we hit another h2/h3 or run out of elements
            let nextElement = wrapper.nextElementSibling;
            
            var headingLevel = heading.tagName; // e.g. 'H2'
            while (nextElement) {
                // Stop at same level or higher heading (e.g. H2 stops at H2, not H3)
                if (nextElement.tagName === headingLevel ||
                    (headingLevel === 'H3' && nextElement.tagName === 'H2')) {
                    break;
                }
                // Remove <hr> that immediately follows the wrapper and stop
                if (nextElement.tagName === 'HR') {
                    nextElement.parentNode.removeChild(nextElement);
                    break;
                }
                // Move element into wrapper
                const elementToMove = nextElement;
                nextElement = nextElement.nextElementSibling;
                wrapper.appendChild(elementToMove);
            }
        });

        // Find all h2 and h3 elements with IDs containing "quick"
        var quickRoot = (typeof base_url !== 'undefined') ? base_url + '/' : './';
        var quickImgTag = '<img src="' + quickRoot + 'images/quick_ref_final.png" class="quick-ref-icon" alt="Quick reference">\u00a0';

        const quickHeadings = document.querySelectorAll('h2[id*="quick"], h3[id*="quick"]');

        quickHeadings.forEach(function(heading) {
            // Create wrapper div with same styling as tips
            const wrapper = document.createElement('div');
            wrapper.className = 'tips-callout';

            // Insert wrapper before the heading
            heading.parentNode.insertBefore(wrapper, heading);

            // Prepend icon to heading
            heading.innerHTML = quickImgTag + heading.innerHTML;

            // Move heading into wrapper
            wrapper.appendChild(heading);

            // Collect all following siblings until we hit another h2/h3 or run out
            let nextElement = wrapper.nextElementSibling;

            var qHeadingLevel = heading.tagName;
            while (nextElement) {
                // Stop at same level or higher heading
                if (nextElement.tagName === qHeadingLevel ||
                    (qHeadingLevel === 'H3' && nextElement.tagName === 'H2')) {
                    break;
                }
                // Remove <hr> that immediately follows the wrapper and stop
                if (nextElement.tagName === 'HR') {
                    nextElement.parentNode.removeChild(nextElement);
                    break;
                }
                // Stop at admonition blocks (warning, note, etc.)
                if (nextElement.classList && nextElement.classList.contains('admonition')) {
                    break;
                }
                const elementToMove = nextElement;
                nextElement = nextElement.nextElementSibling;
                wrapper.appendChild(elementToMove);
            }
        });
        // Find all h2 and h3 elements with IDs containing "share"
        var shareRoot = (typeof base_url !== 'undefined') ? base_url + '/' : './';
        var shareImgTag = '<img src="' + shareRoot + 'images/Share_white.png" class="share-icon" alt="Share with your team">\u00a0';

        const shareHeadings = document.querySelectorAll('h2[id*="share"], h3[id*="share"]');

        shareHeadings.forEach(function(heading) {
            const wrapper = document.createElement('div');
            wrapper.className = 'share-callout';

            heading.parentNode.insertBefore(wrapper, heading);

            heading.innerHTML = shareImgTag + heading.innerHTML;

            wrapper.appendChild(heading);

            let nextElement = wrapper.nextElementSibling;

            var shHeadingLevel = heading.tagName;
            while (nextElement) {
                if (nextElement.tagName === shHeadingLevel ||
                    (shHeadingLevel === 'H3' && nextElement.tagName === 'H2')) {
                    break;
                }
                if (nextElement.tagName === 'HR') {
                    nextElement.parentNode.removeChild(nextElement);
                    break;
                }
                const elementToMove = nextElement;
                nextElement = nextElement.nextElementSibling;
                wrapper.appendChild(elementToMove);
            }
        });

        // Find all h2 and h3 elements with IDs containing "building" or "skills"
        var skillsRoot = (typeof base_url !== 'undefined') ? base_url + '/' : './';
        var skillsImgTag = '<img src="' + skillsRoot + 'images/Education.png" class="skills-icon" alt="Continue building your skills">\u00a0';

        const skillsHeadings = document.querySelectorAll('h2[id*="building"], h3[id*="building"], h2[id*="continue"], h3[id*="continue"]');

        skillsHeadings.forEach(function(heading) {
            // Create wrapper div with skills-callout class
            const wrapper = document.createElement('div');
            wrapper.className = 'skills-callout';

            // Insert wrapper before the heading
            heading.parentNode.insertBefore(wrapper, heading);

            // Prepend skills icon to heading text
            heading.innerHTML = skillsImgTag + heading.innerHTML;

            // Move heading into wrapper
            wrapper.appendChild(heading);

            // Collect all following siblings until we hit another h2 or run out
            let nextElement = wrapper.nextElementSibling;

            var sHeadingLevel = heading.tagName;
            while (nextElement) {
                if (nextElement.tagName === 'H2') {
                    break;
                }
                if (nextElement.tagName === 'HR') {
                    nextElement.parentNode.removeChild(nextElement);
                    break;
                }
                const elementToMove = nextElement;
                nextElement = nextElement.nextElementSibling;
                wrapper.appendChild(elementToMove);
            }
        });
    }
    
    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', wrapTipsSections);
    } else {
        wrapTipsSections();
    }
})();

// Made with Bob
