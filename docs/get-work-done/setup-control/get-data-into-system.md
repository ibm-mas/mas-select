---
search:
  boost: 2
  keywords: import data CSV bulk upload locations assets items inventory administrator data management
---

# How do I get data into the system?

Use Data Management to import your existing records into IBM Maximo Application Suite Select from a CSV file. This is how you bring in locations, assets, items, and other data in bulk during setup, or any time you need to add or update a large number of records.

## 💡 Tips for success

- Always download the export template first. The template shows you the exact column names and format the system expects.
- Keep your CSV file under 500 KB. Larger files need to be split into smaller batches.
- Import one data type at a time, in the correct sequence. See [What is the correct load order?](correct-load-order.md) for the import sequence.
- Format ID columns as text in your spreadsheet application before entering data. Spreadsheet applications such as Microsoft Excel can silently reformat IDs as numbers, which breaks the import.
- Run a small test batch of 5 to 10 records before importing hundreds. This lets you catch format problems quickly.

## Quick reference

### Table 1: What you can import

| Data type | When to import |
|-----------|---------------|
| **Locations** | Sites, buildings, areas, and functional locations where assets are installed |
| **Assets** | Equipment and infrastructure your organization maintains |
| **Items** | Inventory parts and materials stocked in your storeroom |
| **GL accounts** | Cost codes and account structures |

---

## How to get the correct template

Before filling in your data, use the Data Management application to download a template or export sample records with the correct column names and structure.

**What to do:**

1. In the **Find navigation item** field, search for Data Management and open it.
2. Select the data type or object structure you want to import, such as locations or assets.
3. Click **Export data** or download the template for that data type.
4. Open the downloaded CSV file in a spreadsheet application to review the required columns and format.

!!! note
    If you need a breakdown of the specific column fields for each data type, see [Which object structure do I use for each data type?](object-structure-data-types.md) and [How do I prepare data for import?](prepare-data-for-import.md).

---

## How to import your data

Once your CSV file is prepared and validated:

**What to do:**

1. In the **Find navigation item** field, search for Data Management and open it.
2. Select the data type or object structure that matches your file.
3. Click **Import data**.
4. Click **Browse** and select your prepared CSV file.
5. Select **Import preview** to check for errors before committing the import.
6. Review any errors flagged in the preview. Fix any issues in your CSV file and upload again if needed.
7. Once the preview is clean, clear **Import preview** and click **Import** to run the full import.
8. Review the import summary and row counts to confirm that all records were created successfully.

`[SME confirmation required: confirm exact UI labels for Import data button, template downloads, and Import preview checkbox in the MAS Select Data Management application — these may differ from Maximo Manage]`

---

## What happens during import

When you import a file, the system:

- Reads each row in your CSV
- Validates each field against system rules
- Creates or updates the records
- Reports any rows that failed, with the reason

Failed rows do not stop the rest of the import. The system processes every row and reports failures at the end.

---

## How to fix import errors

After importing, review the error report:

- **Missing required field**: A column that the system requires was blank. Fill in the value and re-import that row.
- **Invalid value**: A field contained a value that doesn't match the system's valid values. For example, a status code that doesn't exist, or a site ID that isn't set up yet.
- **Record already exists**: You are trying to create a record with an ID that already exists. Either update the existing record instead, or use a different ID.
- **Parent record not found**: A referenced record doesn't exist yet. Import the parent record first. See [What is the correct load order?](correct-load-order.md).

For a full list of import error causes and fixes, see [How do I fix import errors?](why-does-asset-import-fail.md).

---

## File size limits

The maximum file size for a single import is 500 KB.

If your data exceeds 500 KB:

1. Split the file into smaller batches.
2. Import each batch separately, in the same order.
3. Wait for each batch to complete before importing the next.

`[SME confirmation required: confirm the 500 KB limit applies in MAS Select — sourced from IBM Docs for MAS 9.1 but may differ in MAS Select SaaS context]`

---

## Continue building your skills

### Recommended next step: Fix errors when an import fails

Not every import goes smoothly. Learn how to diagnose preview errors, correct source CSV rows, and re-import failed records.

[How do I fix import errors?](why-does-asset-import-fail.md)

### Related skills

- [What metrics matter?](../../get-work-done/monitor-respond/what-metrics-matter.md): Once your data is loaded, check whether the system is performing as expected.
- [How do I plan my location hierarchy?](plan-your-location-hierarchy.md): Review location structure rules and parent-child best practices.
- [How do I plan my asset hierarchy?](plan-your-asset-hierarchy.md): Structure equipment packages, subassemblies, and maintainable components.
- [What is the correct load order?](correct-load-order.md): Review the full five-step data onboarding roadmap.

---

## Related topics

- [Which object structure do I use for each data type?](object-structure-data-types.md)
- [How do I prepare data for import?](prepare-data-for-import.md)
- [Administrator: Add users](../../start-fast/first-task/administrator-first-task.md)
- [How do I standardize data?](../organize-people/standardize-data.md)

