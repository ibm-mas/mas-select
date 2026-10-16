---
search:
  boost: 2
  keywords: object structure data type import MXAPIASSET MXAPIOPERLOC assets locations work orders inventory reference guide
---

# Which object structure do I use for each data type?

When you import data into Maximo Application Suite Select, you use an object structure to define what you're loading. Think of an object structure as a spreadsheet template that defines the columns available for a particular type of data, such as assets or locations. You pick the template that matches what you're loading, then fill it with your data.

Use this reference to find the correct object structure for each data type.

## Quick reference

### Table 1. Object structure by data type

`[SME confirmation required: Verify all object structure names against the Maximo Application Suite Select Data Management application before publishing. Names noted with * are unconfirmed and may differ from standard Maximo Manage names.]`

| Data type | Object structure | Notes |
|-----------|-----------------|-------|
| **Asset** | `MXAPIASSET` | Use for importing asset records, including asset numbers, descriptions, locations, and classifications. `[SME confirmation required: Confirm whether MXAPIASSET or MXAPIASSETS is the correct name in Maximo Application Suite Select.]` |
| **Inventory** | `MXAPIINVENTORY` | `[SME confirmation required: Confirm the correct object structure name and usage for inventory imports in Maximo Application Suite Select.]` |
| **Item** | `MXAPIITEM` | `[SME confirmation required: Confirm the correct object structure name and usage for item imports in Maximo Application Suite Select.]` |
| **<abbr title="A reusable set of tasks, materials, and tools that can be applied to a work order">Job plan</abbr>** | `MXAPIJOBPLAN` | `[SME confirmation required: Confirm the correct object structure name and usage for job plan imports in Maximo Application Suite Select.]` |
| **Labor** | `MXAPILABOR` | `[SME confirmation required: Confirm the correct object structure name and usage for labor imports in Maximo Application Suite Select.]` |
| **Location** | `MXAPIOPERLOC` | Use for importing operating locations and location hierarchies. `[SME confirmation required: Confirm whether MXAPIOPERLOC or MXOPERLOC is the correct name in Maximo Application Suite Select.]` |
| **Meter** | `MXAPIMETER` | `[SME confirmation required: Confirm the correct object structure name and usage for meter imports in Maximo Application Suite Select.]` |
| **PM/Master PM** | `MXAPIPM` | `[SME confirmation required: Confirm the correct object structure name and usage for PM and Master PM imports in Maximo Application Suite Select.]` |
| **Service Item** | `MXAPISERVITEM` | `[SME confirmation required: Confirm the correct object structure name and usage for service item imports in Maximo Application Suite Select.]` |

## Common fields by data type

### Assets (`MXAPIASSET`)

`[SME confirmation required: Confirm the required and commonly used fields for asset imports in Maximo Application Suite Select. The following are common fields in standard Maximo Manage and require validation.]`

| Field | Description | Required |
|-------|-------------|---------|
| `ASSETNUM` | Unique identifier for the asset | Yes |
| `SITEID` | The site the asset belongs to | Yes |
| `DESCRIPTION` | Short description of the asset | Recommended |
| `LOCATION` | The operating location of the asset | No |
| `ASSETTYPE` | The asset type classification | No |
| `STATUS` | Asset status, such as OPERATING or DECOMMISSIONED | No |
| `SERIALNUM` | Serial number of the asset | No |
| `VENDOR` | Vendor or manufacturer name | No |

### Locations (`MXAPIOPERLOC`)

`[SME confirmation required: Confirm the required and commonly used fields for location imports in Maximo Application Suite Select. The following are common fields in standard Maximo Manage and require validation.]`

| Field | Description | Required |
|-------|-------------|---------|
| `LOCATION` | Unique identifier for the location | Yes |
| `SITEID` | The site the location belongs to | Yes |
| `DESCRIPTION` | Short description of the location | Recommended |
| `TYPE` | Location type, such as OPERATING | Yes |
| `PARENT` | Parent location identifier for hierarchy | No |
| `STATUS` | Location status, such as OPERATING | No |

## What to do next

- [How do I prepare data for import?](prepare-data-for-import.md): Format your import file correctly before loading data.
- [What is the correct load order?](correct-load-order.md): Import data in the correct sequence to avoid reference errors.
- [How do I fix import errors?](why-does-asset-import-fail.md): Troubleshoot common import failures.

---

## Related topics

- [How do I prepare data for import?](prepare-data-for-import.md)
- [What is the correct load order?](correct-load-order.md)
- [How do I fix import errors?](why-does-asset-import-fail.md)
- [How do I get data into the system?](get-data-into-system.md)
