// Active Scroll-Spy for Right-Rail Table of Contents
(function () {
    'use strict';

    function initScrollSpy() {
        var tocLinks = document.querySelectorAll('.md-sidebar--secondary .md-toc__link');
        if (!tocLinks || tocLinks.length === 0) return;

        var headingMap = new Map();
        var headings = [];

        tocLinks.forEach(function (link) {
            var href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                var targetId = decodeURIComponent(href.substring(1));
                var heading = document.getElementById(targetId);
                if (heading) {
                    headingMap.set(heading, link);
                    headings.push(heading);
                }
            }
        });

        if (headings.length === 0) return;

        function updateActiveHeading() {
            var scrollY = window.pageYOffset || document.documentElement.scrollTop;
            var headerOffset = 120; // Accounts for fixed Carbon header and padding
            var currentHeading = headings[0];

            for (var i = 0; i < headings.length; i++) {
                var heading = headings[i];
                var top = heading.getBoundingClientRect().top + scrollY;
                if (scrollY + headerOffset >= top) {
                    currentHeading = heading;
                } else {
                    break;
                }
            }

            tocLinks.forEach(function (link) {
                link.classList.remove('is-active', 'toc-active');
            });

            if (currentHeading) {
                var activeLink = headingMap.get(currentHeading);
                if (activeLink) {
                    activeLink.classList.add('is-active', 'toc-active');

                    // Keep active item in view if TOC sidebar is scrollable
                    var container = document.querySelector('.md-sidebar--secondary .md-sidebar__scrollwrap');
                    if (container) {
                        var linkTop = activeLink.offsetTop;
                        var containerHeight = container.clientHeight;
                        var currentScroll = container.scrollTop;
                        if (linkTop < currentScroll || linkTop > currentScroll + containerHeight - 40) {
                            container.scrollTop = linkTop - containerHeight / 3;
                        }
                    }
                }
            }
        }

        var ticking = false;
        window.addEventListener('scroll', function () {
            if (!ticking) {
                window.requestAnimationFrame(function () {
                    updateActiveHeading();
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });

        // Initial check on page load
        updateActiveHeading();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initScrollSpy);
    } else {
        initScrollSpy();
    }
})();
