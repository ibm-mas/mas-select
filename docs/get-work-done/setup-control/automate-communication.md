---
search:
  boost: 2
  keywords: communication templates email notifications push notifications automate alerts work order administrator
---

# How do I automate communication?

Communication templates let you send automatic emails when things happen in the system, such as when a work order changes status or a task is assigned. Push notifications send real-time alerts to mobile devices so field technicians know about new or updated work without having to check the app.

## 💡 Tips for success

- Set the status of a communication template to **Active** before trying to use it. Inactive templates will not send.
- Do not edit the built-in system templates. Duplicate an existing template and modify the copy instead.
- Use roles as recipients rather than hardcoding individual email addresses. Roles resolve dynamically, so notifications reach the correct person even when team membership changes.
- Test your template by triggering the relevant action on a test record before rolling it out.

## Quick reference

### Table 1: Communication terminology

| Term | What it means |
|------|---------------|
| **Communication template** | A reusable email template that can be triggered automatically or manually from a record |
| **Accessible from** | Controls where the template can be used: Applications or All |
| **Role** | A dynamic recipient definition that resolves to a person or group at the time the email is sent |
| **Substitution variable** | A placeholder in the template body that pulls live data from the record, such as the work order number |
| **Push notification** | A real-time alert sent to the IBM Maximo Mobile app on a user's mobile device |

---

## Communication templates

Communication templates automate outbound email for work order assignments, status changes, approvals, and other events. You create a template once, then attach it to an escalation, a workflow, or trigger it manually from a record.

### How to create a communication template

1. In the **Find navigation item** field, search for Communication Templates and open it.
2. Click **New Communication Template**.
3. Enter a unique **Template ID** and a clear description.
4. Set **Accessible From** to the context where this template will be used, such as **APPS** or **ALL**.
5. Enter a **Send From** email address. This is the address recipients will see as the sender.
6. Enter a **Subject** line. Use substitution variables to include record data, for example:
   ```
   Work order :wonum has been assigned to you
   ```
7. Enter the message body. You can use substitution variables here too, for example `:description` to include the work order description.
8. Go to the **Recipients** tab.
9. Add recipients using one or more of the following:
   - **Roles**: recommended. The role resolves to the correct person at send time.
   - **Person groups**: sends to group members based on availability.
   - **Persons**: sends to a specific named person.
   - **Email addresses**: sends to a fixed address.
10. For each recipient, select **To**, **cc**, or **bcc**.
11. Save the template.
12. Use **Change Status** to set the template status to **Active**.

### Send an email about a KPI

When a KPI reaches its caution or alert level, you can email the people who need to act. From the KPI, use the **Create Communication** action and choose a communication template to fill in the subject and message. The email is recorded in the KPI's log.

`[SME confirmation required: Confirm that the Create Communication action is available for KPIs in Select, and whether an administrator can set up these emails to send automatically when a KPI reaches a threshold.]`

---

## Push notifications

Push notifications send real-time alerts to the IBM Maximo Mobile app on iOS and Android devices. Users receive a notification on their device when an event occurs, such as a work order being assigned to them, without needing to have the app open.

You set up push notifications in the **Mobile Configuration** application. The **Push Notification settings** section has an API key and a token life setting.

### Generate an API key

1. Open the **Mobile Configuration** application and select **Mobile properties**.
2. Under **Common app settings**, select **Push Notification settings**.
3. Next to **API Key**, select **Generate API Key**. This opens the push notification service and generates a key. The key lets Maximo connect securely to the service.
4. Save your changes. The API key cannot be retrieved after it is saved, so store a copy securely.

`[SME confirmation required: Confirm what the user does in the push notification service after selecting Generate API Key, and how the generated key gets into the API Key field. Confirm how to save the page.]`

### Set how long a token stays active

**Token life extension** is the number of days that a push notification token stays active after the user's last sign in on a mobile device. The field shows 10 days.

`[SME confirmation required: Confirm the full help text for Token life extension, which is cut off on the screen, and whether 10 days is the default.]`

`[SME confirmation required: Review the push notification topics together. Confirm how the Push Notification settings in Mobile Configuration relate to the Push Notifications Administration application, which chooses the events that send notifications, and confirm the order in which an administrator uses them.]`

To confirm the setup is working, ask a user to sign in to IBM Maximo Mobile and trigger a relevant event such as a work order assignment. The notification should arrive on their device within a few seconds.

### When users receive push notifications

A user receives push notifications only when all of the following are true:

- The user has an active session in IBM Maximo Mobile.
- The user has not signed out of the app.
- The app has not been reset.

If a user's session expires, notifications stop until the user signs in again. The network on the device must also allow connections to the Apple and Google push notification services.

---

## Continue building your skills

### Configure Maximo Mobile for field teams

Let technicians, supervisors, and inventory clerks use a mobile app to access their work from anywhere.

[How do I configure IBM Maximo Mobile for my team?](configure-maximo-mobile.md)

### Load your existing data

Now that your configuration is in place, bring in your locations, assets, and inventory from existing records.

[How do I prepare data for import?](prepare-data-for-import.md)

---

## Related topics

- [How do I set up labor, crafts, and crews?](set-up-labor-crafts-crews.md)
- [How do I set up maps?](set-up-maps.md)
- [How do I configure IBM Maximo Mobile for my team?](configure-maximo-mobile.md)
- [Administrator: Add users](../../start-fast/first-task/administrator-first-task.md)
