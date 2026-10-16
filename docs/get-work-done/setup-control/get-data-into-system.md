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
- Run a small test batch of 5–10 records before importing hundreds. This lets you catch format problems quickly.

## Quick reference

### Table 1. What you can import

| Data type | When to import |
|-----------|---------------|
| **Locations** | Sites, buildings, areas, and functional locations where assets are installed |
| **Assets** | Equipment and infrastructure your organization maintains |
| **Items** | Inventory parts and materials stocked in your storeroom |
| **GL accounts** | Cost codes and account structures |

---

## How to get the correct template

Before filling in your data, export an existing record to get a template with the correct column names and format.

**What to do:**

1. Open the application that matches the data you want to import. For example, open the Assets application to get an assets template.
2. Search for and open any existing record.
3. Click the download icon or **Export data**.
4. In the Export data window, select **Export custom columns**.
5. In the Template name field, select the object structure that matches your data type.
6. Click **Export**. The file downloads as a CSV.

Open the file in a spreadsheet application to see the required columns and their format. Do not enter a value in the Template name field when exporting. Leave it blank to get the default structure.

!!! note
    If no records exist yet, your system administrator can provide a template directly, or you can find the required fields in [How do I prepare data for import?](prepare-data-for-import.md).

---

## How to import your data

Once your CSV file is prepared and validated:

**What to do:**

1. Open the application where you want to import data. For example, open the Assets application to import assets.
2. Click the upload icon or **Import data**.
3. In the Import data window, select the **object structure** that matches your file.
4. Click **Browse** and select your prepared CSV file.
5. Select **Import preview** to check for errors before committing the import.
6. Review any errors flagged in the preview. Fix the issues in your CSV file and upload again if needed.
7. Once the preview is clean, clear **Import preview** and click **Import** to run the full import.
8. Click the number in **Total rows** to go to the application and review your imported records.

`[SME confirmation required: confirm exact UI labels for Import data button and Import preview checkbox in MAS Select — these may differ from Maximo Manage]`

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

### Fix errors when an import fails

Not every import goes smoothly. Learn how to read the error report and correct common problems.

[How do I fix import errors?](why-does-asset-import-fail.md)

### Verify the system is working

Once your data is in, check whether the system is performing as expected.

[What metrics matter?](../../get-work-done/monitor-respond/what-metrics-matter.md)

---

## Related topics

- [How do I prepare data for import?](prepare-data-for-import.md)
- [What is the correct load order?](correct-load-order.md)
- [How do I fix import errors?](why-does-asset-import-fail.md)
- [Administrator: Add users](../../start-fast/first-task/administrator-first-task.md)

