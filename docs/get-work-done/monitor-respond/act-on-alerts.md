---
search:
  boost: 2
  keywords: operational dashboard work queues alerts kpi threshold breach supervisor act respond
---

# How do I act on alerts?

Operational dashboards in Maximo Application Suite Select consolidate critical operational signals into a single view. When a key performance indicator breaches an alert threshold, or when urgent maintenance enters a work queue, supervisors and administrators can review the situation and take immediate corrective action directly from the dashboard.

Acting on alerts promptly prevents small anomalies, such as an overdue work order or a growing backlog of service requests, from escalating into unplanned production downtime.

*Looking to verify your alert response workflow right away? [Skip to alert and work queue checklist ↓](#alert-and-work-queue-checklist)*

When you first sign in, Maximo Application Suite Select shows the Operational Dashboard that matches your security group. Your administrator assigns the group. Some dashboard content is included, and an administrator can edit the dashboard to add cards such as KPIs and work queues.

A work queue is a list of records that match a query, such as overdue work orders. It groups similar issues into one view, so supervisors can review, assign, and address them from the dashboard.

### 💡 Tips for success

- Check your Operational Dashboard at the start of each shift. Review red threshold breaches first, followed by yellow caution indicators.
- Use work queue cards to act on records. Depending on the queue, you can take an action such as creating a work order from a service request, or open the full record without navigating through the main menu.
- Ensure newly created work queues are activated. In Work Queue Manager, new queues default to inactive until an administrator explicitly sets their status to active.
- Customize work queue queries so they capture only actionable records. Queues containing thousands of general records dilute focus and cause alert fatigue.

---

## Where alerts appear on your dashboard

Your Operational Dashboard organizes alerts and work items into distinct visual cards.

### Table 1: Alert indicators on the Operational Dashboard

| Card type | What it displays | Alert condition | Immediate action |
| :--- | :--- | :--- | :--- |
| **KPI trend cards** | Single performance indicator with historical trend line | Card turns red when value breaches the alert threshold; turns yellow at caution level | Use the card menu to open the KPI in KPI Viewer and analyze the underlying historical records |
| **Work queues card** | Table of urgent work categories, such as overdue work orders or pending service requests | Badge count increases when new records match the queue query | Select a queue to inspect records, take the actions that the queue offers, or open the full record |
| **Condition monitoring alerts** | Assets exceeding measurement action limits | Corrective work orders appear in the work queues that list them | Review the asset condition history and dispatch qualified personnel |

---

## Responding to KPI threshold breaches

When a KPI card changes to yellow or red, investigate the underlying cause before adjusting operational priorities.

### Table 2: Common KPI alert triggers and corrective responses

| KPI alert | What the breach indicates | Immediate corrective response |
| :--- | :--- | :--- |
| **PM compliance below 85%** | Routine inspections and servicing are falling behind schedule | Open the Overdue work orders work queue and reschedule delayed maintenance to available shifts |
| **Emergency work order spike** | Unplanned equipment breakdowns are consuming maintenance capacity | Review recent failure codes in the Work Orders application to identify repeat defect patterns |
| **Overdue work order accumulation** | Team capacity is mismatched with incoming work demand | Reassign low priority backlog work and focus available crafts on critical production assets |
| **Stock-out frequency increase** | Essential spare parts were unavailable when requested | Coordinate with the inventory clerk to transfer stock from another storeroom and to review the minimum quantities for those parts |

---

## Processing work items from a work queue card

The Work queues card on the supervisor dashboard allows you to triage and process work without opening multiple menu screens. The actions that you can take depend on the queue. For example, the Pending service requests queue offers Create work order, Cancel, and View SR.

### Table 3: Actions available within the work queue card

| Action | How to perform it | Operational outcome |
| :--- | :--- | :--- |
| **Take a queue action** | Select the record and choose one of the actions that the queue offers, such as Create work order | Moves the record to the next step without opening the full record |
| **Open record** | Click the record number link | Opens the record in the application that the queue launches, for detailed review and planning |
| **Filter table** | Enter criteria in the column filter boxes | Narrows the active queue to specific assets, locations, or priority levels |

---

## Real-world example: Responding to a packaging line alert

Consider how a supervisor at the ice cream main plant responds to morning dashboard alerts.

### Scenario: Morning shift review

1. The supervisor opens **Operational Dashboard : Supervisor**.
2. **KPI Card 1, PM Compliance:** Displays 78%, highlighted in red alert status because the threshold is 85%.
3. **Work Queues Card:** Displays `Overdue work orders (Count: 4)` and `Pending service requests (Count: 1)`.
4. The supervisor clicks **Pending service requests**. The table displays service request `SR-10492` for asset `Drive motor` on filling line filler FL-02, which reports high vibration.
5. Direct action: The supervisor selects the request and clicks **Create work order**, so the repair can be planned and assigned.
6. Next, the supervisor clicks **Overdue work orders**, reviews the four routine filter changes, and reschedules them to the afternoon shift.

---

## How to configure work queues in Work Queue Manager

Some work queues are available when you first sign in. For example, Overdue work orders lists the approved or in progress work orders that are past their target completion date, so supervisors can see late work without searching for it. Administrators can use the work queues as they are, or create and manage their own for the operational dashboards.

Create your own work queues when the ones that are available do not cover the work your team needs to watch. A work queue lets you:

- See the records that need attention in one view, so supervisors do not have to search for them.
- Limit a queue to a person group, so each team sees the queues that apply to them.
- Take action on the records, such as creating a work order from a service request, without opening each full record.

### Step 1: Create the work queue definition

1. In the **Find navigation item** field, search for Work Queue Manager and open it.
2. Click **New Work Queue**.
3. In the **Work Queue** field, enter a unique name, such as `WQ-OVERDUE-PM`.
4. In the **Description** field, enter a descriptive label, such as `Overdue Preventive Maintenance`.
5. In the **Object Structure** field, select the target object structure, such as `MXAPIWODETAIL`.
6. In the **Launch Application** field, select `WOTRACK` or `Work Orders`.

### Step 2: Define the query and person group access

1. In the **Query** field, select the saved public query that filters the records, such as `OVERDUE_PMS`.
2. To restrict the queue to specific roles, add the target group in the **Person Groups** table, such as `SUP_MAINT`. If left blank, the queue is available across all dashboards with work queue cards.
3. In the **Status** field, change the value to `ACTIVE`.

### Step 3: Add the work queue card to the operational dashboard

1. Go to the target dashboard, such as **Operational Dashboard : Supervisor**.
2. Click **Edit Dashboard**.
3. Add the **Work queues** card, and select your work queue from the list.
4. Verify that your active work queue is selected.
5. Click **Save Dashboard**.

If you added a person group to the work queue, the queue does not show on the **Work queues** card by default. People in that group can select the **Work queues** card, edit the dashboard, and select the queue on the **Advanced** tab of the card gallery.

---

## Alert and work queue checklist

Use this checklist to confirm that dashboard alerting and work queues operate effectively for your team.

### Table 4: Alert and work queue verification checklist

| Check | Item | What to verify |
| :--- | :--- | :--- |
| [ ] | KPI thresholds configured | Every displayed KPI has target, caution, and alert levels defined in KPI Manager |
| [ ] | Public visibility enabled | KPIs and work queues are marked public or assigned to the correct security group |
| [ ] | Active queue status | All required work queues in Work Queue Manager are set to Active |
| [ ] | Query accuracy | Saved queries filter strictly on active, uncompleted records to prevent historical clutter |
| [ ] | Direct actions tested | Supervisors can take the actions that each queue offers, such as creating a work order from a service request, directly from the dashboard card |

---

## Continue building your skills

### Detect developing equipment problems

Condition monitoring feeds automated defect alerts into your work queues. Learn how to configure gauge and characteristic measurement limits.

[How do I detect issues early?](detect-issues-early.md)

### Prioritize incoming work requests

Combine dashboard alerts with structured prioritization criteria based on asset criticality and safety requirements.

[How do I decide what work should be done?](../plan-work/decide-what-work.md)

---

## What to do next

- [What metrics matter?](what-metrics-matter.md): Understand the core metrics monitored on operational dashboards.
- [How do I detect issues early?](detect-issues-early.md): Set up measurement points that generate alerts when equipment degrades.
- [How do I schedule work?](../plan-work/schedule-work.md): Balance daily alerts with scheduled preventive maintenance.

---

## Related topics

- [What metrics matter?](what-metrics-matter.md)
- [How do I detect issues early?](detect-issues-early.md)
- [Supervisor: Assign and track work](../../start-fast/first-task/supervisor-first-task.md)
- [How do I plan recurring maintenance?](../plan-work/plan-recurring-maintenance.md)
- [How do I assign the correct people?](../organize-people/assign-right-people.md)
