// Add search bar to navigation sidebar
(function() {
    // Wait for DOM to be ready
    function addNavSearch() {
        // Insert into the sidebar wrapper div, before cds-side-nav
        var sidebarInner = document.querySelector('.md-sidebar--primary .md-sidebar__inner');
        if (!sidebarInner) {
            // Try again after a short delay
            setTimeout(addNavSearch, 100);
            return;
        }

        // Check if search bar already exists
        if (document.getElementById('nav-search-input')) {
            return;
        }

        // Create search container
        var searchContainer = document.createElement('div');
        searchContainer.className = 'nav-search-container';
        
        // Create search input
        var searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.id = 'nav-search-input';
        searchInput.className = 'nav-search-input';
        searchInput.placeholder = 'Search';
        searchInput.setAttribute('aria-label', 'Search navigation');
        
        searchContainer.appendChild(searchInput);
        
        // Insert before cds-side-nav, not inside it (avoids Shadow DOM issues)
        sidebarInner.insertBefore(searchContainer, sidebarInner.firstChild);
        
        // Add search functionality
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                var query = searchInput.value.trim();
                if (query) {
                    var baseUrl = window.location.origin + window.location.pathname.replace(/[^\/]*$/, '');
                    window.location.href = baseUrl + 'search.html?q=' + encodeURIComponent(query);
                }
            }
        });
        
        // Add live filtering
        searchInput.addEventListener('input', function(e) {
            var query = searchInput.value.toLowerCase().trim();
            var navItems = document.querySelectorAll('cds-side-nav-menu-item, cds-side-nav-menu');
            
            if (query === '') {
                // Show all items when search is empty
                navItems.forEach(function(item) {
                    item.style.display = '';
                });
            } else {
                // Filter items based on search query
                navItems.forEach(function(item) {
                    var text = item.textContent.toLowerCase();
                    if (text.includes(query)) {
                        item.style.display = '';
                        // Expand parent menus if item matches
                        if (item.tagName === 'CDS-SIDE-NAV-MENU-ITEM') {
                            var parent = item.closest('cds-side-nav-menu');
                            if (parent) {
                                parent.setAttribute('expanded', '');
                            }
                        }
                    } else {
                        item.style.display = 'none';
                    }
                });
            }
        });
    }
    
    // Start trying to add the search bar
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addNavSearch);
    } else {
        addNavSearch();
    }
})();

// Made with Bob
