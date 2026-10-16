---
search:
  boost: 2
  keywords: labor craft crew calendar setup resources workforce assign work
---

# How do I set up labor, crafts, and crews?

Set up your workforce resources before you start assigning work. Crafts define the skills in your organization. Labor records represent the people. Crews group people together so you can assign a whole team to a job in one step.

These records work together. You need to set them up in the correct order.

## 💡 Tips for success

- Set up crafts before labor. A labor record must reference a valid craft.
- Set up a calendar before creating a crew. The crew's calendar controls when its members show as available.
- Match the calendar and shift on each labor record to the crew they belong to. A mismatch is the most common reason crew members show as unavailable when you try to assign work.
- Leave the End Date blank on labor assignments to a crew unless the assignment has a fixed end. This keeps the member permanently assigned until you need to change it.

## Quick reference

### Table 1. Labor and crew terminology

| Term | What it means |
|------|---------------|
| **Craft** | A skill or trade, such as Electrician or Mechanic, used to match the correct person to the correct job |
| **Calendar** | Defines working days and shifts. Must be assigned to both the crew and each member. |
| **Labor** | A person who performs work or records time, linked to a person record in the system |
| **Crew type** | A template that defines the positions and crafts a crew requires, such as Leader and Helper |
| **Crew** | A named group of people assembled to work together, built from a crew type |

## Setup order

Set these up in sequence. Each step depends on the one before it.

```
Crafts → Calendar → Labor → Crew type → Crew
```

---

## Step 1: Create crafts

Crafts represent the skills in your workforce.

1. Go to **Resources > Crafts**.
2. Create a new craft record.
3. Enter a craft ID and description, for example, **MECH, Mechanic** or **REFRIG, Refrigeration technician**.
4. Set the default rate if applicable.
5. Save.

Repeat for each skill type in your organization.

---

## Step 2: Set up a calendar

Crews need a calendar to define when their members are available. If you have not already created a calendar for your workforce, do this before creating crew types.

See [How do I schedule work?](../plan-work/schedule-work.md) for steps to create shifts and calendars.

---

## Step 3: Create labor records

Labor records represent the individuals who perform work.

1. Go to **Resources > Labor**.
2. Create a new labor record.
3. Link it to the person's existing person record.
4. In the **Crafts** section, add the person's craft and set it as their **default craft**. The Available Labor dialog filters by default craft only — a person with the correct skill listed as a secondary craft will not appear when supervisors search for available people.
5. Set the same **calendar and shift** you plan to use for the crew they will join. If these differ from the crew's calendar, the person will show as unavailable every time a supervisor or scheduler tries to assign them — even when they are physically at work.
6. Save.

Repeat for each person in your workforce.

---

## Step 4: Create a crew type

A crew type is the template for a crew. It defines the positions and crafts required.

1. Go to **Resources > Crews**.
2. From the **Crew Types** tab, create a new crew type.
3. In the **Required Crafts** section, add each position with its craft:
    - Add a **Leader** position and assign the relevant craft
    - Add any **Helper** or other positions required
4. Save.

---

## Step 5: Create a crew

With the crew type, crafts, calendar, and labor records in place, you can now create a crew.

1. Go to **Resources > Crews**.
2. Create a new crew.
3. Select the **crew type** you created.
4. Assign the **calendar** the crew will work to.
5. Go to the **Labor Assignments** tab.
6. Add each team member:
    - Select the position (for example, Leader)
    - Select the labor record
    - The **Effective Date** defaults to the start of today's shift. Adjust if needed.
    - Leave **End Date** blank for a permanent assignment. If an End Date lapses, the crew member is silently dropped from availability — work can no longer be assigned to that crew, with no system warning.
7. Save.

---

## Common issues

### Crew members showing as "Not available"

The most common cause is a mismatch between the crew's calendar and the calendar assigned to the individual labor records. The system calculates availability from the **labor record's calendar and shift** — not the crew's. Even if the crew calendar is correct, a technician will appear unavailable if their personal labor record uses a different calendar. Check that both use the same calendar and shift.

### "Craft mismatch" warning when adding labor to a crew

The labor record does not have the craft required for that crew position. Go to the labor record, add the correct craft in the Crafts section, then return to the crew assignment.

### Work can't be assigned to a crew

The crew must have at least one labor member assigned with a valid Effective Date and no expired End Date. Check the Labor Assignments tab for any assignments where the End Date has passed.

---

## What to do next

Once labor, crafts, and crews are set up:

- [How do I assign the correct people?](../organize-people/assign-right-people.md): Assign labor or crews to work orders.
- [How do I plan recurring maintenance?](../plan-work/plan-recurring-maintenance.md): Add labor requirements to job plans.
- [How do I schedule work?](../plan-work/schedule-work.md): Use calendars and routes to organize your team's work.

---

## Continue building your skills

### Customize your dropdown values

Add your organization's terminology to status fields and dropdowns so the system uses your team's language.

[How do I customize dropdown values?](../organize-people/standardize-data.md)

### Set up maps

Once your workforce is configured, set up a map so field teams can see asset and work order locations visually.

[How do I set up maps?](set-up-maps.md)

---

## Related topics

- [How do I schedule work?](../plan-work/schedule-work.md)
- [How do I assign the correct people?](../organize-people/assign-right-people.md)
- [How do I standardize data?](../organize-people/standardize-data.md)
