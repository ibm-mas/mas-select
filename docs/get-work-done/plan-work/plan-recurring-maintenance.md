---
search:
  boost: 2
  keywords: preventive maintenance PM planned maintenance schedule recurring
---

# How do I plan recurring maintenance?

Create a schedule that automatically generates work orders. The system creates work orders for you based on time (every 30 days) or equipment use (every 500 hours).

This helps you maintain equipment before it breaks. You set up the schedule once. The system does the rest.

## 💡 Tips for success

- Start with a small number of critical assets (5-10), then expand once the process works reliably
- Always create job plans before setting up schedules. They ensure consistent work.
- Set lead times based on your actual parts procurement time plus a buffer (typically 7-14 days)
- Review completed work orders monthly and adjust schedules based on actual equipment performance
- Activate schedules gradually to avoid overwhelming your team with work orders


## When to use this

Use recurring maintenance when you need to:

- Inspect or service equipment regularly
- Maintain equipment based on how much it runs
- Follow manufacturer maintenance schedules
- Prevent equipment breakdowns
- Keep consistent maintenance records

## How to set it up

### Step 1: Create a job plan (recommended)

A job plan lists the work steps, parts needed, and time required. It keeps the work consistent every time.

You can skip this step, but job plans make maintenance easier.

| Include in job plan | Required when |
|---|---|
| Task list | The work has multiple steps that technicians must follow in order |
| Labor entries | You want assignment records created automatically at work order approval |
| Material entries | You want storeroom reservations created automatically at work order approval |
| WO Priority | This work must appear correctly sorted in scheduling views |

### Step 2: Create the maintenance record

1. Open the Preventive Maintenance application
2. Choose the equipment or location
3. Describe the maintenance work clearly

### Step 3: Set the schedule

Choose how often to do the work:

**Time-based schedule**

- Every 30 days
- Every 2 weeks
- Every 6 months

**Usage-based schedule**

- Every 500 operating hours
- Every 1000 cycles
- Every 200 miles

**Combined schedule**

- Every 6 months OR 300 hours (whichever comes first)
- Every year OR 1000 hours (whichever comes first)

#### Fixed vs. floating: choose carefully

This setting controls when the next work order is generated.

- **Fixed schedule**: The next work order is created on the calendar interval regardless of whether the previous one was completed. A monthly PM generates every 30 days, every time.
- **Floating schedule**: The next work order is not created until the previous one reaches a completed, closed, or cancelled status. If a work order is never closed, the PM stops generating entirely — with no warning. One missed closure can silently halt maintenance on an asset indefinitely.

Use a fixed schedule for most time-based PMs. Use floating only when the next maintenance interval should genuinely depend on when the last job was finished, such as usage-based or condition-driven work.

### Step 4: Set lead time (optional but recommended)

Lead time tells the system when to create the work order before it's due.

Example: Set 7 days lead time. The system creates the work order a week early. This gives you time to get parts and schedule workers.

If lead time is too short, parts and labor won't be ready when the work order is generated. If it's left at zero, the work order appears on its due date — leaving no time to prepare. A lead time shorter than your parts procurement time virtually guarantees a delayed job.

### Step 5: Add the job plan

Link your job plan to the schedule. Each work order will include the same steps and parts list.

**In practice**

- Organizations often create overly complex schedules at the start, which are hard to maintain
- Schedules are frequently set up but never activated, so no work orders are generated
- Lead times are often too short, causing parts shortages and rushed work
- Teams sometimes create schedules without job plans, leading to inconsistent maintenance

---

## What happens next

After you activate the schedule:

1. The system creates work orders automatically
2. Each work order includes your job plan steps
3. Technicians complete the work
4. The system calculates the next due date
5. The system creates the next work order

The cycle repeats until you stop it.

---

## Common mistakes

- Creating too many schedules at once instead of starting with critical equipment
- Setting unrealistic frequencies (too often or not often enough)
- Not linking job plans, so technicians don't know what to do
- Forgetting to activate schedules after creating them
- Setting lead times that are too short for parts procurement

---

## What good looks like

**Poor setup**  
Create 50 Preventive Maintenance (PM) schedules for all equipment at once. No job plans. Activate all immediately.

**Good setup**  
Start with 5-10 critical assets. Create detailed job plans first. Test one schedule. Adjust based on results. Gradually add more equipment.

---

## Decision support: Choosing schedule type

**Use time-based when:**

- Equipment runs continuously or predictably
- Manufacturer recommends calendar-based maintenance
- You need simple, easy-to-manage schedules

**Use usage-based when:**

- Equipment usage varies significantly
- Meters are reliable and regularly updated
- Maintenance depends on actual wear (hours, cycles, miles)

**Use combined when:**

- You want maintenance to happen even if equipment sits idle
- Usage is unpredictable
- You need a safety net for both scenarios

---

## Why proper planning matters

- If schedules are not set up correctly, equipment fails unexpectedly instead of being maintained proactively
- If lead times are too short, technicians wait for parts and work gets delayed
- If job plans are missing, maintenance quality varies and problems are missed
- Poor scheduling leads to either too much work (overwhelming teams) or too little (equipment failures)
- If a floating schedule is used and a work order is never closed, no further work orders are generated for that asset — maintenance stops without any alert
- A schedule left inactive after setup generates no work orders, ever. The first sign is typically an unexpected equipment failure

---

Once your PMs are running, the system takes care of the scheduling — you focus on the work, not the calendar.

## Continue building your skills

### Know what work matters

Create job plans that standardize tasks, parts, and time estimates, then link them to your schedules so technicians always know what to do.

[How do I decide what work should be done?](decide-what-work.md)

### Schedule your team

Set up calendars and routes so work is assigned when people are available and inspections are grouped efficiently.

[How do I schedule work?](schedule-work.md)

---

## Related topics

- [How do I decide what work should be done?](decide-what-work.md)
- [How do I schedule work?](schedule-work.md)
- [What are the basic concepts?](../../start-fast/basics/what-are-basic-concepts.md)
- [How do I complete a job?](../complete-work/complete-job.md)
