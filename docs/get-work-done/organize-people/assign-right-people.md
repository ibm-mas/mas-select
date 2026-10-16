---
search:
  boost: 2
  keywords: assign labor crew work order technician assignment craft available supervisor planner
---

# How do I assign the correct people?

Match the right technician or crew to a work order so the job goes to someone with the correct skills, availability, and access.

## 💡 Tips for success

- Set up crafts and labor records before assigning work. A labor record without a craft won't appear when you filter by skill. See [How do I set up labor, crafts, and crews?](../setup-control/set-up-labor-crafts-crews.md) if your workforce isn't configured yet.
- Check availability before assigning. The system shows scheduled hours and availability based on the labor record's calendar and shift.
- Use crews when multiple people need to work on the same job at the same time. Assigning a crew takes one step instead of adding each person individually.
- Set a scheduled start date on every assignment. Without a date, the assignment won't surface in scheduling views at the correct time for planning or dispatch.

## Quick reference

### Table 1. Assignment methods

| Method | Best for |
|--------|----------|
| **Work orders, Plans section** | Assigning an individual to a work order |
| **Crew assignment** | Assigning a whole team to a job in one step |

---

## How to assign an individual to a work order

**What to do:**

1. Open the Work orders application.
2. Search for and open the work order.
3. Go to the **Plans** section.
4. Under **Assignment**, click **Edit assignments**.
5. In the **Labor** field, enter or select the person to assign.
6. Enter the estimated hours in **Time to complete**. This is how the system calculates whether a person is over-allocated. Without it, the system shows unlimited availability for that slot and supervisors can unknowingly double-book people.
7. Save the work order.

!!! note
    Assignments filter by the **default craft** on the labor record. A person with the correct skill set as a secondary craft will not appear. If the list is empty or missing expected people, check that the correct craft is set as their default in the Labor application.

---

## How to assign a crew

Use a crew when a group of people need to work together on the same job.

**What to do:**

1. Open the Work orders application.
2. Search for and open the work order.
3. Go to the **Plans** section.
4. Under **Assignment**, click **Edit assignments**.
5. In the **Crew** field, enter or select the crew name.
6. The system adds all active crew members as individual assignments.
7. Save the work order.

---

## Why isn't someone showing up as available?

The most common reasons a technician doesn't appear in the Available Labor list:

### No craft assigned

Available Labor filters by **default craft only**. A person with the correct skill as a secondary craft is excluded from the results — they exist in the system but the filter doesn't find them.

**What to do**: Open the Labor application, find the person's record, and confirm the correct craft is set as their default, not just listed as a secondary craft.

### Calendar or shift mismatch

Available Labor uses the calendar and shift on the labor record. If the scheduled start date falls outside the person's working hours, they may not appear or show as unavailable.

**What to do**: Check that the calendar and shift on the labor record match the crew's working schedule.

### Work order status doesn't allow assignment

You can only assign labor to work orders in an approvable or approved status. Work orders in **Waiting for Approval** (WAPPR) or **Approved** (APPR) status accept assignments.

**What to do**: Check the work order status and change it to APPR before assigning.

---

Assigning the correct people consistently means work gets done faster and teams stop stepping on each other.

## Continue building your skills

### Understand why a technician can't see their assigned work

After assigning work, verify it's visible to the correct people.

[Why can't technicians see their assigned work?](why-cant-see-assigned-work.md)

### Set up the workforce records behind assignments

If assignments aren't working correctly, the issue is often in how crafts, calendars, and labor records are set up.

[How do I set up labor, crafts, and crews?](../setup-control/set-up-labor-crafts-crews.md)

---

## Related topics

- [How do I set up labor, crafts, and crews?](../setup-control/set-up-labor-crafts-crews.md)
- [Why can't technicians see their assigned work?](why-cant-see-assigned-work.md)
- [How do I schedule work?](../plan-work/schedule-work.md)
- [How do I complete a job?](../complete-work/complete-job.md)
