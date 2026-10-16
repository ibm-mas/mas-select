# Why don't technicians see their assigned work?

This is one of the most common issues. Work is assigned, but the technician can't see it in their queue.

!!! warning "TODO: Add visual content"
     A screenshot showing an empty work queue vs. a populated work queue would be useful here.

## Likely causes

### User permissions were updated but sessions weren't refreshed

When permissions change, active sessions might not pick up the new access rights immediately.

**What to do**: Have the technician log out of all sessions completely, then log back in. This forces the system to reload their current permissions.

!!! tip "Clear all sessions"
    Logging out of all sessions (including mobile devices and any open browser tabs) often resolves visibility issues immediately.

### Missing site or data access

The technician might not have access to the site where the work order exists, or their data restrictions might prevent them from seeing certain work orders.

**What to check**:

- Verify the technician has access to the correct site
- Check if data restrictions are limiting what they can see
- Confirm their security group includes the necessary permissions

**What to do**: Contact your system administrator to review and update site access or data restrictions.

### Cached sessions not picking up new permissions

Even after permissions are updated, cached session data might prevent the changes from taking effect.

**What to do**: Have the technician:

1. Log out completely from all devices
2. Clear browser cache if using a web browser
3. Close and reopen mobile apps
4. Log back in

---

## Why can't I update assignment status?

You might see validation errors or the status doesn't save when you try to move from Assigned → Started → Complete.

### Status sequence skipped

Some organizations require work orders to progress through specific statuses in order. You can't skip steps.

**Example**: You can't go directly from "Assigned" to "Complete" without going through "In Progress" first.

**What to do**: Follow the required status sequence for your organization.

### Date validation errors

The system validates that dates make sense. Common issues:

- Finish date must be after start date
- Scheduled date must be after creation date
- Actual dates must align with planned dates

**What to do**: Check all dates on the work order and correct any that are out of sequence.

### Updates not committing to the database

Sometimes changes appear to save but don't actually commit to the database.

**What to do**:

1. Verify the change was saved by refreshing the screen
2. Check for error messages that might have been missed
3. Try the update again
4. Contact your system administrator if the problem persists

---

## Why is it hard to track who is doing what?

Supervisors often struggle with visibility into team workload and assignments.

### Known limitations

- **Out-of-the-box views**: Standard views don't easily show workload per technician
- **Reporting complexity**: Reports can include incorrect or excessive data
- **Filtering behavior**: Filters might not work as expected for assignment tracking

**What to do**:

- Use custom queries or reports designed for your organization
- Ask your system administrator about available workload views
- Consider using dashboards that show team assignments

!!! warning "TODO: Add visual content"
     A screenshot showing a supervisor dashboard with team workload distribution would be useful here.

---

## Why do assignments disappear after work order completion?

Assignments are typically removed when the work order is closed or completed.

### Impact

- No historical assignment tracking unless configured separately
- Reporting needs to rely on work order history instead of active assignments

**What to do**: If you need historical assignment data, work with your system administrator to set up:

- Assignment history tracking
- Custom reports that capture assignment data before completion
- Archive processes that preserve assignment information

---

## What happens next?

To resolve visibility issues:

1. Have technicians log out and back in
2. Verify site access and permissions
3. Check data restrictions
4. Clear cached sessions if needed
5. Contact your system administrator if problems persist

---

## Continue building your skills

### Plan recurring maintenance

With your team seeing their work correctly, set up schedules that generate work orders automatically so you're not creating them one at a time.

[How do I plan recurring maintenance?](../plan-work/plan-recurring-maintenance.md)

### Know what work matters

Create job plans that standardize tasks, parts, and time estimates so every technician does the work the same way.

[How do I decide what work should be done?](../plan-work/decide-what-work.md)

---

## Related topics

- [How do I assign the correct people?](assign-right-people.md)
- [How do I find my work?](../complete-work/find-work.md)
- [How do I complete a job?](../complete-work/complete-job.md)
---

## Still stuck?

If this page did not answer your question:

- **Browse all Q&A:** [Get answers](../../get-answers/index.md)
- **In the product:** Click the help icon (?) in the top right
- **For a specific field:** Click the field name or press Alt+F1
