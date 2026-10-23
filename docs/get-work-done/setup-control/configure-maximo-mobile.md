---
search:
  boost: 2
  keywords: mobile configuration maximo mobile data sync map service request work order technician supervisor inventory clerk administrator configure
---

# How do I configure IBM Maximo Mobile for my team?

IBM Maximo Mobile lets technicians, supervisors, and inventory clerks view and complete work, manage inventory, and update records from their mobile device. As an administrator, you configure the defaults that control how mobile devices sync data, which map app your team uses for navigation, and how service requests and work orders behave in the app.

## 💡 Tips for success

- Configure mobile settings before your team downloads and signs in to IBM Maximo Mobile. Changes to defaults apply to all users.
- Set up Map Manager before configuring mobile map settings. The map app you choose here opens the map that Map Manager provides.
- Start with the defaults and adjust after your team has used the app in the field. Most settings can be changed at any time.

## Quick reference

### Table 1. Data sync options

Each data category offers the same three options. Choose the option that balances data freshness against bandwidth and device storage for your team.

| Option | What it does |
|--------|--------------|
| **Reload all data** | Downloads the full data set each time a sync runs. Use when you need your team to have complete, current data regardless of what changed. |
| **Update recent changes** | Downloads only data that changed since the last sync. Faster and lighter on bandwidth. Suitable for most teams. |
| **Do not download data** | Skips this data category during sync. Use when the data is not needed on the device. |

`[SME confirmation required: Confirm the option labels and where you set them in Select. The Maximo Manage documentation calls the options "Complete", "Only delta", and "Do not download", and lists them under "Worklist data" and "Supporting data" in the Mobile administration app. This page uses "Record data" and "Supporting data".]`

## Before you start

- Confirm that your role has permission to update mobile configuration settings in Maximo Application Suite Select.
- Confirm that Map Manager is configured if you plan to use map navigation. See [How do I set up maps?](set-up-maps.md).
- Confirm that labor records and security groups are set up so technicians can be assigned work. See [How do I set up labor, crafts, and crews?](set-up-labor-crafts-crews.md).

`[SME confirmation required: Identify which Maximo Application Suite Select roles can update mobile configuration settings.]`

## Open the mobile configuration

`[SME confirmation required: Add the confirmed navigation path to mobile configuration in Maximo Application Suite Select. The Maximo Manage path is Administration > Mobile Configuration, but the Maximo Application Suite Select path requires validation.]`

## Choose how mobile data is synchronized

The **Default data sync settings** section controls what data mobile devices download when a user syncs the app. Configure each category separately.

### Record data

**Record data** controls how work orders and service requests are synced to the device.

Select one of the three options described in [Table 1](#table-1-data-sync-options).

### Supporting data

**Supporting data** controls how lookup data, such as asset records and location lists, is synced to the device.

Select one of the three options described in [Table 1](#table-1-data-sync-options).

### Map data

**Map data** controls whether map data is downloaded to the device.

- Select **Update recent changes** or **Reload all data** to download map data to devices.
- Select **Do not download data** to skip map data during sync.

`[SME confirmation required: Confirm the exact option labels for map data in the Maximo Application Suite Select design. The Maximo Manage equivalent is a single "Download map data" toggle rather than the three-option model.]`

## Choose the map app

The **Map settings** section controls which map application IBM Maximo Mobile opens when a user navigates to a location.

The available options are:

- **Apple Maps**
- **Google Maps**
- **Waze**

Select the map app that your team uses.

`[SME confirmation required: Confirm whether map app options are platform-specific (for example, Apple Maps on iOS only) or available on all supported platforms. Confirm whether a browser fallback option appears in the final Maximo Application Suite Select design.]`

## Configure service request behavior

The **SR mobile settings** section controls how the service request experience works in IBM Maximo Mobile.

### Enable follow similar requests

**Enable follow similar requests** allows technicians to see service requests that are similar to the one they are creating or viewing.

Turn this setting on or off depending on whether your team uses this feature.

`[SME confirmation required: Confirm the exact effect of enabling or disabling this setting, and whether "similar requests" is defined by a matching location, asset, description, or another criterion.]`

### Service address priority

**Service address priority** determines which address IBM Maximo Mobile uses when a service request has more than one address associated with it.

Select the priority value that reflects how your organization resolves address conflicts.

`[SME confirmation required: Confirm the available priority values and their order of precedence in the final Maximo Application Suite Select design.]`

### Enable show all systems

**Enable show all systems** controls whether technicians can see all systems when creating or viewing a service request.

Turn this setting on or off depending on whether your team needs access to all systems.

`[SME confirmation required: Confirm what "systems" refers to in the Maximo Application Suite Select context and the effect of enabling or disabling this setting.]`

## Configure work order behavior

Two sections control how work orders behave in IBM Maximo Mobile: **Work order status** and **Miscellaneous settings**.

### Work order status

**Work order status** controls which status values are available to technicians when they update a work order in the app.

**Complete status** sets the status value that IBM Maximo Mobile applies when a technician marks a work order as complete.

`[SME confirmation required: Confirm whether COMP is the default complete status value in the Maximo Application Suite Select design, and whether technicians see the status code or a plain-language label.]`

### Allow go to report work

**Allow go to report work** controls whether technicians see an option to navigate to the report work view from the work order.

Turn this on if your team records labor, materials, or other actuals directly against work orders in the mobile app.

`[SME confirmation required: Confirm the exact label used in the Maximo Application Suite Select interface for the report work view. Do not use "Report Works" or "Actuals" unless those terms appear in the final product interface.]`

### Date attributes

The **Miscellaneous settings** section includes settings that control which date attributes are visible in the app.

`[SME confirmation required: Confirm which date attributes are exposed in the Maximo Application Suite Select design (for example, scheduled start, scheduled finish, target start) and whether the SCHEDULE default selection is confirmed in the final design.]`

## Configure travel guidance

`[SME confirmation required: Confirm whether travel settings are exposed and supported in Maximo Application Suite Select. If confirmed, document Enable travel prompt and Travel radius. Do not describe triggers, measurement units, or geographic data requirements unless they are confirmed in the final design.]`

## What to do next

After you configure IBM Maximo Mobile, prepare your team to use it:

- [How do I automate communication?](automate-communication.md#push-notifications): Set up real-time push notifications so field technicians receive alerts on their mobile devices when work is assigned.
- [How do I complete a work order?](../complete-work/complete-job.md): Understand what technicians experience when completing work in the app.
- [How do I find my work?](../complete-work/find-work.md): See how technicians and supervisors access their work queue in IBM Maximo Mobile.

## Share with your team

Send technicians, supervisors, and inventory clerks to [How do I get IBM Maximo Mobile?](../../start-fast/first-task/get-maximo-mobile.md) for download and sign-in instructions.

---

## Continue building your skills

### Load your existing data

With your system configured, bring in your locations, assets, and inventory records.

[How do I prepare data for import?](prepare-data-for-import.md)

---

## Related topics

- [How do I set up maps?](set-up-maps.md)
- [How do I set up labor, crafts, and crews?](set-up-labor-crafts-crews.md)
- [How do I automate communication?](automate-communication.md)
- [Administrator: Add users](../../start-fast/first-task/administrator-first-task.md)
