# SME questions and French follow-up: apps and IBM Maximo Mobile

Collected from the `[SME confirmation required]` and `[TO DO]` tags on the English pages. Source for behavior: Maximo Manage documentation (the user's decision is that the desktop apps and IBM Maximo Mobile work the same way in Select). Select-specific details still need confirmation.

## A. Questions for an SME

### Apps, names, and menu

| # | Question | Page |
|---|----------|------|
| A1 | What are the menu locations of **Service Requests** and **Work Order Summary**? | [why-apps-overlap.md](../docs/start-fast/basics/why-apps-overlap.md) |
| A2 | Is the purpose of each app in the "Use it to" column correct (Technician, Inspections, Inspection Forms, Asset Manager, Issues and Transfers, Inventory Counting, Service Requests, Work Order Summary)? | why-apps-overlap.md |
| A3 | [CONFIRMED] Apps by security group verified via Small SaaS persona table (Service Requests for Admin, Supervisor, Technician, Requester, Inventory Clerk; Ticket Templates for Supervisor; Conditional Expression Manager for Admin; Data-loading tool for Admin; Material Requests mobile for Technician and Inventory Clerk). | why-apps-overlap.md, [other-mobile-apps.md](../docs/start-fast/basics/other-mobile-apps.md) |
| A4 | Are **Inspection Forms** and **Inspections** the app names and locations in Select (Planning > Inspection Forms, Work Orders > Inspections)? | [how-inspections-work.md](../docs/start-fast/basics/how-inspections-work.md) |
| A5 | [CONFIRMED] **Location Manager (mobile)**, **Asset Manager (mobile)**, **Material Requests (mobile)**, **Crew Manager (mobile)**, and **Time Sheets (mobile)** confirmed in Select. | [other-mobile-apps.md](../docs/start-fast/basics/other-mobile-apps.md) |

### Apps that may not be in Select

| # | Question | Pages |
|---|----------|-------|
| B1 | [RESOLVED - Removed from docs] Does Select include the **Receiving** app? (Confirmed not in Select; removed "receive inventory" references). | [get-maximo-mobile.md](../docs/start-fast/first-task/get-maximo-mobile.md), [overview.md](../docs/start-fast/what-can-i-do/overview.md), [inventory-clerk-first-task.md](../docs/start-fast/first-task/inventory-clerk-first-task.md) |
| B2 | [CONFIRMED - Included] Does Select include the **Approvals** app? (Confirmed included; MAS Select users receive the same standard OOTB Maximo Mobile app as Manage users, which includes Approvals). | [get-maximo-mobile.md](../docs/start-fast/first-task/get-maximo-mobile.md), [overview.md](../docs/start-fast/what-can-i-do/overview.md), [supervisor-first-task.md](../docs/start-fast/first-task/supervisor-first-task.md) |
| B3 | [CONFIRMED - Supported] Are **Windows** devices supported, or only iOS and Android? (Confirmed: OOTB Maximo Mobile supports iOS, Android, and Windows via Microsoft Store). | get-maximo-mobile.md |
| B4 | [CONFIRMED - Included] Is **Material Request (mobile)** available in Select? (Confirmed included for Technicians and Inventory Clerks on Small SaaS persona slide). | [other-mobile-apps.md](../docs/start-fast/basics/other-mobile-apps.md) |

### Sign-in, sync, and offline

| # | Question | Pages |
|---|----------|-------|
| C1 | What are the exact sign-in screens, including single sign-on prompts? Does the app ask for a server URL, or does the administrator set it? | get-maximo-mobile.md |
| C2 | What is the name and location of the manual sync control? | get-maximo-mobile.md, [why-cant-see-new-work-on-phone.md](../docs/get-work-done/complete-work/why-cant-see-new-work-on-phone.md) |
| C3 | [CONFIRMED - Documented] Is there a cloud icon to sign in again? Are the session lengths 30 minutes (access) and 12 hours (renewal)? (Standard Maximo Mobile authentication data flow defaults confirmed). | [what-happens-offline.md](../docs/start-fast/basics/what-happens-offline.md), why-cant-see-new-work-on-phone.md |
| C4 | [RESOLVED - Removed from docs] Are Assist and Parts Identifier available in Select? (Confirmed not in Select; removed from offline guide and table). | what-happens-offline.md |
| C5 | [CONFIRMED - Documented] Do the offline and sign-in conditions in "What happens when I'm offline" apply to Select? (Confirmed from standard OOTB Maximo Mobile behavior). | what-happens-offline.md |
| C6 | [CONFIRMED - Documented] Do the causes in "Why can't I see new work" apply to Select? Specifically, does turning off data download stop new work from appearing? (Confirmed from standard sync settings). | why-cant-see-new-work-on-phone.md |

### Notifications and administration

| # | Question | Page |
|---|----------|------|
| D1 | [CONFIRMED - Documented] Do the push notification session conditions apply to Select (active session, not signed out, app not reset), and must the device network allow Apple and Google push services? (Confirmed from Manage push notification documentation). | [automate-communication.md](../docs/get-work-done/setup-control/automate-communication.md) |
| D2 | What are the sync option labels and their location in Select? Manage uses Complete, Only delta, and Do not download, under Worklist data and Supporting data. | [configure-maximo-mobile.md](../docs/get-work-done/setup-control/configure-maximo-mobile.md) |
| D3 | Does Select expose the shared device, location sharing, physical signature, and preloaded data settings? If yes, ask for the pages to be written. | none yet |

### Inspections, technicians, and inventory

| # | Question | Page |
|---|----------|------|
| E1 | How are inspections scheduled or generated from a form in Select, and where do results appear on the asset or location? | how-inspections-work.md |
| E2 | [CONFIRMED - Documented] Does the Technician app list match Select? (Confirmed from standard Technician mobile app capabilities and walkthrough video). | [technician-first-task.md](../docs/start-fast/first-task/technician-first-task.md) |
| E3 | Which application reconciles inventory counts in Select? | [stock-incorrect.md](../docs/get-work-done/manage-inventory/stock-incorrect.md) |

### Videos (removed from the pages; restore from commit 2272bfa when embeds are allowed)

The three Mediacenter embeds, captions, and transcripts were removed from the English pages because Mediacenter blocks embedding on the published domain. These questions apply when they come back.

| # | Question | Page |
|---|----------|------|
| F1 | Do the three Mediacenter videos match Select? They were made for Maximo Manage. The "Completing a work order" video opens "My Schedule" in the navigator. | [technician-first-task.md](../docs/start-fast/first-task/technician-first-task.md) |
| F2 | Does Select have the Maximo Mobile Setup option (QR code and download link) that the "Setting up" video starts with? If yes, add it to "Download the app" and "Sign in". | [get-maximo-mobile.md](../docs/start-fast/first-task/get-maximo-mobile.md) |
| F3 | Does Select include the Approvals app? The "Approving work orders" video shows it. If not, remove the video and transcript. Same question as the Receiving and Approvals TO DO. | [supervisor-first-task.md](../docs/start-fast/first-task/supervisor-first-task.md) |

## B. Open points for the content owner

- Method 3 on [issue-parts.md](../docs/get-work-done/manage-inventory/issue-parts.md) ("Use mobile app") may describe a mix of apps. Left as-is. Decide which app it describes.
- The add-users snippet has no app names. Left alone until Table 2 is confirmed.
- The term "role-based apps" appears once, in why-apps-overlap.md. Nothing else uses it.
- Videos (removed for now): ask the Mediacenter owner to allow embeds from `ibm-mas.github.io`, then restore the three pages from commit 2272bfa. Ask the privacy owner whether the Mediacenter embed needs a cookie notice. Decide whether to request French captions or a French re-recording.

## C. French pages to update (translation owner)

No `*.fr.md` file was edited. Existing French pages affected by English changes:

| French page | Change needed |
|-------------|---------------|
| `docs/start-fast/first-task/technician-first-task.fr.md` | Step 2 (line 26) still says "Accédez à Work Orders ou à My Assigned Work". English now reads: Go to **Work Orders > Work Orders**, or go to **Work Orders > Technician** and select **Assigned work**, with a callout linking to the new overlap page. Also add the new section "What can I do in the Technician app?". |
| `docs/_snippets/add-users.fr.md` | No English change. No action needed. |

New English pages with no French version yet (the nav uses the English file until a `.fr.md` exists):

- `docs/start-fast/basics/why-apps-overlap.md` (French nav label: "Pourquoi des applications se chevauchent")
- `docs/start-fast/basics/how-inspections-work.md` (label: "Fonctionnement des inspections")
- `docs/start-fast/basics/what-happens-offline.md` (label: "Travailler hors ligne")
- `docs/get-work-done/complete-work/why-cant-see-new-work-on-phone.md` (label: "Impossible de voir le nouveau travail sur le téléphone")

Videos were removed from the English pages. If `technician-first-task.fr.md` has a video block, check it. When the videos return, these pages carry them: `technician-first-task.fr.md` (needs the video block, or a line saying the video is in English), plus `get-maximo-mobile.md` and `supervisor-first-task.md` (no French version yet). The videos and their captions are in English only. The French video line should say so until a decision is made.

English pages edited that have no French version yet: `get-maximo-mobile.md`, `overview.md`, `inventory-clerk-first-task.md`, `supervisor-first-task.md`, `find-work.md`, `complete-job.md`, `issue-parts.md`, `stock-incorrect.md`, `configure-maximo-mobile.md`, `automate-communication.md`, `what-are-basic-concepts.md`, `why-cant-see-assigned-work.md`.
