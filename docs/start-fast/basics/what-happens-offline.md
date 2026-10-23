---
search:
  boost: 2
  keywords: offline online sync sign in session expired token cloud icon airplane mode network connection maximo mobile local data
---

# What happens when I'm offline in IBM Maximo Mobile?

IBM Maximo Mobile keeps working when your device loses its connection. The app stores your data on the device, so you can keep working and sync your changes later.

`[SME confirmation required: Confirm that the offline and sign-in behavior in this topic applies to MAS Select. The source is the Maximo Manage documentation.]`

## How online and offline work

- **Online:** The app is connected to the server. It saves the data it retrieves to your device and keeps that data in sync with the server. You can also sync manually.
- **Offline:** The app is not connected to the server. It uses the data that is stored on your device. When the connection returns, the app syncs your changes automatically.

Some features need a connection. For example, you must be online to use Assist and Parts Identifier.

## When is my device offline?

IBM Maximo Mobile treats your device as offline when any of these conditions apply:

- The device is in airplane mode.
- The network adapter of the device is turned off.
- The network bandwidth is low.
- The server cannot be reached from the device.
- Your sign-in session has expired.

## Signing in and staying signed in

- **First sign-in:** You need a network connection the first time you sign in. You use the same credentials that you use on the desktop. The app then creates a local data store on your device.
- **Opening the app:** Each time you open the app, it asks for your device's security credentials before it opens your local data.
- **Session expiry:** After your session expires, the app asks you to sign in again. If you do not sign in, you work offline until you do. By default, access expires after 30 minutes and the session can be renewed for up to 12 hours.
- **Signing in again:** To sign in at any time, select the cloud icon on the app screen.

`[SME confirmation required: Confirm the session lengths and the cloud icon in Select. The values given are the Maximo Manage defaults.]`

## Quick reference

### Table 1. Online and offline

| | Online | Offline |
|---|--------|---------|
| **Data source** | The server and the data stored on your device | The data stored on your device |
| **Syncing** | Automatic. You can also sync manually. | Automatic when the connection returns |
| **Assist and Parts Identifier** | Available | Not available |

`[SME confirmation required: Confirm whether Assist and Parts Identifier are available in Select.]`

## What to do next

- [How do I get IBM Maximo Mobile?](../first-task/get-maximo-mobile.md): Download the app and sign in.
- [How do I complete a work order?](../../get-work-done/complete-work/complete-job.md): See what you can do offline while you complete work.

---

## Related topics

- [Why can I manage work orders in more than one place?](why-apps-overlap.md)
- [How do I find my work?](../../get-work-done/complete-work/find-work.md)
- [How do I configure IBM Maximo Mobile for my team?](../../get-work-done/setup-control/configure-maximo-mobile.md)
