# How do I fix import errors?

Import errors can occur with locations or assets. This guide helps you troubleshoot and fix common import problems.

## Quick navigation

Jump to the section you need:

- [Location import errors](#location-import-errors)
  - [Location hierarchy errors](#location-hierarchy-errors)
  - [Location referenced data errors](#location-referenced-data-does-not-exist)
- [Asset import errors](#asset-import-errors)
  - [Asset hierarchy errors](#asset-hierarchy-errors)
  - [Asset referenced data errors](#asset-referenced-data-does-not-exist)
- [Common issues across all import types](#common-issues-across-all-import-types)
  - [Date and CSV formatting errors](#date-values-are-invalid-or-reformatted)

---

## Location import errors

Location imports are error-prone because of parent-child relationships and hierarchies.

### Location hierarchy errors

Hierarchy imports require careful attention to parent-child relationships.

#### Parent locations not created first

Child locations can't be created if their parent doesn't exist yet.

**Example**: You can't create "Ice Cream Plant A > Production Building > Filling Line 2" if "Ice Cream Plant A" and "Production Building" don't exist.

**What to do**: Import locations in order:

1. Top-level locations first (Ice Cream Plant A)
2. Second-level locations next (Production Building)
3. Lowest-level locations last (Filling Line 2)

!!! warning "TODO: Add visual content"
     A diagram showing location hierarchy structure (parent → child relationships) would be useful here.

#### Incorrect object structure

Location hierarchies require specific <abbr title="Defines the records and related fields that are available for importing, exporting, or exchanging data. You might know this as: data structure, import template, or record definition">object structure</abbr> in the import file.

**What to do**: Use the system's location hierarchy template or export an existing hierarchy to see the correct format.

#### Incorrect hierarchy relationships

Parent-child relationships must be defined correctly in the import file.

**What to check**:

- Parent location IDs are correct
- Hierarchy levels are properly defined
- System location references are valid

**What to do**: Verify all parent locations exist before importing child locations.

!!! tip "Import hierarchies sequentially"
    Hierarchies require sequential loading (top → down). Import parent locations first, then their children.

### Location referenced data does not exist

Location imports fail when they reference supporting records that don't exist in the system.

**What to check**:

- GL account exists and is valid
- Service address is defined
- Calendar and shift are configured
- Failure class is set up
- Bill-to or ship-to address for the site is correct
- Classification or specification is available

**What to do**:

- Create or correct the referenced record, or update the import file to use an existing value
- Make sure values in the import file match system values exactly (case-sensitive)
- Verify spelling and IDs are correct

### 💡 Tips for successful location imports

- **Import hierarchies in order**: Parents before children
- **Verify referenced data**: Check that supporting records exist
- **Start with a template**: Export existing records to see correct format
- **Validate data first**: Check all values against system data
- **Use text format**: Prevent Excel from corrupting data
- **Test with small batches**: Verify format before importing thousands of records

---

## Asset import errors

Asset imports fail due to object structure, data issues, or missing referenced records.

!!! warning "TODO: Add visual content"
     A screenshot showing typical asset import error messages would be useful here.

### Common asset import problems and solutions

### Table 1. Common asset import problems and solutions

| Problem | What happens | Solution |
|---------|--------------|----------|
| Parent doesn't exist | Child asset fails | Import parents first |
| Excel corrupts IDs | Leading zeros removed | Format as text in Excel |
| Missing required fields | Record skipped | Validate all required fields |
| Invalid status codes | Import fails | Use valid status values |
| File too large | Timeout or failure | Break into smaller batches |

### Asset hierarchy errors

If using parent-child asset relationships, hierarchy errors can cause import failures.

**What to check**:

- Parent asset exists before importing child assets
- Parent asset ID is correct in the import file
- Parent asset exists at the expected site and location

**What to do**:

- Import parent assets before child assets or subassemblies
- Verify that each child asset references the correct parent asset
- Confirm the parent asset location matches expectations

### Asset referenced data does not exist

Asset imports fail when they reference supporting records that don't exist in the system.

**What to check**:

- GL account exists and is valid
- Service address is defined
- Calendar and shift are configured
- Failure class is set up
- Rotating item is created (if applicable)
- Vendor or manufacturer exists
- Type value is valid
- Classification or specification is available

**What to do**:

- Verify that referenced records exist in the system
- Correct spelling, IDs, and values in the import file
- Create missing referenced records before importing assets
- Revalidate the file before importing again

### 💡 Tips for successful asset imports

- **Verify referenced data**: Check that supporting records exist
- **Start with a template**: Export existing records to see correct format
- **Validate data first**: Check all values against system data
- **Use text format**: Prevent Excel from corrupting data
- **Test with small batches**: Verify format before importing thousands of records

### Common causes of asset import failures

#### Wrong object structure

The import file must match the expected object structure exactly.

**What to check**:

- File structure matches ASSET object
- All required fields are included
- Field names are correct

**What to do**: Use a template or export an existing asset to see the correct structure.

#### Missing mandatory fields

Assets have required fields that must be populated.

**Common required fields**:

- Asset ID
- Description
- Site
- Status

**What to do**: Review the import file to ensure all mandatory fields have values.

#### Data errors in file

Problems with the data itself cause import failures.

**Common data errors**:

- Invalid status codes
- Non-existent site references
- Incorrect data types (text in number fields)
- Invalid dates

**What to do**: Validate data against system values before importing.

!!! warning "TODO: Add visual content"
     A screenshot of an error file showing validation failures would be helpful.

### Why are only some asset records imported?

Partial imports happen when some records pass validation and others don't.

**Import limits are exceeded**: Some systems have limits on:

- Number of records per import
- File size
- Processing time

**What to do**: Break large imports into smaller batches (for example, 1,000-5,000 records at a time).

**Errors stop processing mid-file**: If a critical error occurs, the import might stop processing remaining records.

**What to do**: Review error logs to identify where processing stopped, fix the error, and re-import remaining records.

**Validation failures block individual records**: Each record is validated independently. Invalid records are skipped while valid ones are imported.

**What to do**: Review the error file, fix failed records, and import them separately.

---

## Common issues across all import types

### Date values are invalid or reformatted

Date formatting is a common source of import errors across all record types.

**Common causes**:

- Excel changed the date format automatically
- The file uses mixed date formats (for example, MM/DD/YYYY and DD/MM/YYYY)
- The date format is ambiguous (for example, 01/02/2026)
- Date values do not match the expected import format

**What to do**:

- Format date columns as text in Excel before entering values
- Use one consistent date format throughout the file
- Re-export or use a template to confirm the expected format
- Test a small import that includes date values before importing the full file

### Excel formatting corrupts data

Excel can corrupt data in several ways:

- **Dates**: Converts text to dates (01-02 becomes Jan 2)
- **IDs**: Removes leading zeros (001 becomes 1)
- **Long numbers**: Converts to scientific notation

**What to do**: Format all columns as text in Excel before entering data, or use a plain text editor to create the CSV.

!!! warning "TODO: Add visual content"
     A screenshot showing Excel formatting options (Format Cells → Text) would be helpful.

### Lack of pre-validation leads to late errors

Without validation, errors aren't discovered until after processing starts.

**What to do**: Always use the preview/validation function before committing the import.

### Parent-child relationships missing or loaded in wrong order

Importing child records before parents causes failures.

**What to do**: Sort your import file so parent records come before child records.

---

## Why shouldn't I load very large datasets in a single file?

Bulk imports have constraints when loading very large volumes in a single batch.

### Constraints

**UI session timeouts**: Long-running imports can time out in the web interface.

**Not designed for massive single-file batches**: CSV imports work best with manageable batch sizes (typically under 5,000 records per file).

**Better suited for smaller datasets**: For large imports, consider:

- Breaking into smaller batches (files under 5,000 records)
- Loading parent records before child records in separate files
- Using Data Management to monitor and track import status

---

## What happens next?

To resolve import failures:

1. Review error logs and error file
2. Fix data issues in source file
3. Ensure parent records exist for hierarchies
4. Verify referenced data exists
5. Preview/validate before importing
6. Process the corrected import
7. Verify records were created successfully

---

## Continue building your skills

### Verify the system is working

Once your data is loaded, check whether the system is performing as expected.

[What metrics matter?](../../get-work-done/monitor-respond/what-metrics-matter.md)

---

## Related topics

- [How do I prepare data for import?](prepare-data-for-import.md)
- [What is the correct load order?](correct-load-order.md)
- [How do I get data into the system?](get-data-into-system.md)
- [How do I standardize data?](../organize-people/standardize-data.md)
---

## Still stuck?

If this page did not answer your question:

- **Browse all Q&A:** [Get answers](../../get-answers/index.md)
- **In the product:** Click the help icon (?) in the top right
- **For a specific field:** Click the field name or press Alt+F1
