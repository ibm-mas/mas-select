# How do I plan my location hierarchy?

Your location hierarchy is the physical map of your facility. It organizes buildings, departments, areas, and rooms into a clear parent-child structure.

When loading data into Maximo Application Suite Select, planning your locations is the foundation of your setup. Locations must be established before you load equipment, inventory, or work orders, as outlined in [What is the correct load order?](correct-load-order.md).

Work orders, maintenance history, safety requirements, and costs roll up through the location hierarchy. A well-planned structure lets you view all maintenance across an entire building or drill down to a single room. A poorly structured hierarchy leads to incomplete reports, lost history, and difficult reorganizations once data is in use.

<div class="video-embed" markdown="1">
<img src="../../images/video_placeholder_location_hierarchy.svg" alt="Video preview: Building an effective location hierarchy (about 2 minutes)." style="width: 100%; border-radius: 4px; display: block;">
</div>
<p class="video-caption">Building an effective location hierarchy (about 2 minutes). <em>[Video in production — placeholder preview for design review]</em></p>

## Core principles for planning your hierarchy

Before loading records into the system, follow these five best practices with your maintenance planners, supervisors, and operations team.

### 1. Map your physical layout on paper first

Before creating records in the system, sketch the facility on paper or a whiteboard. Distinguish clearly between locations, assets, and storerooms:

- **Location**: A fixed physical place where work happens or where equipment is installed, such as `Production building` or `Filling line room`. Locations remain static and accumulate the long-term history of that space.
- **Asset**: Maintainable equipment operating at a location, such as `Filler FL-02` or a motor. Assets can move between locations or into a storeroom, retaining their own lifecycle history wherever they go.
- **Storeroom**: A specialized location used specifically to receive, store, and issue inventory items, such as `Main storeroom`.

Ask yourself: *"Is this an immovable place where work occurs, or a piece of equipment that could be moved, replaced, or overhauled?"*

### 2. Group by physical place, not by functional use

The primary location hierarchy must reflect actual physical geography:

$$\text{Site} \longrightarrow \text{Building} \longrightarrow \text{Area / Floor} \longrightarrow \text{Room / Zone}$$

Because costs, safety plans, and work orders roll up through parent locations, grouping locations by what they are used for, such as grouping all restrooms or all compressor rooms across multiple buildings under one branch, breaks facility-level reporting. A report run on `Production building` will miss any rooms placed outside that building's branch.

### 💡 Tip: Grouping by function

If you need to search or group locations by type or function, such as finding all restrooms or all electrical closets across a facility, use **Classifications** or location attributes rather than altering the primary physical hierarchy.

### 3. Decide how deep to go: stop at the maintainable level

A frequent design mistake is creating too many nested levels. Deep hierarchies make drilldown navigation slow and cumbersome for technicians in the field.

For every level you consider adding, ask this rule-of-thumb question:

> **"Will someone plan, assign, or report maintenance work at this specific level?"**

- If **yes**, create the location record.
- If **no**, stop at the parent level.

For example, if maintenance is scheduled for `Cold storage` as an entire room, do not create sub-locations for every individual shelf or rack. Start with a clean, shallow structure of typically 3 to 5 levels. It is much easier to add sub-locations later as your maintenance processes mature than to remove unnecessary levels after work history is recorded.

### 4. Connect every child location to a valid parent

Except for the top-level site, every operational location in your hierarchy must have an assigned parent location.

Locations created without a parent become orphaned records. They do not appear in hierarchy drilldown navigation trees and are excluded from summary reports run on parent facilities.

### 5. Standardize naming and import from the top down

Establish consistent, descriptive naming conventions across the facility. Combine a clear code with an easily recognized name, such as `BLD-PROD / Production building` and `RM-MIX / Mixing room`.

When importing data from spreadsheets:

1. **Sort your records top-down**: Parents must exist before child records are added.
2. **Import order**: Site $\rightarrow$ Parent locations $\rightarrow$ Child locations $\rightarrow$ Assets.
3. If child rows appear before their parents in an import file, the database cannot resolve the parent reference, leading to import errors and orphaned records.

---

## What a good location hierarchy looks like

In this sample ice cream plant, the structure follows a clear physical layout from the site down to individual rooms:

- **Ice cream main plant** is the top-level site that provides the single organizational context for all maintenance records.
- **Production building** is a primary parent location that groups related production spaces.
- **Mixing room**, **Filling line room**, and **Packaging zone** are child locations under Production building.
- **Cold storage** and **Main storeroom** are separate operating locations directly under the site.

<img src="../../images/sample_location_hierarchy.svg" alt="Location hierarchy for the Ice cream main plant site. Production building is a parent location with three child locations: Mixing room, Filling line room, and Packaging zone. Cold storage and Main storeroom are separate locations in the same site." style="width: 100%; max-width: 480px; display: block; margin: 16px auto;">

### Why this structure works

This layout succeeds because it mirrors actual physical geography while meeting everyday operational and reporting needs:

- **Accurate cost and work roll-up**: Work orders, labor hours, and maintenance costs assigned to `Mixing room`, `Filling line room`, or `Packaging zone` automatically roll up into summary reports for `Production building`. Supervisors can assess total building maintenance expenses or drill down into a single room.
- **Targeted context for technicians**: When technicians open `Filling line room` in Maximo Mobile or the desktop application, they see only the equipment, safety requirements, and open work orders relevant to that specific room, without clutter from other areas.
- **Clear separation of storerooms and production areas**: `Main storeroom` is designated as an inventory location for receiving, storing, and issuing parts. Keeping storerooms separate from operating production rooms prevents inventory transactions from mixing with equipment maintenance history.
- **Independent tracking for standalone facilities**: `Cold storage` sits directly under the site because it is a separate physical structure with its own refrigeration systems and temperature controls, allowing its costs and work to be tracked independently of the main production building.
- **Fast, shallow drilldown**: Technicians reach any room in only two navigation steps from the site root. This shallow depth keeps navigation fast in the field while providing all the detail required for work management.
- **Equipment mobility**: When assets such as fillers, motors, or pumps are replaced, moved to another room, or sent for overhaul, the physical location hierarchy remains stable while the asset records track their own movement history.

---

## Spot the problem: test your plan

Review these common planning scenarios to test your understanding before building your own hierarchy.

### Problem 1: Which place is each restroom in?

The plant has two restrooms. In the hierarchy below, both are placed under a separate parent location named `Restrooms`.

<img src="../../images/sample_location_hierarchy_grouped_by_use.svg" alt="Location hierarchy for the Ice cream main plant site. Production building contains Mixing room, Filling line room, and Packaging zone. A separate location named Restrooms contains Production building restroom and Packaging zone restroom." style="width: 100%; max-width: 480px; display: block; margin: 16px auto;">

A supervisor runs a cost and work history report for `Production building` for the past quarter. What goes wrong?

<details markdown="1">
<summary>Show the answer</summary>

The `Production building restroom` is omitted from the report because it sits under `Restrooms`, not under `Production building`.

The hierarchy was grouped by functional use rather than physical location.

**What to do instead:** Place each restroom under the physical area where it is located. `Production building restroom` belongs under `Production building`. `Packaging zone restroom` belongs under `Packaging zone`.

<img src="../../images/sample_location_hierarchy_by_place.svg" alt="Corrected location hierarchy for the Ice cream main plant site. Production building contains Mixing room, Filling line room, Packaging zone, and Production building restroom. Packaging zone contains Packaging zone restroom. Cold storage sits at the site level." style="width: 100%; max-width: 480px; display: block; margin: 16px auto;">

If you need to find all restrooms across the plant, assign a common Classification or type rather than creating a functional branch in your location hierarchy.

</details>

### Problem 2: Where is the Packaging zone?

In the hierarchy below, `Packaging zone` was added to the site without selecting a parent location.

<img src="../../images/sample_location_hierarchy_missing_parent.svg" alt="Location hierarchy for the Ice cream main plant site. Production building contains Mixing room and Filling line room. Cold storage is a separate location. Packaging zone is an orphan record with no connecting line to a parent." style="width: 100%; max-width: 480px; display: block; margin: 16px auto;">

What happens when a planner opens `Production building` in the drilldown tree?

<details markdown="1">
<summary>Show the answer</summary>

`Production building` displays only `Mixing room` and `Filling line room`. `Packaging zone` is missing from the tree view and is excluded from building summary reports.

Because `Packaging zone` has no parent, it exists as an orphaned record at the site level.

**What to do instead:** Assign `Production building` as the parent location for `Packaging zone`.

<img src="../../images/sample_location_hierarchy_with_parent.svg" alt="Corrected location hierarchy for the Ice cream main plant site. Production building contains Mixing room, Filling line room, and Packaging zone. Cold storage sits at the site level." style="width: 100%; max-width: 480px; display: block; margin: 16px auto;">

</details>

### Problem 3: How many levels should the plant have?

Your maintenance team wants to add sub-locations under `Cold storage` for every rack, shelf, and bin. A colleague argues that more detail is always better.

What question should you ask before creating these sub-locations?

<details markdown="1">
<summary>Show the answer</summary>

Ask: **"Will anyone plan, perform, or report maintenance work at an individual shelf level?"**

If maintenance is performed on the refrigeration units, doors, and ambient room space—not individual storage shelves—stop at `Cold storage`. Adding unnecessary levels makes the hierarchy difficult to navigate without providing actionable maintenance data.

If parts or items need shelf-level tracking, that is handled through inventory bins in storerooms, not operational location records.

</details>

### Problem 4: In what order do you load location records?

You are importing location records from a spreadsheet with rows in the following sequence:

1. `Packaging zone`
2. `Mixing room`
3. `Production building`
4. `Ice cream main plant`

What happens when you run the import in this order?

<details markdown="1">
<summary>Show the answer</summary>

`Packaging zone` and `Mixing room` fail to import because their parent, `Production building`, does not exist in the database yet. `Production building` then fails because `Ice cream main plant` has not been loaded yet.

**What to do instead:** Sort import rows top-down:

1. `Ice cream main plant` — Site
2. `Production building` — Parent location
3. `Mixing room`, `Filling line room`, `Packaging zone` — Child locations

Always verify your import count against the number of rows in your source spreadsheet. Prepare your spreadsheet formatting by following [How do I prepare data for import?](prepare-data-for-import.md). For details on sequencing, see [What is the correct load order?](correct-load-order.md), and see [How do I fix import errors?](why-does-asset-import-fail.md) if rows fail to load.

</details>

---

## Planning checklist

Before loading your location hierarchy into Maximo Application Suite Select, verify each requirement:

| Check | Planning item | What to verify |
|---|---|---|
| [ ] | **Physical places only** | Every location record represents a physical place where work happens, not a movable piece of equipment. |
| [ ] | **Physical geography** | The hierarchy is organized by physical location from site to building to room, not functional use. |
| [ ] | **Valid parent connections** | Every child location connects to an existing parent location to prevent orphan records. |
| [ ] | **Maintainable depth** | The structure stops at the level where work is planned, assigned, or reported, typically 3 to 5 levels. |
| [ ] | **Standardized naming** | Location codes and identifiers follow consistent naming conventions across the site. |
| [ ] | **Top-down import sequence** | Spreadsheet rows are sorted so that parent locations exist before child records are imported. |

!!! warning "TODO: Confirm with a subject matter expert"
     [SME confirmation required: confirm that work and cost reports follow the location hierarchy in Maximo Application Suite Select, and whether location systems are available. The answers above use sources about Maximo Manage.]

---

## Continue building your skills

### Recommended next step: Plan your asset hierarchy

With your location hierarchy planned, organize your machinery, subassemblies, and maintainable components operating within those physical locations.

[How do I plan my asset hierarchy?](plan-your-asset-hierarchy.md)

### Related skills

- [How do I prepare data for import?](prepare-data-for-import.md): Download CSV templates and format ID columns as text.
- [How do I get data into the system?](get-data-into-system.md): Learn the upload, preview, and commit steps in Data Management.
- [How do I fix import errors?](why-does-asset-import-fail.md): Troubleshoot missing parent locations or invalid fields.
- [What is the correct load order?](correct-load-order.md): Review the full five-step data onboarding roadmap.

---

## Related topics

- [Locations](../../start-fast/basics/what-is-location.md)
- [What is an asset?](../../start-fast/basics/what-is-asset.md)
- [How do locations, assets, and work orders work together?](../../start-fast/basics/how-concepts-work-together.md)
- [Which object structure do I use for each data type?](object-structure-data-types.md)
