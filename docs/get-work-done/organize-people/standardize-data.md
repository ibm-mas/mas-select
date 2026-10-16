# How do I customize dropdown values?

Domains control the values users can pick from in dropdown lists and status fields across the application. As an administrator, you can add your own labels to existing status dropdowns to match your organization's terminology.

## Quick reference

### Table 1. Domain terminology

| Term | What it means |
|------|---------------|
| **Domain** | A list of valid values attached to a field, such as the values available in a work order status dropdown |
| **Synonym domain** | A domain used for status fields. Lets you add your own labels that map to built-in system statuses |
| **Internal value** | The system status that drives business logic, such as WAPPR (Waiting for Approval) or COMP (Complete) |
| **Synonym value** | A custom label you add that maps to an internal value, such as "Needs sign-off" mapping to WAPPR |

## What you can do in IBM Maximo Application Suite Select

### Table 2. Domain customization tasks

| Task | How |
|------|-----|
| Add a custom label to a status field | Add a synonym value to an existing domain |
| Use different terminology across your organization | Set a synonym value at the organization level |
| Find which domain controls a field | Use Alt+F1 on the field, then look up the domain in Domains |

## Why add synonym values?

Synonym values let you use your organization's terminology without affecting how the system works underneath. For example, your team might call a work order status "Needs sign-off" rather than "Waiting for Approval." You can add "Needs sign-off" as a synonym that maps to the built-in WAPPR status. Users see your label. The system still processes work orders using the standard internal status.

Common uses:

- Rename work order or asset statuses to match your organization's language
- Add organization-specific labels for a status
- Localize terminology for your team

#### What you cannot change

You can add synonym values, but you cannot add new internal values. The system's business logic — what happens when a work order reaches APPR, COMP, or CLOSE — is hardwired to those internal values and cannot be modified. If you need a status that behaves differently from any existing internal value, that is not possible through domain configuration.

## How to add a synonym value

1. Go to **System Configuration > Platform Configuration > Domains**.
2. Search for the domain you want to update. For example, search for **WOSTATUS** to find the work order status domain.
3. Open the domain record.
4. In the Values table, click **Add Row** (the + button above the values list).
5. Leave the **Internal Value** field set to the existing system status you want to map to.
6. Enter your custom label in the **Value** field.
7. Add a description to explain the value.
8. If this value applies to a specific organization only, set the **Organization** field. An organization-level synonym is visible across all sites in that organization. A value with no organization set applies system-wide. Choosing the wrong scope can expose values to users who should not see them, or hide them from users who need them.
9. To make this the default value for the field, select **Default**.
10. Click **OK**.
11. Save the domain record.

## Before you add synonym values after go-live

Adding synonym values at the organization level after your system is live can cause issues with existing records. If you add synonyms with an organization specified, records that were created before the change may no longer match valid values.

If you need to add organization-scoped synonyms after go-live, add a synonym for every existing internal value at the same scope before saving.

If you are unsure about the impact, test the change in a non-production environment first, or contact IBM support.

## How to find the correct domain for a field

To identify which domain controls a specific field:

1. Place your cursor in the field.
2. Press **Alt+F1** to open field help.
3. The field name and domain name appear in the field help panel.
4. Go to **System Configuration > Platform Configuration > Domains** and search for that domain name.

---

## Continue building your skills

### Set up maps for your field teams

Visual maps let technicians and supervisors see where assets and work orders are located. Set up a map after your dropdown values are in place.

[How do I set up maps?](../setup-control/set-up-maps.md)

### Automate your notifications

Keep your team informed automatically. Set up email and push notifications so people know when work is assigned or updated.

[How do I automate communication?](../setup-control/automate-communication.md)

---

## Related topics

- [How do I set up labor, crafts, and crews?](../setup-control/set-up-labor-crafts-crews.md): craft domains and labor status values
- [How do I classify assets?](../manage-assets/classify-assets.md)
- [How do I schedule work?](../plan-work/schedule-work.md)
