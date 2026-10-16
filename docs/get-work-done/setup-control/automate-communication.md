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

### Table 1. Communication terminology

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

1. Go to **Administration > Communication Templates**.
2. Click **New Communication Template**.
3. Enter a unique **Template ID** and a clear description.
4. Set **Accessible From** to the context where this template will be used (e.g. **APPS** or **ALL**).
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

---

## Push notifications

Push notifications send real-time alerts to the IBM Maximo Mobile app on iOS and Android devices. Users receive a notification on their device when an event occurs, such as a work order being assigned to them, without needing to have the app open.

Setting up push notifications is a two-step process: generate an API key from the IBM push notification portal, then configure it in MAS.

### Step 1: Generate an API key

1. Open [https://pushnotification.suite.maximo.com](https://pushnotification.suite.maximo.com) in a browser.
2. Sign in with your IBMid.
3. Enter a meaningful name for the API key, for example **MAS-PROD-PushNotif**.
4. Click **Generate API Key**.
5. Copy the API key immediately. It will not be shown again once you leave the page. Store it securely.

### Step 2: Configure push notifications in MAS

1. In MAS, click the **Administration** icon and go to **Configurations**.
2. In the **Users and Identity** section, click **Push Notifications**.
3. In the **Bundle Identifier** field, enter:
   ```
   com.ibm.iot.maximo.mobile
   ```
4. In the **URL** field, enter:
   ```
   https://pushnotification.suite.maximo.com/pushnotification/sendMessage
   ```
5. In the **API Key** field, paste the key you generated in Step 1.
6. Save the configuration.

To confirm the setup is working, ask a user to log in via the IBM Maximo Mobile app and trigger a relevant event such as a workflow assignment. The notification should arrive on their device within a few seconds.

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
