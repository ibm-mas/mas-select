---
search:
  boost: 2
  keywords: inspection forms inspections questions checklist digital forms audit mobile rounds
---

# How do I create inspection forms?

Digital inspection forms replace paper clipboards with structured, interactive checklists on mobile devices. Technicians and inspectors use inspection forms to execute safety audits, hygiene checklists, equipment condition assessments, and routine operator rounds.

In Maximo Application Suite Select, forms are designed in the Inspection Forms application and executed in the Inspections role-based app or directly within mobile work orders.

## Inspection form capabilities and response types

The Inspection Forms application provides flexible question controls to capture exact field observations.

<img src="../../images/sample_inspection_form_lifecycle.svg" alt="Inspection form design, configuration, and field execution lifecycle" style="width: 100%; max-width: 680px; display: block; margin: 16px auto;">
<p class="figure-caption">Figure 1: Inspection form design, configuration, and field execution lifecycle</p>

### Table 1: Inspection form question types and operational uses

| Question type | Response mechanism | Operational application | Ice Cream Plant example |
|---|---|---|---|
| **Single choice** | Radio buttons or drop-down list | Evaluating condition grades or pass/fail states | Sanitary seal integrity rated as Pass or Fail |
| **Domain choice** | Binds to an ALN Domain picklist | Standardizing observation values across the enterprise | Lubricant condition rated as Clear, Cloudy, or Dark |
| **Meter reading** | Direct numeric input that updates asset meters | Updating runtime hours or pressure levels during rounds | Recording discharge pressure on the cold storage compressor |
| **Numeric entry** | Standalone numeric entry with unit of measure | Tracking operating metrics without updating asset meters | Recording ambient warehouse temperature |
| **File or photo upload** | Camera capture or file attachment | Documenting physical damage or equipment wear | Attaching a photo of a scored drive shaft on Filler FL-02 |
| **Digital signature** | Touchscreen signature capture | Verifying supervisory review or regulatory sign-off | Sanitation supervisor sign-off after clean-in-place flush |

## Step 1: Create a form template in Inspection Forms

Inspection forms are created and revised in the Inspection Forms application.

### Designing a form template

1. Go to **Planning > Inspection Forms**.
2. Click **Create Form**.
3. In the **Form Title** field, enter a clear descriptive name, such as `Filler FL-02 Daily Sanitation & Mechanical Inspection`.
4. In the **Form Type** field, select the operational purpose: `Inspection`, `Condition Assessment`, `Audit`, `Investigation`, or `Round`.
5. In the **Instructions** section, add clear guidance notes, such as safety lockout procedures or required personal protective equipment.
6. Click **Add Question** to build your checklist:
   - In the question text field, enter `Check mechanical seal for product leakage`.
   - In the **Response Type** drop-down, select `Single choice`.
   - Add options: `Pass` and `Fail`.
   - Check **Required** to prevent technicians from completing the form without answering.
7. Click **Add Question** for equipment meter readings:
   - In the question text field, enter `Record compressor discharge pressure`.
   - In the **Response Type** drop-down, select `Meter reading`.
   - Select the target meter, such as `DISCH_PSI`.
8. Click **Save Draft**.

### 💡 Tip: Use conditional logic for failed steps
Configure conditional questions so that when a technician marks an item as `Fail`, the form dynamically reveals follow-up fields requiring a mandatory photo upload and an explanatory note. This guarantees complete failure documentation.

## Step 2: Configure conditional response logic

Conditional rules keep inspection checklists compact while capturing detailed evidence when problems occur.

### Adding a conditional action

1. In the form editor, locate the pass/fail question.
2. Click the **Add Condition** icon next to the `Fail` answer option.
3. Select **Show Follow-up Question**.
4. In the new sub-question field, enter `Take a photo of the defect and describe observed damage`.
5. Set the response type to `File upload`.
6. Click **Save Draft**.

## Step 3: Activate the form template

Inspection forms start in `DRAFT` status and must be activated before they can be assigned to work orders or preventive maintenance schedules.

### Changing form status to Active

1. In the **Inspection Forms** editor, review your questions and instructions.
2. In the upper action bar, click **Activate**.
3. The form status changes to `ACTIVE` and becomes available across all maintenance applications.

When updates are needed later, open the active form and click **Create Revision**. The existing version remains active for in-progress work until the new revision is completed and activated.

## Step 4: Link inspection forms to maintenance workflows

Once active, attach inspection forms to automate field checklists:

- **Link to a PM schedule:** In the **PM** application, select the active form in the **Inspection Form** field. Every generated work order automatically includes the digital checklist.
- **Link to Route stops:** In the **Routes** application, attach specific inspection forms to individual route stops to guide technicians through multi-room plant rounds.
- **Link to Work Orders:** In the **Work Orders** application, add an inspection form directly to the work order header or to a specific child task.

## Inspection form verification checklist

Use this checklist to confirm your inspection forms are configured for reliable field execution.

### Table 2: Inspection form setup checklist

| Check | Item | What to verify |
|---|---|---|
| [ ] | Clear title and instructions | Form specifies safety precautions and required tools in the header |
| [ ] | Mandatory flags configured | Critical regulatory and safety questions are marked as required |
| [ ] | Meter bindings verified | Meter reading questions connect to valid continuous or gauge meters |
| [ ] | Conditional logic tested | Marking failure options reveals required photo and description prompts |
| [ ] | Status set to Active | Form is promoted from Draft to Active status for work order selection |
| [ ] | PM or Route associations | Recurring maintenance schedules have the approved form template attached |

## Related topics

- [How inspections work](../../start-fast/basics/how-inspections-work.md)
- [How do I plan recurring maintenance?](../plan-work/plan-recurring-maintenance.md)
- [How do I set up meters and meter groups?](set-up-meters.md)
- [How do I standardize across teams?](../../work-smarter/scale-operation/standardize-across-teams.md)
