# Why can't I complete a work order?

You might see errors like "Status cannot be changed" or not see the Complete option at all.

!!! warning "TODO: Add visual content"
     A screenshot showing common error messages when trying to complete a work order would be useful here.

## Common causes

### You don't have permission

Your security group might not allow you to change work order status or complete work.

**What to do**: Contact your supervisor or system administrator to verify your permissions.

### Work order is not in the correct status

You can only complete work orders that are in progress. If the work order is in a different status (such as "Approved" or "On Hold"), you need to change it to "In Progress" first.

**What to do**: Check the current status and move it to "In Progress" before trying to complete it.

### An approval or business rule is controlling status changes

Some organizations configure approval rules and requirements that control which status changes are allowed and when.

**What to do**: Complete any required prerequisite steps, or contact your supervisor if you're unsure what's required.

### Required data is missing

The system might require certain information before allowing completion:

- Labor hours must be entered
- Failure codes must be recorded (problem, cause, remedy)
- Materials or actuals must be documented

**What to do**: Check what information is required and add it before completing the work order.

---

## Why is the Complete status missing?

The Complete (COMP) status might be hidden by your organization's configuration.

### Status domain conditions

Your organization might have set up rules that hide the Complete status until certain conditions are met, such as:

- Labor transactions are entered
- All required fields are filled in
- Specific approval steps are completed

**What to do**: Enter all required information, or ask your supervisor what conditions must be met.

!!! warning "TODO: Add visual content"
     A screenshot showing the work order status dropdown with and without the Complete option would be useful here.

### Required prerequisites

Business rules can restrict which status transitions are available based on the current state and data of the work order.

**What to do**: Complete any outstanding prerequisites such as recording labor actuals or failure codes, or contact your supervisor for guidance.

---

## Why does completing fail even though work is done?

Completion can fail if required data is missing, even if the physical work is complete.

### Typical gaps

- **No labor transactions**: You must record the time spent on the work
- **No failure codes**: Problem, cause, and remedy codes might be required
- **Missing actuals or costs**: Materials used or other costs must be documented

**What to do**: Review the work order to ensure all required information is entered, then try completing again.

!!! tip "Document as you go"
    Record labor, materials, and other information while doing the work, not after. This prevents completion delays and ensures accurate records.

---

## Why does a work order behave differently for different users?

Differences are usually caused by security groups or roles.

### What to check

- **Security permissions**: Different users might have different rights to change status, complete work, or initiate tasks
- **Site or application-level access**: Some users might have access to certain sites or applications that others don't

**What to do**: If you need different permissions, contact your system administrator.

---

## What happens next?

Once you resolve the issue:

1. Enter any missing required information
2. Verify you have the necessary permissions
3. Try completing the work order again
4. If problems persist, contact your supervisor

---

## Related topics

- [How do I complete a job?](complete-job.md)
- [What if I can't complete a task?](cant-complete-task.md)
- [How do I find my work?](find-work.md)
---

## Still stuck?

If this page did not answer your question:

- **Browse all Q&A:** [Get answers](../../get-answers/index.md)
- **In the product:** Click the help icon (?) in the top right
- **For a specific field:** Click the field name or press Alt+F1
