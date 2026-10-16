---
search:
  boost: 2
  keywords: glossary terminology definitions object structure domain escalation communication template crew inventory basemap plan work log communications log material request reservation issue role person default application authorized users start workflow API calls upgrade
---

# Why do some terms differ from what I'm used to?

Maximo Application Suite Select uses a consistent set of terms to describe assets, locations, work, and inventory. These might differ from the terms you use today or in other systems.

If you're not sure what a term means, click any <abbr title="Definitions for underlined terms are shown like this.">underlined</abbr> term in this help center to see its definition and related terms.

This list brings those definitions and common alternatives together in one place.

---

## Assets and equipment

### Asset
Any piece of equipment, machinery, or infrastructure that your organization maintains.
*You might know this as:* equipment, machine, or unit

**Want to know more?** [What is an asset?](what-is-asset.md) · [How do I classify assets?](../../get-work-done/manage-assets/classify-assets.md) · [How do I track asset history?](../../get-work-done/manage-assets/track-asset-history.md)

---

## Work and maintenance

### Work order
A request or instruction to perform maintenance work. It records what needs to be done, where, who did it, what parts were used, and how long it took. This record stays with the asset as part of its maintenance history.
*You might know this as:* maintenance order, job, ticket, or work request

**Want to know more?** [What is a work order?](what-is-work-order.md) · [How do I complete a work order?](../../get-work-done/complete-work/complete-job.md)

### Plan tab
The Plan section of a work order is where you record what is expected before work starts: the tasks to perform, materials to request, and labor needed. When actual work happens, those details are recorded separately in the Actuals section. Comparing plan to actuals lets you see whether jobs came in on time and on budget.
*You might know this as:* planned work, work plan, or expected materials

### Work log
A record of notes and updates added directly inside a work order. Use the work log to describe what you found, what you did, and anything else the next person needs to know. Entries are time-stamped and show who wrote them.
*You might know this as:* job notes, maintenance notes, or technician notes

### Communications log
A record of emails, notifications, and messages sent or received in connection with a work order. The communications log captures the conversation around the work, such as approval requests, status updates, and alerts. It is separate from the work log, which is for internal notes.
*You might know this as:* message history, notification log, or email log

### Preventive maintenance
Scheduled routine maintenance performed to prevent equipment failures.
*You might know this as:* maintenance plan, planned maintenance, or PM

**Want to know more?** [How do I plan recurring maintenance?](../../get-work-done/plan-work/plan-recurring-maintenance.md)

### Corrective maintenance
Maintenance performed to fix equipment that has broken down.
*You might know this as:* breakdown maintenance, repair work, or reactive maintenance

**Want to know more?** [How do I decide what work should be done?](../../get-work-done/plan-work/decide-what-work.md) · [What happens when an asset fails?](../../get-work-done/manage-assets/asset-fails.md)

### Job plan
A template that defines standard tasks, materials, and labor for recurring maintenance work.
*You might know this as:* standard job, task template, or maintenance procedure

**Want to know more?** [How do I plan recurring maintenance?](../../get-work-done/plan-work/plan-recurring-maintenance.md)

### Status
The lifecycle state of a work order or record.
*You might know this as:* lifecycle state, order state, or workflow stage

**Want to know more?** [How do I complete a work order?](../../get-work-done/complete-work/complete-job.md)

---

## Locations and sites

### Location
A functional location or operating area where assets are installed or work is performed.
*You might know this as:* functional location, area, or site area

**Want to know more?** [What is a location?](what-is-location.md)

### Site
A data partitioning concept that represents a plant, facility, or business unit.
*You might know this as:* plant, facility, or business unit

**Want to know more?** [What are the basic concepts?](what-are-basic-concepts.md)

---

## People, roles, and access

### Person and role
A person record holds an individual's contact details and is used across the system to identify who owns, supervises, or reports on work. A role, also called a security group, determines what applications and actions that person can access. When you add a user, you assign them to a security group. The security group defines the role. The person record and the user account are separate, though they are linked.
*You might know this as:* user type, access level, or permission group

**Want to know more?** [How do I add users?](../../get-work-done/setup-control/add-users.md) · [How do I assign the correct people?](../../get-work-done/organize-people/assign-right-people.md)

### Security group
A collection of users who share the same access. Security group permissions determine which applications, actions, and data they can access.
*You might know this as:* permission group, access group, user group, or role

**Want to know more?** [How do I add users?](../../get-work-done/setup-control/add-users.md)

### Authorized users
The number of authorized users defines how many people are entitled to access the product under your subscription. When you add a new user account, it counts against this limit. If you reach the limit, you cannot add more users until entitlement is increased. Contact your IBM account representative to adjust your authorized user count.
*You might know this as:* licensed users, named users, or seat count

## People and skills

### Labor
Work time and effort assigned to a work order.
*You might know this as:* technician time, work hours, or crew time

**Want to know more?** [How do I set up labor, crafts, and crews?](../../get-work-done/setup-control/set-up-labor-crafts-crews.md)

### Craft
A trade or skill type required for maintenance work.
*You might know this as:* trade, skill type, or discipline

**Want to know more?** [How do I set up labor, crafts, and crews?](../../get-work-done/setup-control/set-up-labor-crafts-crews.md) · [How do I assign the correct people?](../../get-work-done/organize-people/assign-right-people.md)

---

## Inventory and materials

### Inventory
Materials and spare parts stored for maintenance work.
*You might know this as:* stock, stores, or warehouse

**Want to know more?** [How do I track stock levels?](../../get-work-done/manage-inventory/track-stock-levels.md) · [How do I issue parts to a job?](../../get-work-done/manage-inventory/issue-parts.md)

### Item and material
An item is the master record for a part or material in the catalog, such as a filter or a seal. Material is the same thing in the context of a work order: materials are items requested or used for a specific job. The word changes depending on where you are in the system, but they refer to the same physical thing.
*You might know this as:* spare part, stock item, or consumable

**Want to know more?** [How do I track stock levels?](../../get-work-done/manage-inventory/track-stock-levels.md) · [How do I issue parts to a job?](../../get-work-done/manage-inventory/issue-parts.md)

### Material request, reservation, and issue
These three terms describe the sequence of getting parts to a job:

1. **Material request**: You identify the parts needed for a job and add them to the work order plan. This is a signal of intent, not a commitment.
2. **Reservation**: When the work order is approved, the system can reserve the requested items in the storeroom. A reservation holds the stock so it is not allocated to another job before yours.
3. **Issue**: When you physically take the parts and use them, you issue them against the work order. This deducts the quantity from inventory and records the cost.

*You might know this as:* pick list, parts request, stock allocation, or materials withdrawal

### Rotating item
A repairable spare part that can be tracked individually by serial number.
*You might know this as:* repairable spare, rotable, or serialized spare

**Want to know more?** [How do I track stock levels?](../../get-work-done/manage-inventory/track-stock-levels.md)

---

## Tracking and monitoring

### Meter
A counter that tracks equipment usage, such as hours, cycles, or miles.
*You might know this as:* counter, runtime meter, or odometer

**Want to know more?** [How do I detect issues early?](../../get-work-done/monitor-respond/detect-issues-early.md)

### Failure code
A standardized code used to categorize and track equipment failures.
*You might know this as:* failure classification, breakdown code, or fault code

**Want to know more?** [What happens when an asset fails?](../../get-work-done/manage-assets/asset-fails.md)

### Downtime
The period when equipment is not operational or available for use.
*You might know this as:* outage, production loss, or equipment unavailable

**Want to know more?** [How do I reduce downtime?](../../improve-results/improve-work/reduce-downtime.md) · [How do I detect issues early?](../../get-work-done/monitor-respond/detect-issues-early.md)

---

## Service requests

### Ticket
A service request or incident report.
*You might know this as:* service request, incident, or request

**Want to know more?** [What are the basic concepts?](what-are-basic-concepts.md)

---

## Configuration and data

### Object structure
Defines the records and related fields that are available for importing, exporting, or exchanging data.
*You might know this as:* data structure, import template, or record definition

**Want to know more?** [Which object structure do I use for each data type?](../../get-work-done/setup-control/object-structure-data-types.md) · [How do I get data into the system?](../../get-work-done/setup-control/get-data-into-system.md)

### Domain
A list of valid values attached to a field that controls what users can select in a dropdown.
*You might know this as:* value list, lookup list, or picklist

**Want to know more?** [How do I customize dropdown values?](../../get-work-done/organize-people/standardize-data.md)

### Communication template
A reusable email template that can be triggered automatically by a workflow or escalation, or manually from a record.
*You might know this as:* email template, notification template, or message template

**Want to know more?** [How do I automate communication?](../../get-work-done/setup-control/automate-communication.md)

### Escalation
An automated rule that monitors the system for a condition and performs an action or sends a notification when that condition is met.
*You might know this as:* alert rule, automated notification, or trigger

**Want to know more?** [How do I automate communication?](../../get-work-done/setup-control/automate-communication.md) · [How do I act on alerts?](../../get-work-done/monitor-respond/act-on-alerts.md)

---

## People and teams

### Crew
A named group of workers assembled to complete a job together, assigned as a team to a work order.
*You might know this as:* work crew, team, or work gang

**Want to know more?** [How do I set up labor, crafts, and crews?](../../get-work-done/setup-control/set-up-labor-crafts-crews.md) · [How do I assign the correct people?](../../get-work-done/organize-people/assign-right-people.md)

### Data sync
The process of transferring record, lookup, and map data between the server and a mobile device.
*You might know this as:* synchronization, offline sync, or data refresh

**Want to know more?** [How do I configure IBM Maximo Mobile for my team?](../../get-work-done/setup-control/configure-maximo-mobile.md)

---

## User interface

### Default application
The application that opens when a user logs in. Users can set their own default application in their profile preferences. Administrators can also set defaults for a security group. Choosing the correct default means users land on the most relevant application for their role without extra navigation.
*You might know this as:* home screen, landing page, or startup application

### Start Workflow
A workflow is an automated sequence of steps that routes a record through an approval or review process. "Start Workflow" is the action that begins this process for a specific record. Once started, the record follows a defined path, such as routing a work order to a supervisor for approval, and the system handles the routing automatically.
*You might know this as:* submit for approval, begin approval process, or route for review

### Share with admin
The "Share with admin" action sends a copy of information or a report to a system administrator. Administrators receive the information and can act on it, such as reviewing a configuration issue or adjusting access. The exact content and outcome depends on where in the system you use the action.
*You might know this as:* send to admin, notify administrator, or escalate to admin

### API calls
An API call is a request your system makes to Maximo Application Suite Select to exchange data automatically. For example, sending a new work order from an external system counts as one API call. Subscription plans include a defined number of API calls per period. If you integrate other systems with Maximo Application Suite Select, each data exchange uses some of this allowance.
*You might know this as:* system integrations, data requests, or integration transactions

### Upgrade
In Maximo Application Suite Select, Upgrade refers to moving to a higher subscription tier or adding capacity to your account. This gives you access to additional features, more users, or higher usage limits.
*You might know this as:* subscription upgrade, plan upgrade, or adding capacity

### Basemap
The background map layer that shows geography, streets, or satellite imagery.
*You might know this as:* background map, base layer, or map tile

**Want to know more?** [How do I set up maps?](../../get-work-done/setup-control/set-up-maps.md)

### Operational dashboard
A landing page to monitor KPIs, manage upcoming assignments, complete tasks, or access related applications.
*You might know this as:* command center, control panel, or operations console

**Want to know more?** [What metrics matter?](../../get-work-done/monitor-respond/what-metrics-matter.md)

---

## Related topics

- [What are the basic concepts?](what-are-basic-concepts.md)
- [What is an asset?](what-is-asset.md)
- [What is a work order?](what-is-work-order.md)
- [What is a location?](what-is-location.md)