---
search:
  boost: 2
  keywords: condition monitoring meters measurement points gauge characteristic continuous action limits warning limits alerts
---

# How do I detect issues early?

Equipment rarely breaks down without warning. Before a motor bearing seizes or a refrigeration compressor fails, assets show physical symptoms, such as elevated vibration, rising operating temperature, pressure drops, or degraded lubricant color.

Condition monitoring allows you to track these physical indicators systematically. By defining acceptable limits for meter readings, Maximo Application Suite Select helps you identify developing defects and generate corrective maintenance before an unexpected breakdown halts operations.

### 💡 Tips for success

- Select the correct meter type before creating records. Gauge meters track numeric values that fluctuate; characteristic meters track qualitative observations; continuous meters track cumulative run hours.
- Remember that warning limits are informational only. The system does not automatically create work orders when a reading crosses a warning limit. Automated work order generation requires an action limit linked to an active job plan.
- Avoid setting action limits too close to normal operating variance. Tight thresholds trigger unnecessary work orders and cause alert fatigue for supervisors.
- Group related meters into meter groups when multiple assets share the same monitoring profile, such as standard drive motors.

---

## Choosing the correct meter type

Every condition monitoring strategy begins in the Meters application. The system supports three distinct meter types, each designed for a specific maintenance purpose.

### Table 1: Meter types and maintenance applications

| Meter type | How measurements behave | Maintenance purpose | Typical examples | Where configured |
| :--- | :--- | :--- | :--- | :--- |
| **Gauge** | Numeric values that fluctuate up and down over time | Track operating condition against acceptable upper and lower limits | Operating temperature, vibration velocity, line pressure, oil level | Condition Monitoring application |
| **Characteristic** | Qualitative observations chosen from a predefined list of values | Record visual inspections and trigger work for specific degraded states | Oil color, belt condition, leakage severity, corrosion level | Condition Monitoring application |
| **Continuous** | Numeric values that accumulate and increase indefinitely | Track usage intervals to trigger routine scheduled servicing | Operating run hours, odometer mileage, production cycles | Preventive Maintenance application |

Continuous meters track usage intervals, such as running a service every 500 hours, and do not use condition monitoring measurement points. Condition monitoring relies on gauge meters and characteristic meters.

---

## How measurement points work

In the Condition Monitoring application, you create a point record that connects a specific meter to an asset or a location. Each point record applies to a single asset or a single location at your site.

### Table 2: Measurement points versus observation points

| Point type | Meter type used | Limit structure | Work generation trigger |
| :--- | :--- | :--- | :--- |
| **Measurement point** | Gauge meter | Upper and lower warning limits; upper and lower action limits | Reading exceeds an upper action limit or falls below a lower action limit |
| **Observation point** | Characteristic meter | Specific observation values mapped from a domain | Reading matches an observation value that has an attached job plan or preventive maintenance record |

---

## Understanding warning limits versus action limits

A frequent point of confusion is the difference between warning limits and action limits on gauge measurement points.

### Table 3: Limit types on gauge measurement points

| Limit type | Purpose | System behavior | Recommended use |
| :--- | :--- | :--- | :--- |
| **Warning limit** | Highlights that an asset is trending away from optimal condition | Informational only; recorded in history and visible in reports, but generates no automated work | Early warning for inspectors and supervisors during routine rounds |
| **Action limit** | Identifies that an asset has reached an unacceptable condition requiring intervention | Triggers work order generation when combined with an active job plan or preventive maintenance record | Immediate corrective maintenance to prevent equipment failure |

Every action limit must include an active job plan or a preventive maintenance record. If an action limit is populated without a job plan or preventive maintenance record, the system generates an error during work order processing.

---

## Real-world example: Ice cream plant monitoring

Consider how condition monitoring applies across equipment and areas at the ice cream main plant.

### Example 1: Drive motor vibration on Filler FL-02

The drive motor on filling line filler FL-02 operates in the filling line room. Excessive vibration indicates bearing wear or misalignment:

- **Application:** Condition Monitoring
- **Asset:** Drive motor
- **Meter:** `VIB-VEL` with gauge type, measured in millimeters per second
- **Normal operating range:** 0 to 2.5 mm/s
- **Upper warning limit:** 2.8 mm/s, signaling early wear during inspection reviews
- **Upper action limit:** 4.2 mm/s, mapped to job plan `JP-MTR-ALIGN` to dispatch a technician for precision alignment and bearing inspection

### Example 2: Cold storage room ambient temperature

The cold storage room must maintain strict sub-zero temperatures to protect finished product:

- **Application:** Condition Monitoring
- **Location:** Cold storage room
- **Meter:** `ROOM-TEMP` with gauge type, measured in degrees Celsius
- **Normal operating range:** -22°C to -18°C
- **Lower action limit:** -26°C, mapped to job plan `JP-REF-LOW` to check expansion valve settings
- **Upper action limit:** -14°C, mapped to job plan `JP-REF-HIGH` to inspect refrigeration compressors immediately

### Example 3: Gearbox lubricant inspection

Technicians inspect gearbox oil condition during monthly rounds:

- **Application:** Condition Monitoring
- **Asset:** Drive motor gearbox
- **Meter:** `OIL-COND` with characteristic type, using values `CLEAR`, `CLOUDY`, `DARK`, and `CONTAMINATED`
- **Normal values:** `CLEAR` requires no follow-up action
- **Trigger value:** `CONTAMINATED` is mapped to job plan `JP-OIL-FLUSH` to schedule an immediate oil replacement and seal inspection

---

## Common setup mistakes to avoid

Review these four common pitfalls when designing condition monitoring points:

### Table 4: Common condition monitoring mistakes and solutions

| Mistake | Why it causes problems | Recommended solution |
| :--- | :--- | :--- |
| **Using continuous meters in Condition Monitoring** | Continuous meters accumulate indefinitely and cannot evaluate upper or lower thresholds | Use continuous meters in the Preventive Maintenance application to trigger usage-based maintenance |
| **Expecting warning limits to create work orders** | Warning limits carry no automated workflow triggers in the system | Define action limits with attached job plans for conditions that require maintenance work |
| **Leaving job plan fields blank on action limits** | The system cannot determine what tasks or resources are needed when limits are breached | Always assign an active job plan or preventive maintenance record to every populated action limit |
| **Setting limits without historical baselines** | Setting action thresholds too tight creates dozens of duplicate work orders for minor temperature spikes | Establish baseline readings during normal operating conditions before defining action limits |

---

## How to set up condition monitoring in desktop applications

Setting up early issue detection follows four sequential steps across the desktop applications.

### Step 1: Create the meter

1. Go to **Assets > Meters**.
2. Click **New Meter**.
3. In the **Meter** field, enter a unique identifier, such as `VIB-VEL`.
4. In the **Meter Type** field, select `GAUGE` for variable numeric values or `CHARACTERISTIC` for qualitative observations.
5. In the **Reading Type** field, select `ACTUAL` for raw values or `DELTA` for change increments.
6. Click **Save Meter**.

### Step 2: Associate the meter with the asset or location

1. Go to **Assets > Assets** or **Assets > Location**.
2. Open the asset or location record, such as asset `Drive motor`.
3. Open the **Meters** tab and click **New Row**.
4. In the **Meter** field, select the meter you created in Step 1.
5. Click **Save Asset** or **Save Location**.

### Step 3: Create the measurement point record

1. Go to **Planning > Condition Monitoring** or **Assets > Condition Monitoring**.
2. Click **New Measure Point**.
3. In the **Point** field, enter a unique point number or accept the system-generated value.
4. Specify the **Asset** or **Location** to monitor.
5. In the **Meter** field, select the associated gauge or characteristic meter.
6. For gauge meters, enter your **Upper Warning Limit**, **Upper Action Limit**, **Lower Warning Limit**, or **Lower Action Limit**.
7. In the **Job Plan** or **PM** field next to each action limit, select the active maintenance plan to execute when the limit is breached.
8. Click **Save Measure Point**.

### Step 4: Generate work orders from condition breaches

When technicians record meter readings during inspections, work orders can be generated in two ways:

- **Manual generation:** Open the Condition Monitoring record and select **Generate Work Orders** from the common actions menu.
- **Automated generation:** Administrators configure background processing so that work orders generate automatically whenever a qualifying measurement is entered.

---

## Verification checklist

Use this checklist to confirm that your condition monitoring point is properly configured and ready to protect equipment.

### Table 5: Condition monitoring verification checklist

| Check | Item | What to verify |
| :--- | :--- | :--- |
| [ ] | Meter type alignment | Gauge meter is used for fluctuating numbers; characteristic meter is used for observational codes |
| [ ] | Asset or location link | The meter is added to the Meters tab of the target asset or location record |
| [ ] | Action limit job plans | Every populated action limit has an active job plan or preventive maintenance record assigned |
| [ ] | Realistic thresholds | Limits reflect true operational boundaries and avoid nuisance triggering during normal startup |
| [ ] | Work order priority | The work order priority field on the point record is set to reflect the urgency of the condition |

---

## Continue building your skills

### Respond to system alerts and work queues

Once condition monitoring points detect abnormal readings, alerts appear on operational dashboards. Learn how supervisors review and process incoming alerts.

[How do I act on alerts?](act-on-alerts.md)

### Track key performance metrics

Connect condition monitoring data to plant-wide reliability metrics, including Mean Time Between Failures and preventive maintenance compliance.

[What metrics matter?](what-metrics-matter.md)

---

## What to do next

- [How do I act on alerts?](act-on-alerts.md): Review and manage threshold breach alerts on your operational dashboard.
- [What metrics matter?](what-metrics-matter.md): Discover which metrics help measure the health of your maintenance program.
- [How do I plan recurring maintenance?](../plan-work/plan-recurring-maintenance.md): Complement condition-based maintenance with structured preventive schedules.

---

## Related topics

- [How do I act on alerts?](act-on-alerts.md)
- [What metrics matter?](what-metrics-matter.md)
- [How do I track asset history?](../manage-assets/track-asset-history.md)
- [What happens when an asset fails?](../manage-assets/asset-fails.md)
- [How do inspections work?](../../start-fast/basics/how-inspections-work.md)
