### Add a user

1. Open the Users application.
2. Click **Create user**.
3. Specify a **login email**.
4. Specify a **user ID**.
5. Optionally, add a note in the **memo**. Example: Temporary access for contractor at ice cream plant A
6. Provide a **display name**. This is the full name of the user or a recognizable preferred name.
7. Click **Select groups** and add the user to at least one security group. An email is sent to the login email address.

### Table 1. Security groups

A security group is a collection of users who share the same access. Security group permissions determine which applications, actions, and data they can access.

A role determines what a person can see and do in Maximo Application Suite Select. Assign each user to the security group that matches their role:

| Security group | What they can do |
|----------------|------------------|
| **System admin** | Manages system configuration and user access. System administrators can configure domains, communication templates, AI settings, create users, and set up security groups, but typically do not perform day-to-day operational work.<br><br>**Example tasks:** Set up notification templates, manage user roles, set up security groups, configure system settings, and maintain data structures. |
| **Supervisor** | Oversees operations and team activities. Supervisors can plan and approve work, review technician work, monitor assets and performance, and access analytics to track progress.<br><br>**Example tasks:** Assign and approve work orders, review KPIs, review inspection results, manage job plans, and monitor asset condition and maintenance schedules. |
| **Technician** | Performs maintenance and operational work. Technicians can view and update assigned work, complete inspections, record labor hours, report materials used, and record asset data such as meter readings and condition details.<br><br>**Example tasks:** Complete work orders, enter inspection results, update asset condition, record labor hours, report materials used, and report meter readings. |
| **Requester** | Submits and tracks service requests. Requesters have limited access and cannot perform operational or administrative tasks. This role is focused on initiating and monitoring work requests.<br><br>**Example tasks:** Create a service request for a broken asset and track its status until it is resolved. |
| **Inventory clerk** | Manages inventory and storeroom operations. Inventory clerks can maintain stock, process item movements, adjust inventory balances, and ensure accurate inventory records.<br><br>**Example tasks:** Receive items into inventory, issue materials to work orders, perform inventory counts, adjust inventory balances, and manage storerooms. |

!!! note
    You must assign at least one security group. The user cannot access applications until a security group is assigned.
