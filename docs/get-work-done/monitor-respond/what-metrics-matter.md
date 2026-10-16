---
search:
  boost: 2
  keywords: KPI metrics performance dashboard work queue supervisor administrator technician track
---

# What metrics matter?

Maximo Application Suite Select tracks maintenance performance through key performance indicators (KPIs). A KPI measures one specific variable over time, such as how many work orders were completed on schedule, or how long equipment typically runs before failing.

The metrics that matter most depend on your role. A supervisor needs to know whether today's work is on track. An administrator needs to know whether the overall maintenance program is healthy. An inventory clerk needs to know whether parts are available when work demands them.

## 💡 Tips for success

- Start with three to five KPIs, not twenty. Too many metrics dilute focus and make it harder to act.
- Set thresholds for every KPI: a green target, a yellow caution level, and a red alert level. Without thresholds, a KPI is just a number.
- Review KPIs on a regular cadence that matches your role: daily for supervisors, weekly or monthly for managers and administrators.
- A KPI is only as reliable as the data behind it. If technicians are not closing work orders accurately, completion rate and MTTR figures will be wrong.

---

## What metrics matter to supervisors?

Supervisors use KPIs to monitor daily work progress and respond to problems before they escalate. The Operational Dashboard for supervisors gives you a role-based view of the metrics most relevant to your team.

### Table 1. Supervisor metrics

| Metric | What it tells you | Where to find it |
|--------|------------------|------------------|
| **Work order completion rate** | How many work orders were completed vs. scheduled in a given period. A low rate signals resource or planning problems. | Operational Dashboard, Supervisor |
| **Overdue work orders** | Work that has passed its required finish date. Growing overdue counts mean scheduling or capacity issues. | Operational Dashboard, Work Queues |
| **PM compliance** | The percentage of preventive maintenance work orders completed on schedule. Target is 85% or higher. | Operational Dashboard, Supervisor |
| **Emergency work orders** | The count of unplanned, reactive work orders. High numbers indicate equipment is failing unexpectedly instead of being maintained proactively. | Operational Dashboard, Supervisor |
| **Maintenance backlog** | The volume of outstanding work. A healthy backlog is 2 to 4 weeks of work. Above 6 weeks signals a resource problem. | Work Queues |
| **Schedule compliance** | How often planned work is completed when it was scheduled. Targets above 90% indicate a well-run maintenance program. | Operational Dashboard, Supervisor |

### How supervisors use these metrics

Review completion rate and overdue work orders daily. Use the Work Queues card on your Operational Dashboard to act on items directly. You can change status, assign work, or escalate without leaving the dashboard.

---

## What metrics matter to administrators?

Administrators use KPIs to assess the health of the overall maintenance program and configure the system to support it. KPI Manager is where administrators create, configure, and manage KPIs for the organization.

### Table 2. Administrator metrics

| Metric | What it tells you | Where to find it |
|--------|------------------|------------------|
| **Planned maintenance percentage (PMP)** | The ratio of planned maintenance hours to total hours. Above 80% means your program is proactive, not reactive. | KPI Manager, KPI Viewer |
| **Mean time between failures (MTBF)** | The average time equipment runs before failing. Rising MTBF means reliability is improving. | KPI Manager, KPI Viewer |
| **Mean time to repair (MTTR)** | The average time to repair an asset after failure. High MTTR indicates slow response or complex failures. | KPI Manager, KPI Viewer |
| **Asset availability** | The percentage of time an asset is operational. Critical for production equipment. | KPI Manager, KPI Viewer |
| **Reactive maintenance ratio** | Emergency work orders as a percentage of total work. World-class programs keep this below 10%. | KPI Manager, KPI Viewer |
| **KPI threshold breaches** | KPIs that have crossed caution or alert thresholds. These require investigation or program adjustments. | KPI Manager |

### How administrators use these metrics

Use KPI Manager to create KPIs with defined targets, caution levels, and alert thresholds. Make frequently reviewed KPIs public so they appear on role-specific Operational Dashboards. Review program-level metrics monthly and adjust PM schedules or resource allocation based on trends.

Three configuration points that are easy to miss:

- **Set thresholds on every KPI.** A KPI without a green target, yellow caution, and red alert level is just a number. The traffic-light colour coding on the Operational Dashboard only activates when thresholds are configured. Without them, supervisors see data but no signal.
- **Make KPIs public.** A KPI configured in KPI Manager is private by default. It will not appear on anyone's Operational Dashboard until you explicitly make it public or assign it to a security group.
- **Activate new work queues.** In Maximo Application Suite Select, a newly created work queue defaults to inactive. If a work queue shows no results on the Operational Dashboard, check that it has been activated in Work Queue Manager.

---

## What metrics matter to inventory clerks?

Inventory clerks use metrics to ensure parts are available when work demands them. Stock-related KPIs help prevent delays caused by missing parts.

### Table 3. Inventory clerk metrics

| Metric | What it tells you | Where to find it |
|--------|------------------|------------------|
| **Stock-outs** | How often a required part was unavailable when needed. Frequent stock-outs delay work and increase downtime. | Operational Dashboard, Inventory Clerk |
| **Inventory turnover** | How quickly stock is consumed and replenished. Low turnover may mean overstocking; high turnover may indicate understocking. | Operational Dashboard, Inventory Clerk |
| **Parts requested vs. available** | The gap between what technicians need and what is in stock. Helps prioritize reordering. | Operational Dashboard, Inventory Clerk |

---

## Where to find KPIs in the product

### Table 4. KPI applications

| Application | Who uses it | What it does |
|-------------|-------------|--------------|
| **KPI Manager** | Administrators | Create, configure, and manage KPIs. Set targets, thresholds, and security group access. |
| **KPI Viewer** | All roles | View individual KPI values and trends. Read-only access to configured KPIs. |
| **KPI Templates** | Administrators | Create reusable templates to generate multiple related KPIs efficiently. |
| **Operational Dashboard** | All roles | Role-based dashboard showing KPI trend cards, work queue cards, and alert summaries. |
| **Work Queue Manager** | Administrators | Create and manage work queues that surface actionable items on the Operational Dashboard. |

---

## Continue building your skills

### Act on what the data tells you

When a KPI breaches a threshold, the Operational Dashboard surfaces it as an alert. Learn how to respond directly from the dashboard without leaving the view.

[How do I act on alerts?](act-on-alerts.md)

### Catch problems before they become failures

Condition monitoring feeds asset health data into your metrics. Set it up so your KPIs reflect equipment state, not just work order counts.

[How do I detect issues early?](detect-issues-early.md)

---

## What to do next

- [How do I act on alerts?](act-on-alerts.md): Use your Operational Dashboard to take action when KPIs breach thresholds.
- [How do I plan recurring maintenance?](../plan-work/plan-recurring-maintenance.md): Improving PM compliance starts with a well-configured maintenance schedule.
- [How do I detect issues early?](detect-issues-early.md): Condition monitoring feeds asset health metrics on your dashboard.

---

## Related topics

- [How do I detect issues early?](detect-issues-early.md)
- [How do I act on alerts?](act-on-alerts.md)
- [How do I plan recurring maintenance?](../plan-work/plan-recurring-maintenance.md)
- [How do I assign the correct people?](../organize-people/assign-right-people.md)
