---
search:
  boost: 2
  keywords: role-based apps technician inspections inspection forms asset manager service requests work order summary issues and transfers inventory counting mobile offline browser hybrid which app work orders
---

# Why can I manage work orders in more than one place?

You can work with work orders in three places:

- The Work Orders application, from **Work Orders > Work Orders**.
- The Technician app on the desktop, from **Work Orders > Technician**.
- The Technician app in IBM Maximo Mobile.

All three work with the same work orders.

This happens because Maximo Application Suite Select includes two kinds of apps:

- **Desktop applications**, such as Work Orders, Assets, and Inventory. These are the full applications that match the rest of the interface.
- **Role-based apps**, such as Technician, Inspections, and Asset Manager. Each is built around the work that a role does every day, and each has a more modern layout.

Apps such as Technician and Inspections are designed for IBM Maximo Mobile, where you can also work offline. IBM Maximo Mobile contains all of them. They also appear in the desktop menu with the same names, so the experience is the same on your computer and on your phone or tablet.

The two kinds of apps do not match one for one. For example, Technician combines parts of several desktop applications into one app for completing work.

## Which one should I use?

There is no fixed rule. Use the one that suits how you work:

- If you use IBM Maximo Mobile often, use apps such as Technician on the desktop too. You keep the same experience in both places.
- If you rarely use IBM Maximo Mobile, you might prefer desktop applications such as Work Orders. They are more consistent with the rest of the interface.

Most of the menu is desktop applications. Only a smaller set of apps, such as Technician and Inspections, is also in IBM Maximo Mobile.

## Quick reference

### Table 1. Apps in the desktop menu and IBM Maximo Mobile

| App | Find it in the menu | Use it to |
|-----|---------------------|-----------|
| **Technician** | **Work Orders > Technician** | Complete assigned work. |
| **Inspections** | **Work Orders > Inspections** | Complete inspections. |
| **Inspection Forms** | **Planning > Inspection Forms** | Work with inspection forms. |
| **Asset Manager** | **Assets > Asset Manager** | Look up and manage assets. |
| **Issues and Transfers** | **Inventory > Issues and Transfers** | Issue and transfer inventory. |
| **Inventory Counting** | **Inventory > Inventory Counting** | Count inventory. |
| **Service Requests** | Go to Service Requests | Create and track service requests. |
| **Work Order Summary** | Go to Work Order Summary | Review a summary of work orders. |

You can also use the search box at the top of the menu to find any app by name.

`[TO DO: Add the menu locations of Service Requests and Work Order Summary.]`

`[SME confirmation required: Confirm the purpose of each app in the "Use it to" column.]`

## Which apps can I see?

The apps you see depend on the security group that your administrator assigned to you. For the security groups, see [How do I add users?](../../get-work-done/setup-control/add-users.md)

### Table 2. Apps in the desktop menu and IBM Maximo Mobile, by security group

| Security group | Apps |
|----------------|------|
| **System admin** | Service Requests |
| **Supervisor** | Technician, Inspections, Inspection Forms, Work Order Summary, Service Requests, Asset Manager |
| **Technician** | Technician, Inspections, Service Requests, Asset Manager |
| **Requester** | Service Requests |
| **Inventory clerk** | Issues and Transfers, Inventory Counting, Service Requests |

`[SME confirmation required: Confirm this table against the security group descriptions in "How do I add users?". The security group descriptions are the source of truth. Technicians were given Inspections because they complete inspections. Confirm the other rows, including Service Requests for system admins and inventory clerks, and Inspection Forms for supervisors.]`

!!! note
    Technician is both a security group and an app. The Technician security group is a role that you assign to a user. The Technician app is one of the apps that role can use.

## What to do next

- [Technician: Complete your first work order](../first-task/technician-first-task.md): Complete a work order.
- [How do I get IBM Maximo Mobile?](../first-task/get-maximo-mobile.md): Get the app that contains Technician, Inspections, and the other apps in Table 1.
- [How do I add users?](../../get-work-done/setup-control/add-users.md): Assign the security group that gives a user access to apps.

---

## Related topics

- [What are the basic concepts?](what-are-basic-concepts.md)
- [What is a work order?](what-is-work-order.md)
- [What can I do in my role?](../what-can-i-do/overview.md)
