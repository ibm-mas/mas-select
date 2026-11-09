---
search:
  boost: 2
  keywords: improve completion rates work orders backlog status lifecycle wmatl wappr inprg supervisor technician
---

# How do I improve completion rates?

A low work order completion rate is a warning signal that operational friction is slowing down your maintenance team. When work orders linger for weeks in unapproved, waiting, or in progress statuses, the maintenance backlog inflates, overdue counts rise, and critical preventive maintenance gets missed.

Improving completion rates requires identifying and eliminating the specific bottlenecks that prevent technicians from finishing jobs on time. In Maximo Application Suite Select, this means aligning material readiness, craft qualifications, job plan clarity, and status lifecycle discipline.

### 💡 Tips for success

- Review work orders in Waiting on Material status daily. A work order should not be approved or scheduled until all required parts are verified in stock.
- Match work orders to technician crafts before assigning. Assigning an electrical repair to a general mechanic leads to delays, rework, and incomplete tasks.
- Attach standardized job plans to recurring work. Work orders with defined step-by-step tasks and estimated hours are completed 40% faster than vague single-line requests.
- Train technicians to complete work orders on mobile devices before leaving the job site. Delaying data entry until the end of the week creates administrative backlogs and inaccurate actual labor hours.

---

## The four major completion blockers

When work orders stall, the cause usually falls into one of four operational categories.

### Table 1: Common completion blockers and solutions

| Blocker | System symptom | Operational root cause | Remediation strategy |
| :--- | :--- | :--- | :--- |
| **Material availability** | Work order stuck in `WMATL` status | Required spare parts are out of stock or not reserved in advance | Use the Storerooms application to check balances and reserve parts before approving work |
| **Craft mismatch** | Long duration in `INPRG` status | Technician lacks the specialized certification or tools for the task | Check craft and skill requirements in Labor and match assignments accordingly |
| **Unclear scope** | Task marked incomplete or rejected | Work order description lacks specific instructions or safety procedures | Attach a standardized Job Plan with documented task steps and safety requirements |
| **Approval delay** | Accumulation of `WAPPR` records | Supervisors lack a consolidated daily review routine | Use the Work queues card on the supervisor Operational Dashboard to approve work in batches |

---

## Managing the work order lifecycle

Maintaining disciplined status progression prevents work orders from getting lost between shifts or departments.

### Table 2: Standard work order status lifecycle

| Status | Code | Meaning | Who manages it |
| :--- | :--- | :--- | :--- |
| **Waiting on Approval** | `WAPPR` | Work order created; pending review and resource verification | Supervisor |
| **Approved** | `APPR` | Work order approved; ready for scheduling and resource allocation | Supervisor |
| **Waiting on Material** | `WMATL` | Work approved but waiting for required inventory parts | Inventory Clerk |
| **Waiting on Plant Condition** | `WPCOND` | Work approved but requires equipment shutdown or line clearance | Supervisor |
| **In Progress** | `INPRG` | Technician is actively performing the physical work | Technician |
| **Completed** | `COMP` | Physical work finished; actual hours, materials, and notes recorded | Technician |
| **Closed** | `CLOSE` | Financial and operational review completed; record locked | Administrator |

---

## Pre-job staging: Eliminating parts delays

The single largest cause of stalled work orders in manufacturing and facilities operations is the lack of replacement parts when the technician arrives at the asset.

### How to verify and reserve parts before work begins

1. In the **Find navigation item** field, search for Work Orders and open it.
2. Open the planned work order and open the **Plans** tab.
3. Open the **Materials** subtab and verify that required parts and quantities are listed.
4. Review the **Direct Issue** and **Line Status** indicators.
5. If items show insufficient stock, update the status to `WMATL` and notify the inventory clerk.
6. Once the inventory clerk confirms stock availability in the storeroom, update the status to `APPR` for assignment.

---

## Real-world example: Clearing stalled work on the filling line

Consider how the maintenance supervisor at the ice cream main plant cleared a backlog of overdue work orders on filling line filler FL-02.

### Scenario: Stalled preventive maintenance

- **The Problem:** Three consecutive monthly PM work orders for filler FL-02 remained in `INPRG` for over four weeks. The overall plant completion rate had dropped to 62%.
- **Diagnosis:** The supervisor opened **Operational Dashboard : Supervisor** and reviewed the work orders. Two work orders were stalled because the sanitization seal kit was on backorder (`WMATL`). The third was stalled because the assigned technician was an apprentice mechanic who needed a certified electrician to complete the motor drive calibration task.
- **Corrective Action:**
  1. The supervisor reconfigured the job plan for filler FL-02 into two separate tasks: Task 10 for mechanical seal replacement, and Task 20 for electrical motor calibration.
  2. The supervisor worked with the inventory clerk to establish a dedicated kit item in Item Master for filler FL-02 monthly maintenance.
  3. The supervisor updated shift assignments so that mechanical and electrical tasks were assigned to the appropriate crafts simultaneously during the planned Tuesday sanitation shutdown.
- **The Outcome:** The backlog was cleared in a single shift, and monthly PM completion rates on the packaging line rose to 94%.

---

## Daily supervisor completion routine

Supervisors who follow a consistent 15-minute daily triage routine maintain significantly higher completion rates across their teams.

### Table 3: Daily completion triage workflow

| Time | Action | Application | Focus |
| :--- | :--- | :--- | :--- |
| **Shift start (10 min)** | Review `WAPPR` and `WMATL` queues | Operational Dashboard | Approve verified work and allocate to technicians based on craft availability |
| **Mid-shift (5 min)** | Check long-running `INPRG` records | Work Orders | Identify technicians who encounter unexpected blockers or scope changes |
| **Shift end (10 min)** | Review `COMP` work orders | Work Orders | Verify actual labor hours, materials used, and failure codes before closing |

---

## Verification checklist

Use this checklist to ensure that your organization maintains high work order completion rates.

### Table 4: Work order completion verification checklist

| Check | Item | What to verify |
| :--- | :--- | :--- |
| [ ] | Daily queue review | Supervisor checks the WAPPR work queue on the dashboard at the start of every shift |
| [ ] | Materials confirmed | No work order is released to INPRG without confirmed parts availability in Storerooms |
| [ ] | Craft alignment | Assigned labor craft matches the skill requirements listed on the job plan |
| [ ] | Mobile completion | Technicians log labor actuals, materials used, and failure codes directly on mobile |
| [ ] | Status hygiene | Work orders are advanced from COMP to CLOSE within standard accounting timeframes |

---

## Continue building your skills

### Reduce unplanned asset downtime

High completion rates on preventive maintenance directly reduce unscheduled breakdowns. Learn how to structure maintenance programs for maximum reliability.

[How do I reduce downtime?](reduce-downtime.md)

### Assign the correct people to work

Ensure work orders are directed to technicians with the right skills, certifications, and shift availability.

[How do I assign the correct people?](../../get-work-done/organize-people/assign-right-people.md)

---

## What to do next

- [How do I reduce downtime?](reduce-downtime.md): Shift maintenance focus from reactive repairs to scheduled reliability.
- [How do I schedule work?](../../get-work-done/plan-work/schedule-work.md): Build balanced weekly schedules that prevent resource bottlenecks.
- [How do I assign the correct people?](../../get-work-done/organize-people/assign-right-people.md): Configure crafts, crews, and calendars.

---

## Related topics

- [How do I reduce downtime?](reduce-downtime.md)
- [Why aren't technicians using the system?](../improve-adoption/technicians-not-using.md)
- [How do I simplify workflows?](../improve-adoption/simplify-workflows.md)
- [How do I act on alerts?](../../get-work-done/monitor-respond/act-on-alerts.md)
- [How do I schedule work?](../../get-work-done/plan-work/schedule-work.md)
- [Supervisor: Assign and track work](../../start-fast/first-task/supervisor-first-task.md)
- [Technician: Complete your first work order](../../start-fast/first-task/technician-first-task.md)
- [What metrics matter?](../../get-work-done/monitor-respond/what-metrics-matter.md)
