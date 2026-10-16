# What is the correct load order?

Import order matters. Referenced records must exist before records that use them, and parent records must exist before child records.

!!! warning "TODO: Add visual content"
     A diagram showing the dependency chain (reference data → locations → assets → work orders) would be useful here.

## Why does load order matter?

Child records reference parent records. If the parent doesn't exist yet, the child import will fail. Similarly, if a record references supporting data that doesn't exist, the import will fail.

**Example**: You can't create "Ice Cream Plant A > Production Building > Filling Line 2" if "Ice Cream Plant A" and "Production Building" don't exist.

## Recommended import order

### 1. Reference data used by locations and assets

Import supporting records before importing locations or assets that reference them.

**What to import first**:

- GL accounts
- Service addresses
- Calendars and shifts
- Failure classes
- Vendors and manufacturers
- Asset type values
- Classifications and specifications
- Site addresses (bill-to and ship-to)

**Why this matters**: Locations and assets reference these records. If the referenced data doesn't exist, the import will fail.

### 2. Locations (in hierarchy order)

Import locations from top to bottom of the hierarchy:

1. **Top-level locations first** (Ice Cream Plant A)
2. **Second-level locations next** (Production Building)
3. **Lowest-level locations last** (Filling Line 2)

**What to check**:

- Verify the location hierarchy before importing
- Import parent locations before child locations
- Confirm that system location references use valid values
- Confirm that each child location references the correct parent

!!! tip "Import hierarchies sequentially"
    Hierarchies require sequential loading (top → down). Import parent locations first, then their children.

### 3. Assets (including parent-child relationships)

Import assets after their locations exist.

**What to check**:

- Location references are valid
- Parent assets exist (if using asset hierarchies)

**For asset hierarchies**:

- Import parent assets before child assets or subassemblies
- Verify that each child asset references the correct parent asset
- Verify that the parent asset exists at the expected site and, if applicable, location

### 4. Other records that reference locations or assets

Import other records that depend on locations and assets:

- Work orders (reference assets and locations)
- Inventory (reference locations)

## Common hierarchy patterns

### Location hierarchies

**Correct order**:
1. Site (Ice Cream Plant A)
2. Building (Production Building)
3. Area (Filling Line 2)
4. Sub-area (if applicable)

**What happens if you import in wrong order**: Child locations fail because their parent doesn't exist.

**What to do**: Sort your import file so parent records come before child records.

### Asset hierarchies

If using parent-child asset relationships:

**Correct order**:
1. Parent assets
2. Child assets or subassemblies

**What to check**:

- Parent asset IDs are correct
- Each child asset references the correct parent
- Parent assets exist at the expected site and location

### Parent-child relationships

**General rule**: Always import parents before children.

**What to check**:

- Parent location IDs are correct
- Hierarchy levels are properly defined
- System location references are valid

**What to do**: Verify all parent records exist before importing child records.

---

## What happens next?

After understanding load order:

1. Plan your import sequence
2. Import reference data first
3. Prepare data files in the correct order
4. Import parent records before children
5. Verify parents were created successfully
6. Import child records

---

## Continue building your skills

### Run the import

With your data in the correct order, you're ready to import it into the system.

[How do I get data into the system?](get-data-into-system.md)

### Fix errors when an import fails

Some failures are about order and dependency. Learn how to read the error report and resolve problems.

[How do I fix import errors?](why-does-asset-import-fail.md)

---

## Related topics

- [How do I prepare data for import?](prepare-data-for-import.md)
- [Data types](object-structure-data-types.md)
- [How do I fix import errors?](why-does-asset-import-fail.md)
- [How do I get data into the system?](get-data-into-system.md)