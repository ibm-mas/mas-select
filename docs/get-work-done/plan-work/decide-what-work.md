# How do I decide what work should be done?

Create job plans that list the steps, parts, and tools for common maintenance tasks. Job plans work like templates. They keep work consistent every time.

You plan the work once. Then you reuse the plan. This saves time and reduces mistakes.

!!! warning "TODO: Add visual content"
     A diagram showing how job plans flow into work orders would be useful here.

## 💡 Tips for success

**Start with common tasks**
Create plans for work you do most often.

**Keep it simple**
Use clear, short instructions.

**Add safety notes**
Include warnings for dangerous work.

**Update regularly**
Change plans based on worker feedback.

**Use for all scheduled work**
Every maintenance schedule should have a job plan.

## When to use job plans

Use job plans for:

- Tasks you do regularly (monthly inspections)
- Work with multiple steps
- Jobs that need specific parts or tools
- Tasks where safety matters
- Scheduled maintenance

## What goes in a job plan

Include these items:

**Work description**
What you need to do and why.

**Task list**
Step-by-step instructions.

**Labor estimates**
How many people and hours you need. When this job plan is applied to a work order and the work order is approved, the system automatically creates assignment records for each labor entry. Without labor estimates, no assignments are created — planners must add them manually every time.

**Required materials**
Parts and supplies you need. When a work order with planned materials is approved, the system automatically creates storeroom reservations. Without materials on the job plan, no reservations are made and parts may not be available when the technician arrives on site.

**Tools**
Special equipment or tools.

**Safety information**
Hazards and safety steps.

## How to create and use job plans

### Create the job plan

1. Open the Job Plans application
2. Add a clear name and description
3. List all work tasks in order
4. Add labor, materials, and tools
5. Set the **WO Priority** field. This pre-fills priority on every work order generated from this plan. Without it, work orders default to null priority and sort to the bottom of every scheduling and assignment view — urgent work becomes invisible to planners.

### Use with scheduled maintenance

Attach job plans to your maintenance schedules. Work orders include the job plan automatically.

### Use with work orders

Add job plans to individual work orders. Technicians see all steps and materials.

### Keep plans current

Review completed work. Update job plans based on what actually happened. Add missing steps or materials.

To change a job plan that is already active, select **Revise Job Plan** first. If you try to add or change tasks without revising the plan, you get the error "BMXAA0024E - The action ADD is not allowed on object JOBTASK."

`[SME confirmation required: Confirm where Revise Job Plan appears in the Job Plans application in Select, and whether other errors can appear when editing an active job plan.]`

!!! warning "TODO: Add visual content"
     A video showing how to create a simple job plan would be useful here.

## Why job plans help

**Everyone does the work the same way**
No confusion about steps or procedures.

**Work goes faster**
No time spent figuring out what to do.

**You get the correct parts**
All materials are listed upfront. Reservations are created automatically at approval — no manual follow-up needed.

**Training is easier**
New workers have clear instructions.

**Costs are predictable**
You know time and materials in advance.

**Assignments are created for you**
Labor entries on the job plan generate assignment records when the work order is approved. The correct people appear in the assignment queue without a planner having to add them manually.

## Continue building your skills

### Schedule your team

With job plans in place, set up calendars and routes so work is assigned when people are available and inspections run in sequence.

[How do I schedule work?](schedule-work.md)

### Monitor performance

Track whether work is being completed on time, how much backlog your team carries, and where to intervene.

[What metrics matter?](../monitor-respond/what-metrics-matter.md)

---

## Related topics

- [How do I plan recurring maintenance?](plan-recurring-maintenance.md)
- [How do I schedule work?](schedule-work.md)
- [How do I complete a job?](../complete-work/complete-job.md)
- [What is a work order?](../../start-fast/basics/what-is-work-order.md)
