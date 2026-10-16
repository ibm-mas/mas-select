# How do I classify assets?

Use classifications to group similar assets together and add detailed specifications.

## Quick reference

### Table 1. Classification terminology

| Term | What it means |
|------|---------------|
| **Classification** | A category that describes what type of equipment you have (such as "Rotary Fillers" or "Spiral Freezers") |
| **Attribute** | A specific detail about the equipment (such as "Manufacturer" or "Fill capacity") |
| **Hierarchy** | How classifications are organized from broad to specific (such as Equipment → Filling and Packaging → Rotary Fillers) |

!!! warning "TODO: Add visual content"
     A diagram showing classification hierarchy (such as Equipment → Fillers → Rotary Fillers) would be useful here.

---

## 💡 Tips for success

### Choose the correct classification

- Use the most specific classification that fits
- Don't use overly broad classifications (such as just "Equipment")
- Be consistent across similar assets
- Follow your organization's standards

### Complete all relevant attributes

- Fill in as many attributes as possible
- More detail makes assets easier to find and manage
- Include manufacturer and model information
- Add technical specifications for maintenance planning

### Use consistent values

- Use the same format for similar data
- Example: Always use "HP" for horsepower, not "hp" or "Horsepower"
- Follow naming conventions
- This makes searching and reporting more accurate


## Why classify assets?

Classifications help you organize equipment and track information consistently.

When you classify an asset, you can:

- Group similar assets together
- Search for all assets of a specific type
- Store technical details in a standard way
- Report on maintenance by equipment type
- Match vendor or industry standards

For example, if you classify all your fillers the same way, you can easily find them, compare their maintenance costs, and track specifications consistently.

#### Attribute search depends on consistent classification

Maximo's attribute search lets you find all assets meeting a specification — for example, all rotary fillers with a fill capacity above 100 units per minute, or all spiral freezers from a specific manufacturer. This only works when assets of the same type share the same classification and attribute structure. Inconsistent classification breaks this capability silently: the search runs, but returns incomplete results with no indication that records are missing.

---

## How classifications work

### Classification hierarchy

Classifications are organized like a tree, from broad to specific:

- **Top level**: Broad categories (such as "Equipment" or "Refrigeration")
- **Mid level**: Specific types (such as "Filling and Packaging" or "Freezers")
- **Bottom level**: Detailed subtypes (such as "Spiral Freezers" or "Rotary Fillers")

Example:
```
Equipment
  └─ Filling and Packaging
      ├─ Rotary Fillers        (for example, Filler FL-02)
      └─ Case Packers

  └─ Refrigeration
      └─ Freezers
          └─ Spiral Freezers   (for example, Spiral Freezer SF-01)

  └─ Processing Equipment
      └─ Mixers                (for example, Batch Mixer MX-01)
```

Use the most specific classification that fits your equipment. This makes it easier to find and manage.

### Attributes and specifications

Each classification can have attributes that define specific details:

- **Manufacturer**: Who made it
- **Model number**: Specific model
- **Capacity**: How much it can handle
- **Voltage**: Electrical requirements
- **Serial number**: Unique identifier

Once you add these details, they become searchable. You can find all fillers from a specific manufacturer or all mixers with a certain capacity.

!!! warning "TODO: Add visual content"
     A screenshot showing how attributes appear on an asset record would be useful here.

---

## How do I classify an asset?

### Before you classify

Set a **failure class** on the asset record before or at the same time as the classification. The failure class is automatically copied to every work order created for that asset. It controls which failure codes — problem, cause, and remedy — technicians can select during failure reporting. Without it, the Failure Reporting tab on work orders starts empty and structured failure data cannot be captured for this asset.

### What to do:

1. Open the Assets application.
2. Find the asset you want to classify.
3. Open the asset record.
4. On the main tab, set the **Failure Class** field to the appropriate failure hierarchy for this type of equipment.
5. Go to the **Specifications** tab.
6. Click to add a classification.
7. Browse or search for the correct classification.
8. Fill in the attributes:
   - Complete all required attributes
   - Add optional attributes for more detail
9. Save the asset.

The system stores all classification data. The information appears on the asset record and becomes searchable.

!!! warning "TODO: Add visual content"
     A video showing how to classify an asset and add specifications would be useful here.

---

## Common classifications

Typical classifications you might use:

- **Processing Equipment**: Mixers, blenders, homogenizers, pasteurizers
- **Filling and Packaging**: Filling machines, cappers, labelers, case packers
- **Refrigeration**: Chillers, freezers, cold storage units, ice cream hardening tunnels
- **Pumps**: Sanitary pumps, transfer pumps, clean-in-place (CIP) pumps
- **Conveyors**: Belt conveyors, roller conveyors, spiral freezers
- **Tanks and Vessels**: Storage tanks, mixing tanks, fermentation vessels
- **HVAC Systems**: Climate control, air handling units
- **Vehicles**: Forklifts, pallet jacks, delivery trucks

---

## How do I search by classification?

Once assets are classified, you can:

- Find all assets of a specific type
- Filter work orders by equipment classification
- Report on maintenance costs by classification
- Identify assets needing similar maintenance

This makes it easy to analyze maintenance patterns and costs for specific types of equipment.

---

## What if the classification doesn't exist?

If you need a classification that doesn't exist:

1. Check if a similar classification works.
2. Contact your administrator to create new classifications.
3. Don't create duplicate classifications.
4. Follow your organization's approval process.

---

## Related topics

- [What are the basic concepts?](../../start-fast/basics/what-are-basic-concepts.md)
- [How do I track asset history?](track-asset-history.md)
- [What happens when an asset fails?](asset-fails.md)
