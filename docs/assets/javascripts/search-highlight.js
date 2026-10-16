// Search Keyword Highlighting & Destination Scrolling
(function () {
    'use strict';

    function getHighlightTerms() {
        var params = new URLSearchParams(window.location.search);
        var q = params.get('highlight') || params.get('q');
        if (!q) return [];
        return q.split(/\s+/)
            .map(function (w) { return w.trim(); })
            .filter(function (w) { return w.length >= 2; });
    }

    function highlightInElement(root, term) {
        if (!root || !term) return 0;
        var count = 0;
        var regex = new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');

        var walker = document.createTreeWalker(
            root,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function (node) {
                    var parent = node.parentNode;
                    if (!parent) return NodeFilter.FILTER_REJECT;
                    var tag = parent.tagName ? parent.tagName.toUpperCase() : '';
                    if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'MARK' || tag === 'TEXTAREA' || tag === 'INPUT') {
                        return NodeFilter.FILTER_REJECT;
                    }
                    if (parent.closest('.md-theme-toggle') || parent.closest('.cds--header') || parent.closest('.md-sidebar') || parent.closest('.search-highlight-bar')) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    return regex.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
                }
            },
            false
        );

        var nodes = [];
        while (walker.nextNode()) {
            nodes.push(walker.currentNode);
        }

        nodes.forEach(function (textNode) {
            var parent = textNode.parentNode;
            if (!parent) return;
            var text = textNode.nodeValue;
            var parts = text.split(regex);
            if (parts.length > 1) {
                var fragment = document.createDocumentFragment();
                parts.forEach(function (part) {
                    if (part.toLowerCase() === term.toLowerCase()) {
                        var mark = document.createElement('mark');
                        mark.className = 'search-keyword-highlight';
                        mark.textContent = part;
                        fragment.appendChild(mark);
                        count++;
                    } else if (part.length > 0) {
                        fragment.appendChild(document.createTextNode(part));
                    }
                });
                parent.replaceChild(fragment, textNode);
            }
        });

        return count;
    }

    function initHighlight() {
        var terms = getHighlightTerms();
        if (terms.length === 0) return;

        var contentArea = document.querySelector('.rst-content') || document.querySelector('article') || document.querySelector('#main-content');
        if (!contentArea) return;

        var totalMatches = 0;
        terms.forEach(function (term) {
            totalMatches += highlightInElement(contentArea, term);
        });

        if (totalMatches > 0) {
            var firstMark = contentArea.querySelector('.search-keyword-highlight');
            if (firstMark) {
                setTimeout(function () {
                    var headerOffset = -90;
                    var y = firstMark.getBoundingClientRect().top + window.pageYOffset + headerOffset;
                    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
                }, 150);
            }

            // Create dismissible floating indicator
            var banner = document.createElement('div');
            banner.className = 'search-highlight-bar';
            banner.innerHTML = '<span>Highlighting search: <strong>' + terms.join(' ') + '</strong> (' + totalMatches + ' matches)</span>' +
                '<button type="button" aria-label="Clear highlights">&times; Clear</button>';

            banner.querySelector('button').addEventListener('click', function () {
                document.querySelectorAll('.search-keyword-highlight').forEach(function (mark) {
                    var parent = mark.parentNode;
                    if (parent) {
                        parent.replaceChild(document.createTextNode(mark.textContent), mark);
                        parent.normalize();
                    }
                });
                banner.remove();
                var url = new URL(window.location);
                url.searchParams.delete('highlight');
                url.searchParams.delete('q');
                window.history.replaceState({}, document.title, url.toString());
            });

            document.body.appendChild(banner);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHighlight);
    } else {
        initHighlight();
    }
})();
