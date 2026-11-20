---
search:
  boost: 2
  keywords: mobile configuration maximo mobile mobile properties data sync worklist supporting map preloaded database push notification service request technician timer quick work order administrator configure
---

# How do I configure IBM Maximo Mobile for my team?

IBM Maximo Mobile lets technicians, supervisors, and inventory clerks view and complete work, manage inventory, and update records from their mobile device. In the **Mobile Configuration** application, you set the defaults that control how mobile devices sync data, which map app your team uses for navigation, how push notifications and preloaded databases work, and how the Service Request and Technician apps behave.

## 💡 Tips for success

- Configure mobile settings before your team downloads and signs in to IBM Maximo Mobile. Changes to defaults apply to all users.
- Set up Map Manager before configuring mobile map settings. The map app you choose here opens the map that Map Manager provides.
- Start with the defaults and adjust after your team has used the app in the field. Most settings can be changed at any time.
- Give each user enough data for the role, not a full copy of the server. There is no single record limit, because performance depends on server resources, data complexity, device hardware, and network conditions.
- Use a preloaded database for large lookup data, such as assets and locations. Devices receive the data when the app is set up, which removes slow syncs on later use.
- Store a copy of the push notification API key when you generate it. You cannot retrieve it after you save it.

## Quick reference

### Table 1: Data sync options

Worklist data and Supporting data offer the same three options. Choose the option that balances data freshness against bandwidth and device storage for your team. Map data is a single checkbox.

| Option | What it does |
|--------|--------------|
| **Update recent changes** | Syncs only what is new. Downloads only data that changed since the last sync. |
| **Reload all data** | Replaces everything with the latest. Downloads the full data set. |
| **Do not download** | Does not download this data by default. |

## Before you start

- Confirm that your role has permission to update mobile configuration settings.
- Confirm that Map Manager is configured if you plan to use map navigation. See [How do I set up maps?](set-up-maps.md).
- Confirm that labor records and security groups are set up so technicians can be assigned work. See [How do I set up labor, crafts, and crews?](set-up-labor-crafts-crews.md).

`[SME confirmation required: Identify which roles can open the Mobile Configuration application and update mobile properties.]`

## Open the Mobile Configuration application

Open the **Mobile Configuration** application. The page shows two cards:

- **Mobile properties**: Configure system properties that affect Maximo Mobile apps.
- **Preloaded databases**: Manage and monitor the progress of preloaded database creation.

Select **Mobile properties** to change settings. The left navigation groups the settings under **Mobile foundation**, **Common app settings**, **Service requests app**, and **Technician app**.

## Choose how mobile data is synchronized

The **Default data sync settings** section, under **Mobile foundation**, controls what data mobile devices download when a user syncs the app. Configure each category separately.

### Worklist data

**Worklist data** controls how the records in a user's worklist, such as work orders, are synced to the device.

Select one of the three options described in [Table 1](#table-1-data-sync-options).

### Supporting data

**Supporting data** controls how lookup data, such as asset records and location lists, is synced to the device.

Select one of the three options described in [Table 1](#table-1-data-sync-options).

### Map data

**Map data** controls whether map data is downloaded to the device. Select **Download map data** to download and sync map data to mobile devices. Clear the checkbox to skip map data.

## Set up preloaded databases

A preloaded database bundles supporting data so a new device does not have to download it record by record. Each database is built for a person group, so make sure each user belongs to the right group.

In the **Preloaded Database** section, under **Mobile foundation**, set:

- **Enable preloaded database**: Turns preloaded database generation on or off.
- **Generation start time**: The time that generation starts.
- **Time zone**: The time zone for the start time.

To check progress, go back to the Mobile Configuration page and select the **Preloaded databases** card. The page lists each preloaded database with details such as site, language, person group, start time, end time, and duration.

## Choose the map app

The **Map settings** section, under **Common app settings**, controls which map app IBM Maximo Mobile opens when a user navigates to a location. Choose one app for each platform:

- **Navigation for Android**
- **Navigation for iOS**
- **Navigation for Windows**

Each platform offers **Apple Maps**, **Google Maps**, and **Waze**. Select the map app that your team uses on each platform.

## Set up push notifications

The **Push Notification settings** section, under **Common app settings**, connects Maximo to the push notification service for IBM Maximo Mobile. It has two settings:

- **API Key**: Select **Generate API Key** to open the push notification service and generate a key. The key lets Maximo connect securely to the service. The key cannot be retrieved after it is saved.
- **Token life extension**: The number of days a push notification token stays active after the user's last sign in on a mobile device.

For the full setup, see [How do I automate communication?](automate-communication.md#push-notifications).

## Configure service request behavior

The **SR mobile settings** section, under **Service requests app**, controls how the service request experience works in IBM Maximo Mobile.

### Enable follow similar requests

**Enable follow similar requests** turns on the Follow Similar Requests feature on the mobile device. Turn this setting on or off depending on whether your team uses this feature.

`[SME confirmation required: Confirm what a user sees when Follow Similar Requests is on, and how similar requests are matched, for example by location, asset, or description.]`

### Service address priority

**Service address priority** controls where the service address comes from when a user creates a service request. It has three options: **ASSET**, **LOCATION**, and **NONE**. Select the source that your organization uses for service addresses.

`[SME confirmation required: Confirm what NONE does, and whether LOCATION, the option selected on the screen, is the default. The Maximo Manage documentation says the property defaults to ASSET and can be set to LOCATION or an empty value.]`

### Enable show all systems

A system is a hierarchy of locations. **Enable show all systems** controls whether users can select locations outside their primary system when they create service requests. For more about systems, see [Can I organize the same locations more than one way?](plan-your-location-hierarchy.md#can-i-organize-the-same-locations-more-than-one-way)

Turn this setting on if your team reports problems at locations outside their own primary system.

### Default priority and high priority

The **SR mobile settings** section also has two number fields. **Default priority** sets the default priority value for service requests. **High priority** sets the high priority value for service requests. The **Default priority** field shows 3.

`[SME confirmation required: Confirm the valid values for Default priority and High priority, and how the high priority value is used on a service request. The screen shows 3 for Default priority, and the High priority value is cut off.]`

## Configure Technician app settings

The **Technician app** group has three sections: **Work order status**, **Timer settings**, and **Quick work order**.

### Work order status

**Work order status** has one setting, **Complete status**. It sets the status that a work order gets when a technician taps **Complete work** in IBM Maximo Mobile. The field shows COMP.

### Timer settings

**Timer settings** controls how timers behave in the Technician app:

- **Allow multiple timers**: Lets a technician start more than one timer at the same time.
- **Use timer on Start Work**: Controls whether the timer starts automatically when a technician taps **Start Work**. The checkbox is labeled **Enable user timer**. Turn it off to change the status without starting the timer.

If you turn off **Allow multiple timers**, the limit applies only within the same list view. A technician can still start a timer from a different list view.

### Quick work order

**Quick work order** sets the values for work orders that technicians create with Quick Reporting on mobile devices:

- **Define priority for quick work order**: The priority of the work order. The default is 1.
- **Define work type for quick work order**: The work type of the work order. The default is EM.

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
