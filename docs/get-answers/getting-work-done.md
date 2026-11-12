# Getting work done

Find quick answers to common questions about planning, completing, and managing work.

## Planning work

### How do I plan recurring maintenance?

Set up preventive maintenance (PM) schedules that automatically generate work orders based on time intervals or meter readings. This ensures routine maintenance happens consistently without manual tracking.

[I want to know more about planning recurring maintenance](../get-work-done/plan-work/plan-recurring-maintenance.md)

### Why isn't my PM generating work orders?

Check that the PM is active, that the asset or location is operating, and that a floating schedule is not waiting on an open work order. A PM might also not be due yet, or you might be generating from a child PM instead of the top level PM.

[I want to know more about why a PM does not generate work orders](../get-work-done/plan-work/why-pm-not-generating-work-orders.md)

### How do I decide what work should be done?

Prioritize work based on asset criticality, safety requirements, and operational impact. Use work order status and priority codes to manage what gets done first.

[I want to know more about deciding what work to do](../get-work-done/plan-work/decide-what-work.md)

### How do I schedule work?

Assign work orders to specific dates and technicians based on availability, skills, and workload. Scheduling helps balance resources and ensures work happens when needed.

[I want to know more about scheduling work](../get-work-done/plan-work/schedule-work.md)

### What is the difference between items, service items, and tools?

Items represent physical materials or spare parts that are stored and consumed. Service items represent work or services that are delivered but not held in inventory. Tools represent reusable resources used to perform work rather than being consumed. These categories allow Maximo Application Suite Select to track usage, availability, and cost in different ways.

### How should inventory concepts such as ABC types and balances be understood?

Inventory represents the system's record of physical stock and its associated value. Balances reflect what the system believes is on hand. ABC types are used to prioritize items based on importance, usage, or value, recognizing that not all inventory needs the same level of control.

### What is a count book?

A count book defines a structured approach to validating inventory accuracy. It identifies which items should be physically counted and reconciled with system balances. Conceptually, it supports ongoing alignment between system data and real-world stock.

[I want to know more about tracking stock levels](../get-work-done/manage-inventory/track-stock-levels.md)

### What is the difference between rotating and non-rotating items?

Rotating items are interchangeable assets that are tracked individually over their lifecycle. Non-rotating items are tracked only by quantity and are consumed when used. This distinction reflects whether individual history and movement are important to manage.

[I want to know more about storeroom and inventory strategy](../get-work-done/setup-control/plan-your-storeroom-strategy.md)

## Completing work

### How do I find my work?

View assigned work orders in your work list or on the Operational dashboard. Filter by status, priority, or due date to focus on what needs attention now.

[I want to know more about finding my work](../get-work-done/complete-work/find-work.md)

### How do I complete a job?

Open the work order, perform the tasks, record time and materials used, add notes about what you did, then change the status to complete.

[I want to know more about completing a job](../get-work-done/complete-work/complete-job.md)

### What if I can't complete a task?

Document why the work can't be completed, update the work order status, and notify your supervisor. This keeps everyone informed and helps resolve blockers quickly.

[I want to know more about handling incomplete tasks](../get-work-done/complete-work/cant-complete-task.md)

### How do PMs, Master PMs, and routes relate to maintenance strategy?

Preventive maintenance (PMs) defines recurring maintenance activities. Master PMs provide a way to standardize and manage multiple related PMs. Routes organize how work is carried out across multiple assets, improving efficiency and consistency.

[I want to know more about planning recurring maintenance](../get-work-done/plan-work/plan-recurring-maintenance.md)

### What are job plans?

Job plans define the standard approach to completing a task. They capture steps, resources, and expectations. Conceptually, job plans convert individual knowledge into shared organizational knowledge.

## Managing assets

### How do I track asset history?

View all work orders, meter readings, and maintenance activities performed on an asset. This history helps you understand patterns, predict issues, and make informed maintenance decisions.

[I want to know more about tracking asset history](../get-work-done/manage-assets/track-asset-history.md)

### How do I classify assets?

Assign classification codes that define what type of asset it is and what attributes apply. Classifications ensure consistent data capture and support better reporting and analysis.

[I want to know more about classifying assets](../get-work-done/manage-assets/classify-assets.md)

### What happens when an asset fails?

Create a corrective work order, document the failure with failure codes, perform repairs, and update the asset record. This captures valuable data for reliability analysis.

[I want to know more about handling asset failures](../get-work-done/manage-assets/asset-fails.md)

### What are classifications?

Classifications are used to structure and standardize how assets, items, and related records are described. They define which attributes apply to different types of records and ensure consistent data capture across the system. Conceptually, classifications establish a shared data model and vocabulary that supports reporting, maintenance strategies, and scalability.

[How do I classify assets?](../get-work-done/manage-assets/classify-assets.md)

### What are systems in the context of locations?

Systems provide a functional grouping of locations based on how assets work together. While locations describe physical placement, systems describe operational or functional relationships. This allows organizations to manage assets from both a physical and functional perspective.

### What are meters, meter groups, and condition monitoring?

Meters capture usage or condition data from assets. Meter groups organize related measurements. Condition monitoring evaluates those measurements to identify potential issues and support maintenance decisions based on actual asset behavior.

[I want to know more about detecting issues early](../get-work-done/monitor-respond/detect-issues-early.md)

### What role do inspections play?

Inspections standardize how asset condition is assessed. They convert observations into structured, consistent data. This supports early issue detection and more reliable maintenance decisions.

[I want to know more about inspections](../start-fast/basics/how-inspections-work.md)

### What are failure codes?

Failure codes provide a structured way to describe what went wrong, why it happened, and how it was resolved. They transform maintenance history into analyzable data. This supports reliability analysis and continuous improvement.

[I want to know more about failure codes and asset failures](../get-work-done/manage-assets/asset-fails.md)

## Managing inventory

### How do I issue parts to a job?

Select the work order, add the items needed, specify quantities, and issue them from inventory. This tracks what materials were used and updates stock levels automatically.

[I want to know more about issuing parts](../get-work-done/manage-inventory/issue-parts.md)

### How do I track stock levels?

View current balances, reorder points, and usage history for each item. Set up alerts to notify you when stock runs low so you can reorder before running out.

[I want to know more about tracking stock levels](../get-work-done/manage-inventory/track-stock-levels.md)

### What happens if stock is incorrect?

Perform a physical count, compare it to system balances, and adjust the records to match reality. Document why the discrepancy occurred to prevent future issues.

[I want to know more about correcting stock](../get-work-done/manage-inventory/stock-incorrect.md)

### How do labor, crafts, crews, and calendars work together?

Labor represents individual workers. Crafts represent skills. Crews group labor for coordinated work, and calendars define availability. Together, these concepts model how work is resourced and scheduled.

[I want to know more about assigning the correct people](../get-work-done/organize-people/assign-right-people.md)

## Monitoring and responding

### How do I detect issues early?

Monitor meter readings, set up condition-based alerts, and track asset performance trends. Early detection helps you address problems before they cause failures.

[I want to know more about detecting issues early](../get-work-done/monitor-respond/detect-issues-early.md)

### What metrics matter?

Track work order completion rates, mean time between failures, maintenance costs, and asset availability. These metrics show how well your maintenance program is performing.

[I want to know more about metrics](../get-work-done/monitor-respond/what-metrics-matter.md)

### How do I act on alerts?

Review the alert details, assess the severity, create a work order if needed, and assign it to the appropriate technician. Quick response prevents small issues from becoming big problems.

[I want to know more about acting on alerts](../get-work-done/monitor-respond/act-on-alerts.md)

## Organizing people and work

### How do I assign the correct people?

Match work orders to technicians based on their craft skills, availability, and current workload. This ensures work gets done efficiently by qualified people.

[I want to know more about assigning the correct people](../get-work-done/organize-people/assign-right-people.md)

### How do I standardize data?

Use consistent naming conventions, classification codes, and data entry practices across your organization. Standardization makes data reliable and supports better reporting.

[I want to know more about standardizing data](../get-work-done/organize-people/standardize-data.md)

## Setting up and controlling

### How do I get data into the system?

Import data using templates, integrate with other systems, or enter it manually. Clean, accurate data from the start saves time and prevents problems later.

[I want to know more about getting data into the system](../get-work-done/setup-control/get-data-into-system.md)

### How do I automate communication?

Set up email notifications for work order assignments, status changes, and alerts. Automation keeps everyone informed without manual effort.

[I want to know more about automating communication](../get-work-done/setup-control/automate-communication.md)

### How do I add users?

Before people can work in Maximo Application Suite Select, they need a user account with the correct security group assigned.

[I want to know more about adding users](../get-work-done/setup-control/add-users.md)

### How do I set up labor, crafts, and crews?

Crafts define the skills in your organization. Labor records represent the people. Crews group people together so you can assign a whole team to a job in one step.

[I want to know more about setting up labor, crafts, and crews](../get-work-done/setup-control/set-up-labor-crafts-crews.md)

### How do I decide whether something is a location, an asset, or a spare part?

Every physical entity in your plant or facility must be classified as one of three primary record types: a location, an asset, or a spare part. Making the right classification before importing data ensures accurate maintenance history.

[I want to know more about deciding between a location, an asset, and a spare part](../get-work-done/setup-control/decide-location-asset-spare-part.md)

### How do I plan my location and asset hierarchies?

A location hierarchy is the physical map of your facility. An asset hierarchy is the equipment breakdown structure that operates within those locations. Plan locations first, then assets.

[How do I plan my location hierarchy?](../get-work-done/setup-control/plan-your-location-hierarchy.md)

[How do I plan my asset hierarchy?](../get-work-done/setup-control/plan-your-asset-hierarchy.md)

### What is the correct load order for my data?

Import order matters. Referenced records must exist before records that use them, and parent records must exist before child records.

[I want to know more about load order](../get-work-done/setup-control/correct-load-order.md)

### How do I prepare data for import?

Proper data preparation prevents import failures and ensures data quality.

[I want to know more about preparing data for import](../get-work-done/setup-control/prepare-data-for-import.md)

### How do I fix import errors?

Import errors can occur with locations or assets. A troubleshooting guide helps you fix common import problems.

[I want to know more about fixing import errors](../get-work-done/setup-control/why-does-asset-import-fail.md)

### Which object structure do I use for each data type?

An object structure defines what you are loading, much like a spreadsheet template defines the columns available for a type of data. You pick the one that matches the data you are loading.

[I want to know more about object structures](../get-work-done/setup-control/object-structure-data-types.md)

### How do I set up meters, failure codes, and inspection forms?

Meter readings can drive preventive maintenance schedules and trigger corrective work orders. Failure codes convert technician remarks into standardized reliability data. Digital inspection forms replace paper clipboards with structured checklists on mobile devices.

[How do I set up meters and meter groups?](../get-work-done/setup-control/set-up-meters.md)

[How do I set up failure codes?](../get-work-done/setup-control/set-up-failure-codes.md)

[How do I create inspection forms?](../get-work-done/setup-control/create-inspection-forms.md)

### How do I plan my preventive maintenance and storeroom strategies?

A preventive maintenance strategy prevents equipment breakdowns, stabilizes labor schedules, and ensures replacement parts are staged before work begins. A storeroom strategy ensures critical spare parts are on hand and prevents stockouts.

[How do I plan my preventive maintenance strategy?](../get-work-done/setup-control/plan-your-pm-strategy.md)

[How do I plan my storeroom and inventory strategy?](../get-work-done/setup-control/plan-your-storeroom-strategy.md)

### How do I set up maps?

Map Manager lets you configure a map so that users can see the location of assets, work orders, and service addresses on a visual map inside the application.

[I want to know more about setting up maps](../get-work-done/setup-control/set-up-maps.md)

### How do I configure IBM Maximo Mobile for my team?

As an administrator, you configure the defaults that control how mobile devices sync data, which map app your team uses for navigation, and how service requests and work orders are created.

[I want to know more about configuring IBM Maximo Mobile](../get-work-done/setup-control/configure-maximo-mobile.md)

## Common troubleshooting

- [Why can't I complete a work order?](../get-work-done/complete-work/why-cant-complete-work-order.md)
- [Why is inventory showing negative stock?](../get-work-done/manage-inventory/stock-incorrect.md)
- [Why can't I issue materials to a work order?](../get-work-done/manage-inventory/why-cant-issue-materials.md)
- [Why don't technicians see their assigned work?](../get-work-done/organize-people/why-cant-see-assigned-work.md)
- [Why can't I see new work in IBM Maximo Mobile?](../get-work-done/complete-work/why-cant-see-new-work-on-phone.md)
- [Why does my data look wrong?](../improve-results/improve-data/data-looks-wrong.md)
- [Why aren't technicians using the system?](../improve-results/improve-adoption/technicians-not-using.md)

## Still need help?

- **In the product**: Click the help icon (?) in the top right
- **For a specific field**: Click the field name or press Alt+F1
- **Submit feedback**: Use the feedback option in the help menu