---
search:
  boost: 2
  keywords: preventive maintenance PM not generating work orders not due yet inactive status active operating asset location floating fixed schedule hierarchy
---

# Why isn't my PM generating work orders?

You set up a preventive maintenance record, called a PM, but the work order you expected is not there. Or you try to generate a work order and see a message such as "is not due yet".

*Looking to troubleshoot right away? [Skip to the PM generation checklist ↓](#pm-generation-checklist)*

## Common causes

### The PM is not active

A PM generates work orders only when its status is Active. A PM that is still a draft, or one that was set to inactive, is skipped.

**What to do**: Open the PM and check its status. If it is not Active, activate it.

### The asset or location is not operating

The asset or location on the PM must have a status of Operating. If it has a different status, such as Not Ready, the system does not generate the work order.

You might see a message such as "The asset or location associated with PM 1038 has a status of NOT READY. Change the status to an Active status to generate work orders."

**What to do**: Check the status of the asset or location on the PM. Change it to Operating if the equipment is in service.

### A floating schedule is waiting for the last work order

A floating schedule does not create the next work order until the previous one is completed, closed, or cancelled. While the previous work order is still open, you might see a message such as "PM IC-11460 is not due yet, or it does not fall within the active season."

**What to do**: Find the open work order from the previous cycle and finish or close it. If the next work order should not depend on the last one, change the PM to a fixed schedule. For the difference, see [Fixed vs. floating: choose carefully](plan-recurring-maintenance.md#fixed-vs-floating-choose-carefully).

### The PM is not due yet

By default, the system checks the frequency of each PM and generates work orders only for PMs that are due. If you generate work orders by hand before the due date, nothing is created.

**What to do**: Check the next due date on the PM. If you need the work order now, clear **Use Frequency Criteria** in the Generate Work Orders dialog. The system then generates a work order for the selected parent PM regardless of its due date.

### You tried to generate from a child PM

Work orders can be generated only from the top level PM in a PM hierarchy. If you try it from a child PM, you might see a message such as "PM 1039 is not a top-level PM and cannot generate work orders."

**What to do**: Open the PM Hierarchy tab, find the parent PM, and generate from there.

---

## Why did only some work orders generate?

A parent PM can trigger work orders for its whole PM hierarchy. If one PM in the hierarchy has an asset or location that is not Operating, the system skips that PM and the PMs below it. The rest of the hierarchy can still generate.

**What to do**: Check the asset or location status for every PM in the hierarchy. When you change the status of a parent location or asset, you can roll the status down the hierarchy so the children stay consistent.

---

## Why hasn't the work order appeared yet, even though the PM is active?

The system does not create work orders the moment you activate a PM. Generation runs on a schedule in the background.

`[SME confirmation required: Confirm how often work order generation runs in Select, and whether it runs overnight. The source describing a once a day, overnight run is a video transcript for Maximo Manage.]`

**What to do**: Check again after the next generation run. If you need the work order now, generate it by hand with the Generate Work Orders action.

---

## PM generation checklist

Use this checklist to find out why a PM is not creating work orders:

### Table 1: PM generation checklist

| Check | Item | What to verify |
| :--- | :--- | :--- |
| [ ] | PM status | The PM status is Active, not draft or inactive |
| [ ] | Asset or location status | The asset or location on the PM has a status of Operating |
| [ ] | Schedule type | If the schedule is floating, the previous work order is completed, closed, or cancelled |
| [ ] | Due date | The PM is due, or **Use Frequency Criteria** is cleared for a manual generate |
| [ ] | PM hierarchy | You generate from the top level PM, and every asset or location in the hierarchy is Operating |
| [ ] | Generation timing | Enough time has passed for the next background generation run |

---

### 💡 Tip: Close work orders promptly on floating schedules

A floating schedule stops generating when one work order is left open. Close or cancel finished work orders so the next one can generate.

---

## Related topics

- [How do I plan recurring maintenance?](plan-recurring-maintenance.md)
- [How do I plan my preventive maintenance strategy?](../setup-control/plan-your-pm-strategy.md)
- [How do I decide what work should be done?](decide-what-work.md)
- [How do I schedule work?](schedule-work.md)

---

## Still stuck?

If this page did not answer your question:

- **Browse all Q&A:** [Get answers](../../get-answers/index.md)
- **In the product:** Click the help icon (?) in the top right
- **For a specific field:** Click the field name or press Alt+F1
