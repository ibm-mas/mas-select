---
search:
  boost: 2
  keywords: reduce downtime asset failure mtbf mttr failure codes preventive maintenance spare parts reliability
---

# How do I reduce downtime?

Unplanned equipment downtime is one of the most costly disruptions in industrial and facilities operations. When critical machinery stops unexpectedly, production halts, maintenance costs surge, and emergency repairs replace planned work.

Reducing downtime requires shifting your maintenance operation from reactive emergency response to proactive defect prevention. In Maximo Application Suite Select, this transformation rests on four core pillars: structured preventive maintenance, standardized failure reporting, condition monitoring, and critical spare parts availability.

### 💡 Tips for success

- Maintain a preventive maintenance compliance rate of 85% or higher. When PMs are deferred, equipment failure rates increase dramatically within 30 to 60 days.
- Implement structured failure codes with Problem, Cause, and Remedy levels. Without standardized failure data, reliability teams cannot identify repeat root causes.
- Report actual downtime hours on every corrective work order. Recording when the breakdown started and ended allows the system to calculate accurate Mean Time to Repair and Mean Time Between Failures.
- Ensure critical spare parts are linked directly to asset records on the Spare Parts tab. Technicians should never lose hours searching storerooms for routine wear components.

---

## The four pillars of downtime reduction

World-class maintenance programs keep unplanned downtime below 10% of total operating hours. Maximo Application Suite Select supports this goal through four integrated capabilities.

### Table 1: Core capabilities for downtime reduction

| Capability | What it does | Operational impact | Where configured |
| :--- | :--- | :--- | :--- |
| **Preventive Maintenance (PM)** | Generates recurring inspections and servicing before equipment degrades | Prevents up to 70% of mechanical and electrical wear failures | Planning > PM |
| **Condition Monitoring** | Triggers corrective work orders when meter readings breach action limits | Detects impending failures days or weeks before catastrophic breakdown | Assets > Condition Monitoring |
| **Failure Code Hierarchies** | Captures structured Problem, Cause, and Remedy data on work orders | Reveals recurring defect trends across equipment classes | Assets > Failure Codes |
| **Storeroom Reorder Points** | Automates reorder notifications when stock falls below safety levels | Eliminates repair delays caused by missing replacement parts | Inventory > Storerooms |

---

## Structuring failure codes to identify root causes

When technicians record failure details in free-form notes, analyzing defect trends is difficult. Structured failure codes convert maintenance history into actionable reliability data.

A failure hierarchy follows a three-level parent-child structure headed by a failure class:

1. **Failure Class:** Identifies the broad asset type, such as `PUMP` or `MOTOR`.
2. **Problem:** Describes the observed symptom, such as `HIGH-TEMP` or `VIBRATION`.
3. **Cause:** Identifies why the problem occurred, such as `BEARING-WEAR` or `LUBRICATION-LOSS`.
4. **Remedy:** Describes the corrective action taken, such as `REPLACE-BEARING` or `GREASE-UNIT`.

### Table 2: Example failure hierarchy for electric drive motors

| Level | Code | Description | Operational meaning |
| :--- | :--- | :--- | :--- |
| **Failure class** | `MTR-ELEC` | Electric Motor | Top category assigned to all motor asset records |
| **Problem** | `OVERHEAT` | Operating temperature above limit | Observed symptom during production |
| **Cause** | `FAN-BLOCK` | Cooling fan blocked with debris | Root cause identified upon inspection |
| **Remedy** | `CLEAN-FAN` | Cleaned fan cowl and housing | Corrective action executed by technician |

---

## Tracking asset downtime on work orders

To measure whether downtime is decreasing, maintenance teams must record downtime accurately on corrective work orders.

### How to report downtime in the Work Orders application

1. Go to **Work Orders > Work Orders**.
2. Open the completed corrective work order.
3. Select **Report Downtime** from the common actions menu.
4. Specify whether the downtime occurred during operational or non-operational production hours.
5. In the **Downtime Code** field, select the reason code, such as `BRKDWN` for unscheduled breakdown.
6. In the **Start Date** and **End Date** fields, enter the exact timestamps when the asset stopped and returned to service.
7. Click **OK** to save the downtime record.

---

## Real-world example: Eliminating recurring downtime on Filler FL-02

Consider how the maintenance supervisor at the ice cream main plant used failure data to eliminate repeated stoppages on filling line filler FL-02.

### Scenario: Chronic packaging line stops

- **The Problem:** Filler FL-02 in the filling line room suffered four unscheduled stops over six weeks, totaling 18 hours of lost ice cream packaging time.
- **Data Analysis:** The supervisor reviewed KPI Viewer and filtered work orders by asset `Filler FL-02`. The failure reporting tab showed that all four work orders shared the problem code `JAM` and cause code `SEAL-LEAK`.
- **Root Cause:** Product leakage from worn nozzle seals was contaminating the drive belt track, causing drive slip and safety stops.
- **Corrective Action:**
  1. The supervisor updated the preventive maintenance schedule for filler FL-02, changing the nozzle seal replacement interval from 90 days to 45 days.
  2. The supervisor set up a characteristic condition monitoring point to inspect seal integrity during weekly sanitization rounds.
  3. The inventory clerk increased the safety stock level for nozzle seal kits from 2 to 6 units in the main storeroom.
- **The Outcome:** Unscheduled downtime on filler FL-02 dropped to zero hours over the following quarter.

---

## Downtime reduction roadmap

Follow this progressive roadmap to systematically reduce downtime across your facility.

### Table 3: Progressive steps to reduce equipment downtime

| Stage | Focus area | Key milestone | Target metric |
| :--- | :--- | :--- | :--- |
| **Stage 1: Basic control** | Achieve 85%+ PM compliance | All critical production assets have active PM schedules generated on time | PM Compliance > 85% |
| **Stage 2: Failure tracking** | Enforce failure code entry | Technicians select Problem, Cause, and Remedy on 100% of emergency work | Failure Code Capture > 90% |
| **Stage 3: Parts alignment** | Secure critical spare parts | All high-risk failure components have active reorder points in Storerooms | Stock-Out Rate < 2% |
| **Stage 4: Early detection** | Implement condition monitoring | Critical drives and compressors use gauge meters to detect early wear | Reactive Work Ratio < 15% |

---

## Verification checklist

Use this checklist to confirm that your downtime reduction processes are operating effectively.

### Table 4: Downtime reduction verification checklist

| Check | Item | What to verify |
| :--- | :--- | :--- |
| [ ] | PM compliance tracking | Supervisor Operational Dashboard displays monthly PM compliance above 85% |
| [ ] | Failure hierarchy assigned | All operating production assets have a valid Failure Class on their record |
| [ ] | Mandatory failure reporting | Technicians enter Problem, Cause, and Remedy before closing emergency work |
| [ ] | Downtime hours logged | Downtime start and end timestamps are recorded on all unscheduled work orders |
| [ ] | Critical spares identified | Critical wear components are listed on the Spare Parts tab of critical assets |

---

## Continue building your skills

### Complete maintenance on schedule

High work order completion rates ensure preventive maintenance is finished before breakdowns occur. Learn how to eliminate work order bottlenecks.

[How do I improve completion rates?](improve-completion-rates.md)

### Catch equipment defects early

Condition monitoring detects temperature, vibration, and pressure anomalies before they turn into emergency downtime events.

[How do I detect issues early?](../../get-work-done/monitor-respond/detect-issues-early.md)

---

## What to do next

- [How do I improve completion rates?](improve-completion-rates.md): Identify and remove operational obstacles that delay work completion.
- [What metrics matter?](../../get-work-done/monitor-respond/what-metrics-matter.md): Track MTBF, MTTR, and planned maintenance percentages.
- [How do I plan recurring maintenance?](../../get-work-done/plan-work/plan-recurring-maintenance.md): Configure effective PM schedules and routes.

---

## Related topics

- [How do I improve completion rates?](improve-completion-rates.md)
- [How do I optimize performance?](../../work-smarter/insights-outcomes/optimize-performance.md)
- [How do I turn data into decisions?](../../work-smarter/insights-outcomes/data-into-decisions.md)
- [How do I decide: location, asset, or spare part?](../../get-work-done/setup-control/decide-location-asset-spare-part.md)
- [What metrics matter?](../../get-work-done/monitor-respond/what-metrics-matter.md)
- [How do I detect issues early?](../../get-work-done/monitor-respond/detect-issues-early.md)
- [What happens when an asset fails?](../../get-work-done/manage-assets/asset-fails.md)
- [How do I track asset history?](../../get-work-done/manage-assets/track-asset-history.md)
