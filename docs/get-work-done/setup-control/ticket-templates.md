---
search:
  boost: 2
  keywords: ticket templates service request template categories questions activities job plan active status administrator
---

# What are ticket templates?

A ticket template is a saved set of values that fills in a service request for you. Use one for requests that come up often, so people do not type the same details each time.

When you apply a ticket template to a service request, the system fills in the fields that the template defines. It can also add the activities that the work needs.

*Looking to verify a ticket template setup right away? [Skip to ticket template verification checklist ↓](#ticket-template-verification-checklist)*

Each ticket template has a class that sets the type of ticket it applies to. The three classes are service request, problem, and incident.

`[SME confirmation required: Confirm whether Select has a Tickets application.]`

## 💡 Tips for success

- Change the status of a new template to ACTIVE. Other people cannot apply a template until it is active.
- Create one template for each common request, such as a leaking pipe or a spill on the floor. A narrow template fills in more fields correctly than a general one.
- Add a job plan to a template when the same steps always follow the request. You reuse the steps instead of listing them again.
- Duplicate a template to make a similar one. The copy gets a new ID and starts in draft status.

## Quick reference

### Table 1: Ticket template terms

| Term | What it means |
|------|---------------|
| **Ticket template** | A saved set of values that fills in fields on a service request |
| **Class** | The type of record that the template can be applied to. The template class must match the class of the record |
| **Status** | Controls whether other people can apply the template. Only ACTIVE templates can be applied |
| **Site** | Optional. Limits which organizations see the template in their list |
| **Activity** | A step of work that the system creates when the template is applied |
| **Job plan** | An existing set of steps that you can add to a template instead of listing activities one by one |

## How do I find the Ticket Templates application?

Use the **Find navigation item** field at the top of the menu and search for Ticket Templates.

## What does a ticket template fill in?

When someone applies a template to a service request, the system puts the values from the template into the fields on the request. For example, with a template for a home VPN request, the system categorizes the request, sets the internal priority, and supplies other predefined values.

A template can also include:

- A classification, at the template level or for an individual activity.
- A list of activities, in a set order.
- An existing job plan, instead of or as well as activities.

`[SME confirmation required: Confirm which fields, classifications, and activities a ticket template can set in Select.]`

## How do ticket templates work with service requests?

Select includes some ticket templates. Service request categories use them. When a requester picks a category, the template for that category can ask questions that fit it, such as whether there is a leak or a spill. A category that does not need questions can ask for a general summary of the request.

`[SME confirmation required: Confirm how service request categories use ticket templates in Select, how the questions and answers are defined, and which templates are included.]`

## When can someone apply a ticket template?

Someone can apply a template to a service request when:

- The template status is ACTIVE.
- The template class matches the class of the service request.
- The template is in the list for the organization of the request. A template with a site is listed for the organizations of that site. A template with no organization is listed for all organizations.

A new or duplicated template starts in draft status. Change the status to ACTIVE before other people can use the template. A closed template can no longer have its classification changed.

### Table 2: Ticket template statuses

| Status | What it allows |
|--------|----------------|
| **DRAFT** | Use this status while you create or finalize the template. When you move the template out of draft, you cannot set it back to draft |
| **ACTIVE** | Other people can apply the template to a ticket |
| **INACTIVE** | Other people cannot apply the template. Use it when you do not want people to use the template, when you are not using it now, or when you want to keep it for your records |

Use the **Change Status** action to move a template between statuses.

## What happens when activities are added?

When you apply a template that has activities, the system creates a child activity work order for each activity. If the template has a job plan, the system creates one more child activity work order based on that job plan. A job plan must have the status ACTIVE before you can add it to a template.

### Example: A request for a new starter

Your plant needs a template for a new employee. You create a template called New Employee and add four activities in order.

### Table 3: Activities in the New Employee template

| Sequence | Description |
|----------|-------------|
| 10 | Create a security badge |
| 20 | Create IT accounts |
| 30 | Issue PC |
| 40 | Issue cell phone |

When someone applies the template to a service request, the system creates one activity for each row. If a job plan already contains these four steps, you can add that single job plan instead.

## Ticket template verification checklist

### Table 4: Ticket template verification checklist

| Check | Item | What to verify |
|-------|------|----------------|
| [ ] | Template status | The status is ACTIVE |
| [ ] | Template class | The class matches the class of the service request |
| [ ] | Site | The template appears in the list for the organization of the request |
| [ ] | Activities | The activities are in the order the work happens |
| [ ] | Job plan | Any job plan that you added has the status ACTIVE |

---

## Related topics

- [Why do some terms differ from what I'm used to?](../../start-fast/basics/why-do-terms-differ.md): Learn what a ticket is.
- [How do I configure IBM Maximo Mobile?](configure-maximo-mobile.md): Set up how service requests behave on mobile devices.
- [How do I decide what work should be done?](../plan-work/decide-what-work.md): Learn about job plans.
- [How do I add users?](add-users.md): See which security group can create service requests.
