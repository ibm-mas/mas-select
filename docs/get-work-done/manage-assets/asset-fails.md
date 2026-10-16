# What happens when an asset fails?

Record the failure using failure codes, create a work order to fix it, and track downtime.

## Quick reference

### Table 1. Failure code levels

| Failure code level | What it describes | Example |
|--------------------|-------------------|---------|
| **Failure class** | Type of problem | Filling and Packaging |
| **Problem** | What specifically failed | Nozzle seal leak |
| **Cause** | Why it failed | Normal wear |
| **Remedy** | How it was fixed | Replaced seal, cleaned nozzle assembly |

!!! warning "TODO: Add visual content"
     A diagram showing the failure reporting workflow would be useful here.

---

## 💡 Tips for success

**Be specific:**

- Don't just say "broken" - describe what failed
- Use correct failure codes
- Include relevant details

**Be consistent:**

- Use the same codes for similar failures
- Follow your organization's standards
- This makes trend analysis accurate

**Be timely:**

- Report failures when they happen
- Don't wait until work order is closed
- Fresh details are more accurate

**Include context:**

- Note operating conditions
- Mention recent changes
- Record environmental factors
- Add photos of damage


## Why track failures?

When equipment fails, documenting what happened and why helps you understand reliability issues and prevent future problems.

Recording failures helps you:

- Identify patterns (see if the same problem keeps happening)
- Improve maintenance (adjust schedules to prevent failures)
- Track costs (understand the true cost of equipment problems)
- Make decisions (decide when to repair versus replace)
- Analyze trends (report on reliability by equipment type)
- Prevent recurrence (learn from past failures)

Failure codes provide a standardized way to track problems. This makes it easy to spot patterns and trends.

---

## How failure codes work

Failure codes are organized in four levels:

### 1. Failure class (Problem type)

What kind of problem occurred:

- Mechanical failure
- Electrical failure
- Operational error
- External cause

### 2. Problem (Specific issue)

What specifically failed:

- Nozzle seal leak (Filler FL-02)
- Agitator not rotating (Batch Mixer MX-01)
- Compressor not reaching temperature (Spiral Freezer SF-01)
- Control malfunction

### 3. Cause (Why it failed)

Root cause of the failure:

- Normal wear
- Drive belt worn
- Refrigerant low
- Overload

### 4. Remedy (How it was fixed)

What was done to resolve the failure:

- Replaced seal, cleaned nozzle assembly
- Replaced drive belt
- Topped up refrigerant, checked for leaks
- Operator retraining

Recording the remedy completes the picture. If the same problem keeps recurring with the same cause but different remedies, the data shows which fix actually works — and which ones don't. Without remedy codes, pattern analysis stops at "what broke" and never reaches "what actually fixes it."

!!! warning "TODO: Add visual content"
     A screenshot showing the failure code hierarchy would be useful here.

---

## How do I report a failure?

!!! note
    The failure class on the work order is copied automatically from the asset record. If the asset has no failure class set, the Failure Reporting tab will be empty and you won't be able to select problem or cause codes. Contact your administrator to set the correct failure class on the asset first. See [How do I classify assets?](classify-assets.md).

### What to do:

1. Create or open a work order:
   - If no work order exists, create one
   - If working on existing work order, use that

2. Record the failure:
   - Go to the **Failure Reporting** tab
   - Confirm the failure class is correct (it should be pre-filled from the asset)
   - Choose the specific problem
   - Identify the cause
   - Select a remedy code to record how the failure was resolved

3. Add details:
   - Describe what happened
   - Note when the failure occurred
   - Record any damage or safety issues
   - Take photos if helpful

4. Track downtime:
   - Record when equipment went down
   - Note when it's back in service
   - System calculates total downtime

5. Complete the repair:
   - Fix the problem
   - Document what you did
   - Close the work order

!!! warning "TODO: Add visual content"
     A video showing how to report a failure on a work order would be useful here.

---

## How do I use failure data?

### Identify recurring problems

Review failure reports to find:

- Equipment that fails frequently
- Common failure modes
- Patterns by time of year or usage
- Whether maintenance schedules need adjustment

### Analyze failure trends

Look for:

- Increasing failure rates (equipment wearing out)
- Seasonal patterns
- Failures after specific events
- Cost trends over time

### Make informed decisions

Use failure data to:

- Justify equipment replacement
- Adjust preventive maintenance
- Improve operating procedures
- Train operators on common issues
- Budget for repairs and replacements

!!! warning "TODO: Add visual content"
     A diagram showing how to use failure data for decision-making would be useful here.

---

## Common failure scenarios

### Premature failure

Equipment fails before expected:

- Check if maintenance schedule is adequate
- Review operating conditions
- Verify proper installation
- Consider if equipment is undersized

### Repeated failures

Same problem keeps happening:

- Look for root cause, not just symptoms
- Check if repairs are done correctly
- Consider if operating conditions changed
- Evaluate if equipment is right for the application

### Sudden catastrophic failure

Equipment fails without warning:

- Review if warning signs were missed
- Check if inspections are thorough enough
- Consider adding condition monitoring
- Evaluate if maintenance frequency is adequate

---

## What if I don't know the cause?

If the cause isn't clear:

1. Use "Unknown" or "Under Investigation".
2. Add notes about what you observed.
3. Update the failure code when cause is determined.
4. Don't guess - inaccurate data is worse than incomplete data.

---

## Continue building your skills

### See the full picture

Failures tell you what broke. Asset history tells you the full story: all maintenance, costs, and patterns over time.

[How do I track asset history?](track-asset-history.md)

---

## Related topics

- [How do I track asset history?](track-asset-history.md)
- [How do I classify assets?](classify-assets.md)
- [How do I complete a job?](../complete-work/complete-job.md)
- [What are the basic concepts?](../../start-fast/basics/what-are-basic-concepts.md)

---

## Still stuck?

If this page did not answer your question:

- **Browse all Q&A:** [Get answers](../../get-answers/index.md)
- **In the product:** Click the help icon (?) in the top right
- **For a specific field:** Click the field name or press Alt+F1
