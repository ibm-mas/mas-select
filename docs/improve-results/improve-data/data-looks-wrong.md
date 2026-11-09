---
search:
  boost: 2
  keywords: data looks wrong duplicate assets orphan locations negative inventory corrupted data troubleshooting
---

# Why does my data look wrong?

When dashboard reports display unexpected figures, asset counts look inflated, inventory balances show negative numbers, or assets seem disconnected from their physical rooms, data anomalies are almost always the cause.

Inaccurate data undermines trust in your maintenance system and distorts performance metrics. In Maximo Application Suite Select, identifying the symptom and tracing it to the underlying configuration allows administrators to correct existing records and prevent recurring errors.

### 💡 Tips for success

- Check for duplicate asset records before modifying maintenance history. Duplicates frequently occur when identical machines are imported twice with slightly different naming conventions.
- Verify parent location links when assets do not appear in hierarchy drill-downs. An operating location without a parent is treated as an isolated top-level site record.
- Reconcile physical inventory with Count Books when stock balances show negative numbers. Issuing parts before recording purchase receipts creates temporary negative balance discrepancies.
- Establish standardized classification attributes so that all assets in the same category display consistent technical specifications.

---

## Diagnosing common data anomalies

Review this diagnostic guide to match your observed symptom with its root cause and corrective action.

### Table 1: Common data quality symptoms and corrective actions

| Observed symptom | Primary root cause | Where to investigate | Corrective action |
| :--- | :--- | :--- | :--- |
| **Asset count is doubled or inflated** | Duplicate asset records created during manual entry or CSV imports | Assets | Decommission or merge duplicate asset records, redirecting work history to the primary asset |
| **Asset missing from location hierarchy** | Location record has no parent location specified | Location | Open the location record and populate the Parent Location field |
| **Inventory balance is negative** | Parts were issued from the storeroom before receipt transactions were processed | Inventory | Perform a physical count in Count Books and adjust the balance to match physical reality |
| **Technical attributes are missing on asset** | Asset is not linked to a classification structure | Classifications | Assign the correct classification class to the asset on the Specifications tab |
| **Work order shows zero labor cost** | Assigned labor record has no craft hourly rate defined | Labor | Open the Labor record and define standard hourly billing rates for the craft |

---

## Fixing orphan locations and broken hierarchies

When a technician or supervisor cannot locate equipment in the hierarchy tree, the location record is usually missing its parent link.

### How to reconnect an orphan location

1. In the **Find navigation item** field, search for Location and open it.
2. Search for the affected location, such as `Packaging zone`.
3. In the **Location** details view, check the **Parent** field.
4. If the field is empty, click the detail menu next to **Parent** and select the parent area, such as `Production building`.
5. Open the **Location Hierarchy** tab to verify that the location now sits under the correct plant building.
6. Click **Save Location**.

---

## Resolving duplicate asset records

Duplicate assets distort maintenance histories by splitting work orders and costs across multiple records for the same physical machine.

### How to remediate duplicate assets

1. In the **Find navigation item** field, search for Assets and open it.
2. Filter by asset description or serial number to identify the duplicate records, such as `MTR-101` and `MTR-DRIVE-01`.
3. Determine which record holds the primary maintenance history and active preventive maintenance schedule.
4. For the redundant duplicate record:
   - Check for open work orders on the **Work** tab and reassign them to the primary asset.
   - Update the status of the redundant asset to `DECOMMISSIONED` or `INACTIVE`.
   - Add a cross-reference note in the long description directing users to the primary asset ID.
5. Click **Save Asset**.

---

## Correcting inventory balance discrepancies

Negative balances occur when emergency repairs consume parts faster than receiving paperwork is entered.

### How to reconcile stock balances

1. In the **Find navigation item** field, search for Inventory and open it.
2. Find the item in the target storeroom, such as `Main storeroom`.
3. In the **Inventory Balances** table, enter the actual physical count verified on the shelf.
4. Compare the **Current Balance** with the **Physical Count**.
5. Save the record, then check that the **Reconciled?** checkbox is selected on the balance row.

---

## Real-world example: Resolving data errors at the ice cream plant

Consider how the system administrator corrected data anomalies affecting the cold storage room and filler FL-02 drive motor.

### Scenario: Broken reporting metrics

- **Symptom 1:** The supervisor reported that the cold storage room did not appear on the plant hierarchy navigation card.
  - *Fix:* The administrator opened the Location application, found `Cold storage room`, and added `Ice cream main plant` into the **Parent** field. The room immediately appeared in the site drilldown.
- **Symptom 2:** The motor for filler FL-02 showed zero historical maintenance costs despite multiple recent repairs.
  - *Fix:* The administrator opened the Labor application and found that the mechanical technician labor record lacked an hourly rate on craft `MECH-01`. Adding the standard rate immediately corrected labor cost calculations on all future work orders.

---

## Verification checklist

Use this checklist to maintain high data accuracy across assets, locations, and inventory.

### Table 2: Data quality verification checklist

| Check | Item | What to verify |
| :--- | :--- | :--- |
| [ ] | Hierarchy completeness | Every operating room and zone has a valid parent location linking to the main site |
| [ ] | No duplicate serials | Asset serial numbers are unique across operating equipment records |
| [ ] | Positive inventory | Storeroom balances show zero or positive quantities across all active bins |
| [ ] | Labor rates defined | Every active Labor record has an associated craft hourly rate configured |
| [ ] | Classifications applied | Operating production assets have technical specifications populated |

---

## Continue building your skills

### Establish permanent data governance

Preventing data quality issues before they start is easier than fixing broken records. Learn how to standardize dropdown values and enforce data entry rules.

[How do I make data reliable?](make-data-reliable.md)

### Standardize dropdown lists and domains

Customizing system domains ensures that technicians and clerks select consistent terminology during data entry.

[How do I customize dropdown values?](../../get-work-done/organize-people/standardize-data.md)

---

## What to do next

- [How do I make data reliable?](make-data-reliable.md): Implement ongoing data standards and audit routines.
- [How do I customize dropdown values?](../../get-work-done/organize-people/standardize-data.md): Configure Synonym and ALN Domains.
- [What metrics matter?](../../get-work-done/monitor-respond/what-metrics-matter.md): Discover how clean data powers accurate KPI reporting.

---

## Related topics

- [How do I make data reliable?](make-data-reliable.md)
- [How do I customize dropdown values?](../../get-work-done/organize-people/standardize-data.md)
- [How do I track stock levels?](../../get-work-done/manage-inventory/track-stock-levels.md)
- [What happens if stock is incorrect?](../../get-work-done/manage-inventory/stock-incorrect.md)
- [Why does asset import fail?](../../get-work-done/setup-control/why-does-asset-import-fail.md)
