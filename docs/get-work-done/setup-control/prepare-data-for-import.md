# How do I prepare data for import?

Proper data preparation prevents import failures and ensures data quality.

!!! warning "TODO: Add visual content"
     A screenshot showing a well-formatted import file would be useful here.

## 💡 Tips for success

- **Start with a template**: Export existing records to see correct format
- **Validate data first**: Check all values against system data
- **Use text format**: Prevent Excel from corrupting data
- **Test with small batches**: Verify format before importing thousands of records
- **Keep error logs**: Document what went wrong for future imports

## Common preparation steps

### Use the correct file format

**What to do**:

- Save files as CSV (Comma delimited) format
- Use UTF-8 encoding for special characters
- Format ID columns as text in Excel before entering data

### Validate field names and structure

**What to check**:

- Column names match system field names exactly
- All required fields are included
- Field names are correct (case-sensitive)

**What to do**: Use a template or export an existing record to see the correct structure.

### Prevent Excel from corrupting data

Excel can corrupt data in several ways:

- **Dates**: Converts text to dates (01-02 becomes Jan 2)
- **IDs**: Removes leading zeros (001 becomes 1)
- **Long numbers**: Converts to scientific notation

**What to do**: Format all columns as text in Excel before entering data, or use a plain text editor to create the CSV.

!!! warning "TODO: Add visual content"
     A screenshot showing Excel formatting options (Format Cells → Text) would be helpful.

### Clean your data

**What to check**:

- Remove extra spaces from all fields
- Ensure consistent formatting
- Validate data against system values (status codes, site IDs, etc.)
- Check for duplicate IDs

## Check referenced data before importing

Verify that supporting records exist before importing locations or assets. Missing referenced data is a common cause of import failures.

### For location imports

**What to check**:

| Field | Required when |
|---|---|
| GL accounts | Your organization tracks maintenance costs by cost centre |
| Service addresses | Locations need to appear on maps or work order dispatch |
| Calendars and shifts | Scheduling work or calculating availability at this location |
| Failure classes | You want structured failure reporting on work orders for this location |
| Classifications and specifications | You want to search or report on locations by equipment type |

**What to do**: Create missing referenced records before importing locations, or update the import file to use existing values.

### For asset imports

**What to check**:

| Field | Required when |
|---|---|
| GL accounts | Tracking maintenance costs by cost centre |
| Service addresses | Assets need to appear on maps or work order dispatch |
| Failure classes | Technicians need to select failure codes on work orders for this asset — without this, the Failure Reporting tab is empty |
| Rotating items | Only when the asset is a rotating, serialised item tracked by individual asset record |
| Vendors and manufacturers | Tracking warranty, procurement, or service history by supplier |
| Classifications and specifications | You want to search, filter, or report on assets by type or specification |

**What to do**: Verify all referenced records exist before importing assets. Create missing records or correct values in the import file.

## Use consistent date formats

Date formats are a common source of import errors. Follow these guidelines to prevent date-related failures.

**What to do**:

- Use one accepted date format consistently throughout the file
- Do not mix regional date formats (for example, MM/DD/YYYY and DD/MM/YYYY)
- Avoid ambiguous dates such as 01/02/2026 unless the accepted format is clear
- Format date columns as text in Excel before entering values
- Test a small batch that includes date values before importing the full file

**Common date format issues**:

- Excel automatically converts dates to its default format
- Mixed formats cause some records to fail while others succeed
- Ambiguous dates are interpreted incorrectly

**What to do**: Verify the expected date format for your system and apply it consistently to all date fields.

## Import hierarchies in the correct order

For locations and parent-child relationships:

**What to do**: Import in order:

1. Top-level records first (parents)
2. Second-level records next
3. Lowest-level records last (children)

## Break large imports into batches

**What to do**: 

- Break files into smaller batches (1,000-5,000 records at a time)
- This prevents timeouts and makes troubleshooting easier

## Preview before importing

**Use preview/import validation**: Always preview your import before committing it. This shows:

- Which records will succeed
- Which records will fail
- What errors need to be fixed

!!! warning "TODO: Add visual content"
     A screenshot of the import preview screen showing validation results would be useful here.

!!! warning "Without validation"
    If you skip validation, errors are only discovered after processing. This can result in:
    
    - Partial imports with missing records
    - Incorrect data in the system
    - Time wasted troubleshooting after the fact

---

## What happens next?

After preparing your data:

1. Preview the import to validate
2. Fix any errors identified
3. Process the import
4. Verify records were created successfully

---

## Continue building your skills

### Get the sequence right before you import

Import order matters. Learn which data types need to be loaded before others.

[What is the correct load order?](correct-load-order.md)

### Run the import

With your data prepared, run the import.

[How do I get data into the system?](get-data-into-system.md)

---

## Related topics

- [What is the correct load order?](correct-load-order.md)
- [Data types](object-structure-data-types.md)
- [How do I fix import errors?](why-does-asset-import-fail.md)
- [How do I get data into the system?](get-data-into-system.md)
- [How do I standardize data?](../organize-people/standardize-data.md)