![Maximo Application Suite Select](images/MAS_Select_homepage_image.jpeg){ style="width: 100%; max-width: 1400px; height: 200px; object-fit: cover; object-position: center; border-radius: 8px; margin-bottom: 16px; display: block;" }

<h1 style="margin-bottom: 4px;">Maximo Application Suite Select</h1>

<span class="subtitle-help-center" style="display: block; margin-top: 0; margin-bottom: 4px;">Help center</span>

<p style="margin-top: 8px; margin-bottom: 16px;">Find how-to instructions, troubleshooting guidance, and key concepts for Maximo Application Suite Select.</p>

<div class="home-search-container" style="margin-top: 16px;">
    <div class="home-search-wrapper">
        <input type="text" id="home-search-input" class="home-search-input" placeholder="Try: why can't I complete a work order" aria-label="Search documentation">
        <button id="home-search-button" class="home-search-button" aria-label="Search">Search</button>
    </div>
</div>

<script>
(function() {
    var searchInput = document.getElementById('home-search-input');
    var searchButton = document.getElementById('home-search-button');
    
    function performSearch() {
        var query = searchInput.value.trim();
        if (query) {
            window.location.href = search_url + '?q=' + encodeURIComponent(query);
        }
    }
    
    searchButton.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
})();
</script>

## Start here

New to Maximo Application Suite Select? Learn the core concepts and complete your first task.

[Start here →](start-fast/what-can-i-do/overview.md) or read [What is Maximo Application Suite Select?](start-fast/what-is-mas-select.md)

## Frequently asked

- [Why can't I complete a work order?](get-work-done/complete-work/why-cant-complete-work-order.md)
- [Why can't I issue materials?](get-work-done/manage-inventory/why-cant-issue-materials.md)
- [Why do some terms differ from what I'm used to?](start-fast/basics/why-do-terms-differ.md)
- [Why aren't technicians using the system?](improve-results/improve-adoption/technicians-not-using.md)
- [Why does my data look wrong?](improve-results/improve-data/data-looks-wrong.md)

[Browse all questions →](get-answers/index.md)

## Basic concepts

- [Overview](start-fast/basics/what-are-basic-concepts.md)
- [Locations](start-fast/basics/what-is-location.md)
- [Assets](start-fast/basics/what-is-asset.md)
- [Work orders](start-fast/basics/what-is-work-order.md)
- [How locations, assets, and work orders work together](start-fast/basics/how-concepts-work-together.md)

## Need help?

- **Common questions**: Browse [Get answers](get-answers/index.md)
- **Troubleshooting**: Start with the [frequently asked questions](#frequently-asked)
- **In the product**: Click the help icon (?) in the top right, or click a field name and press Alt+F1
