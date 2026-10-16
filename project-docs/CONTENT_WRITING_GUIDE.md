# Content Writing Guide for Maximo Application Suite Select

## Quick Reference

### Topic Template

```markdown
# [Natural user question]

[Clear, direct answer in 1-3 paragraphs]

## When to use this
[Optional: Context about when this applies]

## What happens next
[Optional: Expected outcomes or next steps]

## Related topics
- [Link to prerequisite or related topic]
- [Link to next logical step]
- [Link to advanced topic]
```

### Linking Rules

1. **Standard Markdown Links**:
   - Always use `.md` extension in markdown syntax: `[What is an asset?](../basics/what-is-asset.md)`.
   - MkDocs will automatically convert these to `.html` in the build output.

2. **Raw HTML Blocks & Custom Spans**:
   - When writing links inside HTML tags (such as `<span class="see-also">` or `<div>`), **always use `.html`**:
     `<span class="see-also">Learn more in <a href="../basics/what-is-asset.html">What is an asset?</a></span>`
   - *Reason*: MkDocs does not convert URLs inside raw HTML tags. Using `.md` inside `<a href="...">` causes 404 errors on the live site.

3. **Validation**:
   - Run `python3 scripts/link_checker.py` before committing to verify all internal and HTML links.

## Writing Examples

### Example 1: Basic Concept

```markdown
# What is an asset?

An asset is any piece of equipment, machinery, or facility you need to maintain. In Maximo Application Suite Select, each asset has its own record where you track maintenance history, schedule preventive work, and monitor performance.

Common examples include pumps, motors, HVAC systems, production lines, forklifts, and building systems.

## When to use this

Create an asset record when you need to:
- Track maintenance history for specific equipment
- Schedule regular preventive maintenance
- Monitor performance with meter readings
- Assign work orders to specific equipment
- Track maintenance costs by asset

## What happens next

Once you create an asset:
- You can add it to a location for better organization
- Create work orders specifically for that asset
- Set up preventive maintenance schedules
- Track meter readings (like hours run or cycles)
- View complete maintenance history

## Related topics
- [How do I create an asset?](../manage-assets/create-asset.md)
- [What is a location?](what-is-location.md)
- [How do I set up preventive maintenance?](../plan-work/plan-recurring-maintenance.md)
```

### Example 2: Task-Oriented

```markdown
# How do I complete a work order?

Open your assigned work order, do the work, record what you did, and mark it complete. The system tracks your time and any parts you use.

## Steps

1. **Find your work order**
   - Go to Work Orders or use the mobile app
   - Look for work orders assigned to you with status "In Progress" or "Approved"

2. **Start the work**
   - Open the work order
   - Click **Start Work** to begin tracking time
   - Review the job plan or instructions if included

3. **Do the work**
   - Follow the steps in the job plan
   - Complete any inspection tasks or checklists
   - Take photos if needed (especially for issues found)

4. **Record what you did**
   - Add notes about what you found and what you fixed
   - Record any parts you used
   - Note actual time spent

5. **Mark it complete**
   - Click **Complete Work**
   - The system stops tracking time
   - Your supervisor can now review and close the work order

## What if I can't complete the work?

If you can't finish:
- Add notes explaining why
- Change status to "On Hold" or "Waiting"
- Notify your supervisor
- The work order stays open until resolved

## Related topics
- [How do I find my work?](find-work.md)
- [What if I can't complete a task?](cant-complete-task.md)
- [How do I record time?](record-time.md)
```

### Example 3: Troubleshooting

```markdown
# Why can't I complete a work order?

You might not be able to complete a work order because of missing information, required fields, or permission settings. Check what's blocking you and fix it or ask your supervisor for help.

## Common reasons

### Missing required information
**Problem**: Required fields are empty
**Solution**: Fill in all fields marked with a red asterisk (*) before completing

### Parts not available
**Problem**: You need parts that aren't in stock
**Solution**: 
- Request the parts through the work order
- Change status to "Waiting on Parts"
- Notify your supervisor

### Inspection tasks not done
**Problem**: Checklist items aren't marked complete
**Solution**: Complete all inspection tasks or mark them as N/A if they don't apply

### Permission issues
**Problem**: You don't have permission to complete work orders
**Solution**: Contact your supervisor or administrator to check your security settings

### Work order is wrong status
**Problem**: Work order must be "In Progress" to complete
**Solution**: 
- If it's "Approved", start it first
- If it's another status, ask your supervisor

## What to do

1. Check the error message - it usually tells you what's missing
2. Fill in required information
3. If you're stuck, add notes and notify your supervisor
4. Change status to "On Hold" if you need to wait

## Related topics
- [How do I complete a work order?](complete-job.md)
- [How do I request parts?](../manage-inventory/request-parts.md)
- [Who do I contact for help?](../../start-fast/what-can-i-do/overview.md#what-if-i-run-into-issues)
```

## Writing Guidelines

### Voice and Tone

✅ **DO:**
- Use "you" and "your" (second person)
- Use active voice ("Click Save" not "Save should be clicked")
- Be direct and conversational
- Use simple, everyday words

❌ **DON'T:**
- Use "the user" or third person
- Use passive voice
- Be overly formal or technical
- Use jargon without explanation

### Structure

✅ **DO:**
- Start with the answer, not background
- Use short paragraphs (2-4 sentences)
- Use bullet lists for options or steps
- Use numbered lists for sequences
- Add headings to break up long content

❌ **DON'T:**
- Bury the answer in background information
- Write long, dense paragraphs
- Mix different types of information without headings

### Examples and Context

✅ **DO:**
- Give concrete examples
- Explain why something matters
- Show what happens next
- Link to related topics

❌ **DON'T:**
- Assume users know the context
- Leave users wondering "what now?"
- Create dead-end topics with no links

## Content Transformation Checklist

When adapting from Maximo Manage documentation:

- [ ] Remove installation/configuration steps
- [ ] Remove customization options
- [ ] Simplify complex workflows
- [ ] Replace technical terms with plain language
- [ ] Add "why this matters" context
- [ ] Add "what happens next" outcomes
- [ ] Add links to related topics
- [ ] Test that topic stands alone

## Quality Checklist

Before marking a topic complete:

- [ ] Title is a natural user question
- [ ] Answer is clear in first paragraph
- [ ] Content is scannable (headings, lists, short paragraphs)
- [ ] Examples are concrete and relevant
- [ ] Links to 3-5 related topics included
- [ ] No installation/configuration content
- [ ] No unexplained jargon
- [ ] Tested that topic makes sense alone
- [ ] Follows IBM Style Guide
- [ ] Definition tooltips added for first use of technical terms per section (for pages with jump links)

## Definition Tooltips

### What are definition tooltips?

Definition tooltips provide hover-over definitions for technical terms. They're defined in `docs/.snippets` and automatically appear when users hover over the term.

### When to use tooltips

**Standard rule**: Add tooltip on first use of a technical term per page.

**Exception for pages with jump links**: If a page has a mini-index or quick navigation that allows users to jump to different sections, add the tooltip on the first use within each major section. This ensures users who jump directly to a section still see the definition.

### How to add a tooltip

1. **Add definition to `.snippets` file** (if not already there):
   ```
   *[term]: Definition text.<br><br><strong>You might know this as:</strong> alternative terms
   ```

2. **Use the term in your content**: Just write the term normally. The tooltip will appear automatically on hover.

### Example: Pages with jump links

For a page like "How do I fix import errors?" with sections for Location, Asset, and User imports:

```markdown
## Location import errors
Location hierarchies require specific object structure in the import file.
[First use in Location section - tooltip appears]

## Asset import errors
The import file must match the expected object structure exactly.
[First use in Asset section - tooltip appears]

## User import errors
File doesn't match the expected USER object structure.
[First use in User section - tooltip appears]
```

### Available tooltips

See `docs/.snippets` for the complete list of available tooltips including:
- asset/assets
- work order/work orders
- location/locations
- object structure/object structures
- And many more...

## Common Patterns

### "What is..." topics
Focus on: Definition, examples, when to use, what you can do with it

### "How do I..." topics
Focus on: Quick answer, steps, what happens, troubleshooting

### "Why..." topics
Focus on: Common causes, solutions, prevention, who to contact

### "What if..." topics
Focus on: Problem description, solutions, workarounds, escalation

## Resources

- **PRFAQ**: Product context and user goals
- **IA Document**: Structure and topic list
- **Manage Docs**: https://www.ibm.com/docs/en/masv-and-l/maximo-manage/cd
- **IBM Style Guide**: https://www.ibm.com/brand/experience-guides/developer/writing/
- **External**: maximosecrets.com (for gaps only)

---

**Remember**: Users should be able to start with a simple question, get a clear answer quickly, and move naturally to the next level of understanding.