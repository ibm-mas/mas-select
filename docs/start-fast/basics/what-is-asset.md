---
search:
  boost: 2
  keywords: equipment machine unit machinery infrastructure
---

# What is an asset?

An asset is any piece of equipment, machinery, or infrastructure that your organization maintains. Assets are the physical things you work on.

## Examples of assets
- **Production equipment**: Filler FL-02, Conveyor CV-02, Labeler LB-01
- **Process equipment**: Pumps, motors, compressors, heat exchangers, chillers
- **Facilities**: HVAC systems, refrigeration units, lighting systems
- **Vehicles**: Trucks, forklifts, pallet jacks
- **Storage**: Tanks, silos, cold storage units

## Why assets matter
- Track maintenance history for each piece of equipment
- Schedule preventive maintenance
- Monitor asset condition and performance
- Plan for replacements and upgrades
- Calculate total cost of ownership

## Asset hierarchy

<div style="width: 50%; float: right; margin-left: 20px; margin-bottom: 20px;">
<img src="../../images/sample_asset_hierarchy.svg" alt="Explained in body text" style="width: 100%; display: block;">
<p class="figure-caption">Figure 1: Sample asset hierarchy for an ice cream manufacturer</p>
</div>

An asset is a physical piece of equipment that you maintain. You can organize assets in a parent-child hierarchy to show how equipment connects and to track maintenance at the correct operational level.

In Figure 1, the top-level system is the Filling line system, which contains three parent assets:

- **Filler FL-02**: Contains child components Drive motor and Nozzle assembly. The Nozzle assembly breaks down further into Part 1: Nozzle body and Part 2: Shutoff valve.
- **Conveyor CV-02**: Contains child components Belt and Sensor.
- **Labeler LB-01**: Contains child components Printhead and Label sensor.

Assets are installed in locations, which show where the equipment operates.

Using asset hierarchies has many benefits:

- Understand how equipment is related
- Track maintenance for a complete system or a specific component
- See both what the equipment is and where it is installed

Want to see how this connects to locations and work orders? See [How do locations, assets, and work orders work together?](how-concepts-work-together.md)

Your hierarchy is hard to change once work history builds up, so plan it before you load data. See [How do I plan my asset hierarchy?](../../get-work-done/setup-control/plan-your-asset-hierarchy.md)

<div style="clear: both;"></div>

## Naming assets

**✓ Do**

- Use a short alphanumeric asset number
- Write a clear, specific description
- Use a consistent description format
- Identify the parent asset when relevant

**✗ Don't**

- Don't use vague descriptions such as PUMP
- Don't overload the asset number with too much detail

**Example assets**: Filler FL-02, Conveyor CV-02, Labeler LB-01.

**Example descriptions**: Filler FL-02, cone filling station; Labeler LB-01, carton labeling station.

---

## Related topics
- [What are the basic concepts?](what-are-basic-concepts.md)
- [What is a work order?](what-is-work-order.md)
- [What is a location?](what-is-location.md)
- [How do locations, assets, and work orders work together?](how-concepts-work-together.md)
- [How do I decide: location, asset, or spare part?](../../get-work-done/setup-control/decide-location-asset-spare-part.md)
- [How do I plan my asset hierarchy?](../../get-work-done/setup-control/plan-your-asset-hierarchy.md)
- [How do I track asset history?](../../get-work-done/manage-assets/track-asset-history.md)
- [How do I manage more assets?](../../work-smarter/scale-operation/manage-more-assets.md)
