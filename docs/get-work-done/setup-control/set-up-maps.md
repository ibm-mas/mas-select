---
search:
  boost: 2
  keywords: map manager maps spatial configure basemap location asset work order administrator
---

# How do I set up maps?

Map Manager lets you configure a map so that users can see the location of assets, work orders, and service addresses on a visual map inside the application.

Once a map is configured and enabled, it appears in spatially enabled applications for all users.

## 💡 Tips for success

- Keep your first map simple. One basemap service is enough to get started. You can add more map services later.
- Use a descriptive name for each map service so it is easy to identify if you add more later.
- If users will be viewing maps on mobile devices, use the same map configuration. Mobile users see the same map as desktop users.

## Quick reference

### Table 1. Map terminology

| Term | What it means |
|------|---------------|
| **Map Manager** | The application where you create and configure maps |
| **Map provider** | The mapping service that supplies the background map, such as OpenMap |
| **Basemap** | The background map layer that shows geography, streets, or satellite imagery |
| **Map service** | A URL that points to a map tile or layer from your map provider |
| **Initial extent** | The default view that opens when a user first opens the map |

## What you need before you start

- A basemap URL from your map provider. OpenMap supports public ArcGIS basemap URLs, which do not require an account or license to use.
- The name of the applications you want maps to appear in.

## How to set up a map

1. Go to **Administration > Map Manager**.
2. Click **New Map**.
3. Enter a unique name and a short description for the map.
4. Select **Enable Map** to activate this configuration.
5. Set the **Map Provider** to **OpenMap**.
6. In the **Map Services** table, click **Add Row**.
7. Enter a name for the map service, for example, **Basemap**.
8. Enter the basemap URL. For example, to use a public ArcGIS basemap:
   ```
   https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer
   ```
9. Set the **Order** value. The basemap should have the highest order value in the list.
10. Set the **Initial Extent** for the map. Pan and zoom to the geographic area your organization works in, then save the extent.
11. Save the map record.

## Confirm the map is working

After saving, open the Locations or Assets application and open a record that has a location or address. A map panel should appear on the record showing your configured basemap.

If the map does not appear, check that:

- The map record has **Enable Map** selected.
- The basemap URL is accessible from the application.

!!! note "If your map does not load"
    In some environments, the application's security policy may block external map tile servers. If the map panel appears but the map does not load, contact IBM support. In Maximo Application Suite Select, system-level security settings are managed by IBM.

---

## Continue building your skills

### Automate your notifications

With your map in place, keep your team informed. Set up email and push notifications so people know when work is assigned or updated.

[How do I automate communication?](automate-communication.md)

### Configure Maximo Mobile for field teams

Let technicians, supervisors, and inventory clerks use a mobile app to access their work from anywhere.

[How do I configure IBM Maximo Mobile for my team?](configure-maximo-mobile.md)

---

## Related topics

- [How do I set up labor, crafts, and crews?](set-up-labor-crafts-crews.md)
- [How do I automate communication?](automate-communication.md)
- [How do I configure IBM Maximo Mobile for my team?](configure-maximo-mobile.md)
- [How do I classify assets?](../manage-assets/classify-assets.md)
