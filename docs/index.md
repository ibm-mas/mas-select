![Maximo Application Suite Select](images/MAS_Select_homepage_image.jpeg){ style="width: 100%; max-width: 1400px; height: 200px; object-fit: cover; object-position: center; border-radius: 8px; margin-bottom: 16px; display: block;" }

<h1 style="margin-bottom: 4px;">Maximo Application Suite Select</h1>

<span class="subtitle-help-center" style="display: block; margin-top: 0; margin-bottom: 4px;">Help center</span>

<p style="margin-top: 8px; margin-bottom: 16px;">Welcome to Maximo Application Suite Select, a streamlined maintenance management system for tracking equipment, managing work, and keeping operations running smoothly.</p>

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

## Frequently asked

- [Why can't I complete a work order?](get-work-done/complete-work/why-cant-complete-work-order.md)
- [Why can't I issue materials?](get-work-done/manage-inventory/why-cant-issue-materials.md)
- [Why do some terms differ from what I'm used to?](start-fast/basics/why-do-terms-differ.md)
- [Why aren't technicians using the system?](improve-results/improve-adoption/technicians-not-using.md)
- [Why does my data look wrong?](improve-results/improve-data/data-looks-wrong.md)

## What are the basic concepts?

Learn the building blocks you'll use every day:

- [What is a <abbr title="Physical places where work is performed">location</abbr>?](start-fast/basics/what-is-location.md) - Physical places where work is performed
- [What is an <abbr title="Equipment, machinery, and infrastructure you maintain">asset</abbr>?](start-fast/basics/what-is-asset.md) - Equipment, machinery, and infrastructure you maintain
- [What is a <abbr title="Instructions to perform maintenance work">work order</abbr>?](start-fast/basics/what-is-work-order.md) - Instructions to perform maintenance work
- [How do <abbr title="Physical places where work is performed">locations</abbr>, <abbr title="Equipment, machinery, and infrastructure you maintain">assets</abbr>, and <abbr title="Instructions to perform maintenance work">work orders</abbr> work together?](start-fast/basics/how-concepts-work-together.md) - See how these concepts connect in real scenarios

## What is Maximo Application Suite Select?

Maximo Application Suite Select is a ready-to-use Software-as-a-Service (SaaS) solution.

No installation. No configuration. No customization needed. Just log in and start working:

- Track assets
- Create and complete work orders
- Schedule preventive maintenance
- Manage parts inventory
- Monitor performance

## Who is this for?

- **Technicians** can find and complete work orders, for example, complete work on Filler FL-02.
- **Supervisors** can plan, assign, and track maintenance work, for example, assign preventive maintenance for Spiral freezer SF-01.
- **Inventory clerks** can manage parts and supplies, for example, issue parts from Main storeroom.
- **Administrators** can load data and set up users, for example, load users for Ice cream plant A.

### About these examples

To make onboarding easier to follow, the examples in this help center use one consistent scenario: an ice-cream manufacturing operation. You'll see the same site, locations, assets, and work, so you can focus on how the workflow fits together.

## What problems does it solve?

Maximo Application Suite Select helps you move from reactive "run-to-fail" maintenance to organized, preventive maintenance:

- **Stop losing track of work:** all work orders in one system, not scattered across spreadsheets or paper
- **Prevent equipment failures:** schedule maintenance before problems happen
- **Know what you have:** track all your assets and their maintenance history
- **Control parts inventory:** see what's in stock and what's been used
- **Make better decisions:** use data to understand what's working and what needs attention

## Take your work mobile

IBM Maximo Mobile lets technicians view assets, manage work orders, and update work from their phone or tablet, wherever work happens.

<div style="display: flex; align-items: flex-start; gap: 24px; margin: 16px 0;">
  <img src="images/mobile card.png" alt="IBM Maximo Mobile app — download and manage work on the go" style="width: 160px; flex-shrink: 0; border-radius: 8px;">
  <div>
    <p style="margin-top: 0;">Download IBM Maximo Mobile from the App Store or Google Play, then sign in with your Maximo Application Suite Select credentials.</p>
    <ul>
      <li><strong>Technicians:</strong> See your assigned work queue, complete work orders, and record actuals on the go.</li>
      <li><strong>Supervisors:</strong> Assign and approve work from the field.</li>
      <li><strong>Inventory clerks:</strong> Issue parts, receive inventory, and transfer items between storerooms.</li>
      <li><strong>Administrators:</strong> <a href="get-work-done/setup-control/configure-maximo-mobile.html">Configure IBM Maximo Mobile</a> for your team before anyone signs in.</li>
    </ul>
  </div>
</div>

## Get started in minutes

New to Maximo Application Suite Select? Start here:

1. [What can I do in my role?](start-fast/what-can-i-do/overview.md)
2. [Learn the basics](start-fast/basics/what-are-basic-concepts.md)
3. [Complete your first task](start-fast/what-can-i-do/overview.md)

## Find what you need

### Start fast
Get from zero to first value in minutes.

[Explore start fast →](start-fast/what-can-i-do/overview.md)

### Get work done
Complete everyday maintenance tasks.

[Explore get work done →](get-work-done/plan-work/plan-recurring-maintenance.md)

### Improve results
Make your maintenance program more efficient.

[Explore improve results →](improve-results/improve-work/reduce-downtime.md)

### Work smarter
Use Artificial Intelligence (AI), automation, and insights to scale.

[Explore work smarter →](work-smarter/ai-automation/ai-improve-maintenance.md)

### Get answers
Find quick answers to common questions.

[Browse all questions →](get-answers/index.md)

## Need help?

- **In the product**: Click the help icon (?) in the top right
- **For a specific field**: Click the field name or press Alt+F1
- **Can't find an answer?**: Check the [Get answers](get-answers/index.md) section

---

**Ready to start?** Go to [What can I do in my role?](start-fast/what-can-i-do/overview.md)
