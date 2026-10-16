// Context-Sensitive Help (CSH) & Field-Level Deep Linking
(function () {
    'use strict';

    function getCshTarget() {
        var params = new URLSearchParams(window.location.search);
        var cshParam = params.get('csh') || params.get('field') || params.get('error') || params.get('code');
        if (cshParam) return cshParam.trim();

        var hash = window.location.hash;
        if (hash) {
            var cleanHash = hash.replace(/^#/, '');
            if (cleanHash.startsWith('csh-') || cleanHash.startsWith('field-') || cleanHash.startsWith('error-')) {
                return cleanHash;
            }
        }
        return null;
    }

    function findElementByQuery(query) {
        if (!query) return null;
        var normalized = query.toLowerCase().replace(/[^a-z0-9_-]/g, '');

        // 1. Direct ID match
        var el = document.getElementById(query) ||
                 document.getElementById(normalized) ||
                 document.getElementById('field-' + normalized) ||
                 document.getElementById('csh-' + normalized) ||
                 document.getElementById('error-' + normalized);
        if (el) return el;

        // 2. Data attributes
        el = document.querySelector('[data-csh="' + query + '"]') ||
             document.querySelector('[data-field="' + query + '"]') ||
             document.querySelector('[data-csh="' + normalized + '"]') ||
             document.querySelector('[data-field="' + normalized + '"]');
        if (el) return el;

        // 3. Search inside tables, code, strong, dt, or headings
        var candidates = document.querySelectorAll('.rst-content table td, .rst-content code, .rst-content dt, .rst-content strong, .rst-content h2, .rst-content h3, .rst-content h4');
        for (var i = 0; i < candidates.length; i++) {
            var item = candidates[i];
            var text = item.textContent.trim().toLowerCase();
            if (text === query.toLowerCase() || text === normalized) {
                return item.closest('tr') || item;
            }
        }

        return null;
    }

    function activateCsh() {
        var targetQuery = getCshTarget();
        if (!targetQuery) return;

        var targetElement = findElementByQuery(targetQuery);
        if (!targetElement) return;

        // Ensure any collapsed parent details or accordions are opened
        var parentDetails = targetElement.closest('details');
        if (parentDetails) parentDetails.open = true;

        var parentAccordion = targetElement.closest('cds-accordion-item');
        if (parentAccordion) parentAccordion.setAttribute('open', '');

        // Apply visual focus class
        targetElement.classList.add('csh-target-active');

        // Scroll to target with header offset
        setTimeout(function () {
            var yOffset = -90;
            var y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        }, 150);
    }

    function init() {
        activateCsh();
        window.addEventListener('hashchange', activateCsh);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
