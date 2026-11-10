---
search:
  boost: 2
  keywords: operational dashboard work queues alerts kpi threshold breach supervisor act respond
---

# How do I act on alerts?

Operational dashboards in Maximo Application Suite Select consolidate critical operational signals into a single view. When a key performance indicator breaches an alert threshold, or when urgent maintenance enters a work queue, supervisors and administrators can review the situation and take immediate corrective action directly from the dashboard.

Acting on alerts promptly prevents small anomalies, such as an overdue preventive maintenance inspection or a rising emergency backlog, from escalating into unplanned production downtime.

When you first sign in, Select shows the Operational Dashboard that matches your security group. Your administrator assigns the group. Select includes some dashboard content, and an administrator can edit the dashboard to add cards such as KPIs and work queues.

### 💡 Tips for success

- Check your Operational Dashboard at the start of each shift. Review red threshold breaches first, followed by yellow caution indicators.
- Use work queue cards to take direct action. You can assign labor, update work order status, or open the full record without navigating through the main menu.
- Ensure newly created work queues are activated. In Work Queue Manager, new queues default to inactive until an administrator explicitly sets their status to active.
- Customize work queue queries so they capture only actionable records. Queues containing thousands of general records dilute focus and cause alert fatigue.

---

## Where alerts appear on your dashboard

Your Operational Dashboard organizes alerts and work items into distinct visual cards.

### Table 1: Alert indicators on the Operational Dashboard

| Card type | What it displays | Alert condition | Immediate action |
| :--- | :--- | :--- | :--- |
| **KPI trend cards** | Single performance indicator with historical trend line | Card turns red when value breaches the alert threshold; turns yellow at caution level | Use the card menu to open the KPI in KPI Viewer and analyze the underlying historical records |
| **Work queues card** | Table of urgent work categories, such as overdue work or emergency requests | Badge count increases when new records match the queue query | Select a queue to inspect records, assign technicians, or update status directly |
| **Condition monitoring alerts** | Assets exceeding measurement action limits | Corrective work orders appear in unassigned or emergency work queues | Review the asset condition history and dispatch qualified personnel |

---

## Responding to KPI threshold breaches

When a KPI card changes to yellow or red, investigate the underlying cause before adjusting operational priorities.

### Table 2: Common KPI alert triggers and corrective responses

| KPI alert | What the breach indicates | Immediate corrective response |
| :--- | :--- | :--- |
| **PM compliance below 85%** | Routine inspections and servicing are falling behind schedule | Open the Overdue PMs work queue and reschedule delayed maintenance to available shifts |
| **Emergency work order spike** | Unplanned equipment breakdowns are consuming maintenance capacity | Review recent failure codes in the Work Orders application to identify repeat defect patterns |
| **Overdue work order accumulation** | Team capacity is mismatched with incoming work demand | Reassign low priority backlog work and focus available crafts on critical production assets |
| **Stock-out frequency increase** | Essential spare parts were unavailable when requested | Coordinate with the inventory clerk to expedite reorders and adjust reorder points in the Storeroom |

---

## Processing work items from a work queue card

The Work queues card on the supervisor dashboard allows you to triage and process work without opening multiple menu screens.

### Table 3: Actions available within the work queue card

| Action | How to perform it | Operational outcome |
| :--- | :--- | :--- |
| **Assign labor** | Select the work order row, click Assign, and select a qualified technician | Assigns the work order and sends it directly to the technician mobile work list |
| **Update status** | Select the record and choose a new status, such as Approved or Canceled | Advances the work order lifecycle and removes it from unapproved queues |
| **Open record** | Click the work order number link | Launches the full Work Orders application for detailed planning and job plan adjustments |
| **Filter table** | Enter criteria in the column filter boxes | Narrows the active queue to specific assets, locations, or priority levels |

---

## Real-world example: Responding to a packaging line alert

Consider how a supervisor at the ice cream main plant responds to morning dashboard alerts.

### Scenario: Morning shift review

1. The supervisor opens **Operational Dashboard : Supervisor**.
2. **KPI Card 1, PM Compliance:** Displays 78%, highlighted in red alert status because the threshold is 85%.
3. **Work Queues Card:** Displays `Overdue PMs (Count: 4)` and `Emergency Work Orders (Count: 1)`.
4. The supervisor clicks **Emergency Work Orders**. The table displays work order `WO-10492` for asset `Drive motor` on filling line filler FL-02, generated by a condition monitoring high vibration action limit.
5. Direct action: The supervisor clicks **Assign**, selects a mechanical technician certified in drive alignments, and updates the status to Approved, `APPR`.
6. Next, the supervisor clicks **Overdue PMs**, reviews the four routine filter changes, and allocates them to the afternoon shift schedule.

---

## How to configure work queues in Work Queue Manager

Select includes some work queues. Administrators can use them as they are, or create and manage their own for the operational dashboards.

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
3. Add a card that shows work orders as a table, and select your work queue for it.
4. Verify that your active work queue is selected.
5. Click **Save Dashboard**.

`[SME confirmation required: Confirm which card type shows a work queue on the dashboard in Select, and how you select the queue.]`

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
| [ ] | Direct actions tested | Supervisors can assign labor and approve work orders directly from the dashboard card |

---

## Continue building your skills

### Detect developing equipment problems

Condition monitoring feeds automated defect alerts into your emergency work queues. Learn how to configure gauge and characteristic measurement limits.

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
