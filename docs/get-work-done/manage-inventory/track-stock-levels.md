# How do I track stock levels?

Monitor what's in your storerooms so you know what's available, what is running low, and where items are located.

## Quick reference

### Table 1: Stock balance types

| Balance type | What it means |
|--------------|---------------|
| **Current balance** | Total quantity in storeroom (includes reserved items) |
| **Available balance** | What you can actually use (current minus reserved) |
| **Reserved quantity** | Parts allocated to work orders |

---

## 💡 Tips for success

**Regular monitoring:**

- Check stock levels daily
- Review low stock weekly
- Analyze usage monthly
- Audit inventory quarterly

**Maintain accuracy:**

- Issue parts promptly
- Return unused items
- Perform cycle counts
- Investigate discrepancies

**Optimize levels:**

- Adjust minimum quantities based on usage
- Reduce slow-moving inventory
- Increase stock of critical items
- Balance cost versus availability

**Use reports:**

- Stock status reports
- Usage analysis
- Cost reports
- ABC analysis: prioritize high-value items


## Why track stock levels?

Good inventory tracking prevents stockouts and ensures parts are available when you need them.

When you track stock levels, you can:

- Know what's available right now
- See what is running low
- Find where items are located
- Control costs
- Optimize storeroom space

The system tracks quantities, costs, and locations automatically as items move in and out.

---

## What can I track?

The Inventory application shows:

**Current balance**
How many items are in stock.

**Location**
Which storeroom and bin.

**Cost**
Current value of inventory.

**Reserved items**
Parts allocated to work orders.

**Usage history**
How items are being consumed.

---

## How do I view inventory levels?

### Check a specific item

**What to do:**

1. Open the Inventory application.
2. Search by item number or description.
3. Select the item.
4. View the information you need:
   - Current quantity on hand
   - Available balance: not reserved
   - Cost information

If the item is in multiple storerooms, you can view all locations on one screen and compare quantities across storerooms.

### Check storeroom contents

**What to do:**

1. Open the Storerooms application.
2. Select your storeroom.
3. View all items stocked there:
   - Current quantities
   - Reserved quantities
   - Items in pick lists

### View by bin or lot

For detailed tracking:

- **Bin level**: See exactly where items are stored
- **Lot level**: Track specific batches
- **Condition**: Monitor item condition changes
- **Rotating assets**: Track individual asset items

Figure 1 illustrates the storeroom inventory hierarchy across three connected columns representing physical location, item tracking levels, and real-time balance calculations:

- **Physical location**: Navigates from Main storeroom as the primary inventory site, down through aisle and shelf coordinates such as Row A, Shelf 03, to a specific storage compartment, BIN-04.
- **Item tracking level**: From the physical bin, items branch into three tracking modes: standard inventory items tracked by item number, lot and batch tracking recording batch numbers and expiration dates, and rotating serialized assets tracking unique serial numbers.
- **Balance calculation**: Tracks inventory availability across records, where a current physical balance of 25 items minus a reserved quantity of 5 items allocated to work orders yields an available balance of 20 items ready for issue.

<img src="../../images/sample_bin_and_lot_tracking.svg" alt="Explained in body text" style="width: 100%; max-width: 680px; display: block; margin: 16px auto;">
<p class="figure-caption">Figure 1: Storeroom hierarchy for bin, lot, and rotating asset tracking</p>

---

## How do I understand inventory balances?

### Key balance types

**Current balance**

- Total quantity in storeroom
- Includes reserved items
- Shows what you physically have

**Available balance**

- Current balance minus reserved
- What you can actually use
- Updates as items are reserved

**Reserved quantity**

- Parts allocated to work orders
- Not available for other use
- Released when work order closes

Reservations are either hard or soft. A **hard reservation** immediately reduces available balance and requires sufficient stock to exist. If stock is insufficient, the reservation cannot be created and work order approval may fail. A **soft reservation** records demand without locking stock. If your storeroom uses hard reservations and a critical spare such as a nozzle seal for Filler FL-02 runs out, technicians will not be able to reserve it at approval time, causing delays. Check which reservation type is configured for critical items.

**Picked quantity**

- Items in active pick lists
- Being prepared for issue
- Not yet issued to work order

---

## How do I monitor stock that is running low?

### Decide when stock is low

Agree on a minimum quantity for each item you stock. When the available balance reaches that quantity, stock is low and someone needs to know.

### Table 2: Values to agree on for items that can run low

| Value | Use it when |
|---|---|
| **Minimum quantity** | You want to know when an item needs to be topped up |
| **Replacement time** | The minimum quantity should account for how long it takes to get the part back on the shelf. Without it, you may find out too late |
| **Safety stock** | Only when demand is unpredictable and you need a buffer above the minimum quantity |

When the available balance drops to the minimum quantity, tell the person who restocks parts for your site.

### Check items that are running low

**What to do:**

1. Open the Inventory application and check the available balance of your critical items.
2. Compare each balance with the minimum quantity you agreed.
3. Check reservations that will use the stock.
4. Consider how long it takes to replace the part.
5. Take action:
   - Transfer from another storeroom
   - Tell the person who restocks parts for your site
   - Adjust your minimum quantities if needed

---

## How do I track item costs?

### Cost information available

For each item, see:

- **Average cost**: Current average unit cost
- **Last cost**: Most recent unit cost recorded for the item
- **Standard cost**: Planned or budgeted cost
- **Total value**: Quantity × cost

### How costs are calculated

**Average cost method**

- Weighted average of the unit costs recorded for the item
- Updates with each receipt
- Smooths price fluctuations
- Most common method

If a high-cost batch of stock is added, it raises the average cost for all future issues of that item until the balance normalises. This can distort maintenance cost reports for that period. For frequently used spare parts such as nozzle seals for Filler FL-02, average cost is usually appropriate. For low-volume, high-value items, consider whether standard cost gives you more predictable reporting.

**Standard cost method**

- Fixed cost set in advance
- Doesn't change as new stock is added
- Variances tracked separately
- Used for budgeting

---

## How do I monitor inventory usage?

### Usage tracking

The system records:

- When parts are used, from issue transactions
- What jobs used items, from work orders
- How often items are needed
- Usage patterns over time

### Analyze usage

Use this information to:

- Identify fast-moving items
- Spot slow-moving inventory
- Adjust stock levels
- Reduce excess inventory

---

## Special inventory types

### Rotating items

Rotating items are units that you repair and reuse, such as a 50 HP drive motor. Each unit has its own asset record, so you can see where it has been and what work was done on it. For examples, see [What is an asset?](../../start-fast/basics/what-is-asset.md#rotating-and-non-rotating-assets)

### Item kits

For grouped items:

- Issue multiple items together
- Track kit components
- Maintain kit integrity
- Simplify common issues

### Table 3: Special item types comparison

| Item type | How it works | Typical example |
| :--- | :--- | :--- |
| **Rotating items** | Rebuildable units tracked by inventory balance and individual asset serial number | 50 HP slurry pumps, electric drive motors, and gearboxes |
| **Item kits** | Pre-assembled collections of items issued together under a single kit identifier | PM overhaul seal kits, filter replacement bundles |
| **Condition-enabled items** | Items tracked and valued by distinct physical condition rates | Reconditioned spare valves, refurbished circuit breakers |
| **Lotted items** | Batches tracked by unique lot identifiers for expiration and manufacturer traceability | Food-grade lubricants, chemical sanitizers, and specialty adhesives |

---

## Common scenarios

### Item running low

When stock is getting low:

1. Check the available balance and any reservations.
2. Check how long it takes to replace the part.
3. Transfer stock from another storeroom.
4. Tell the person who restocks parts for your site.
5. Adjust your minimum quantity if needed.

### Excess inventory

If you have too much:

1. Review usage history.
2. Check for obsolete items.
3. Transfer to other locations.
4. Adjust your minimum quantities.
5. Consider disposal if appropriate.

### Can't find item

If item shows in stock but you can't find it:

1. Check bin location.
2. Verify storeroom.
3. Look for reserved quantity.
4. Check pick lists.
5. Perform physical count.
6. Adjust if necessary.

Figure 2 illustrates the diagnostic workflow when an item shows a positive stock balance in the system but cannot be found on the storeroom shelf:

- **Diagnostic trigger**: Starts when the system balance shows stock on hand, but the item is missing from its primary shelf location.
- **Step 1 (Verify bin locations)**: Check primary, secondary, and staging bins. If found in an alternate bin, pick the item and update the bin assignment in the system. If still missing, proceed to Step 2.
- **Step 2 (Check transfers and receipts)**: Verify in-transit transfers between storerooms and recent receiving staging areas. If located in receiving or transit, complete the pending transaction. If still missing, proceed to Step 3.
- **Step 3 (Check reservations and kits)**: Inspect active work orders and staged item kits. If the item was allocated to an active work order, it is already staged for maintenance. If still missing, proceed to Step 4.
- **Step 4 (Conduct physical count)**: Count physical shelf stock across the storeroom. If a true variance is confirmed, enter an inventory adjustment in the Inventory application to reconcile the balance.

<img src="../../images/sample_stock_level_troubleshooting.svg" alt="Explained in body text" style="width: 100%; max-width: 680px; display: block; margin: 16px auto;">
<p class="figure-caption">Figure 2: Missing inventory item troubleshooting workflow</p>

---

## Why accurate tracking matters

**Prevents stockouts:**

- Parts available when needed
- No work delays
- Better service levels
- Fewer urgent requests for parts

**Controls costs:**

- Reduces excess inventory
- Optimizes stock levels
- Improves cash flow
- Lowers carrying costs

**Improves planning:**

- Better decisions about minimum quantities
- Accurate budgeting
- Informed stocking decisions
- Efficient operations

---

Good stock visibility means fewer surprises when jobs need parts and fewer delays when it matters most.

## Continue building your skills

### Fix a discrepancy

When the system and the shelf don't match, learn how to investigate and correct it.

[What happens if stock is incorrect?](stock-incorrect.md)

### Understand what your numbers mean

Learn which inventory metrics matter and how to use them to keep parts available when work demands them.

[What metrics matter?](../monitor-respond/what-metrics-matter.md)

---

## Related topics

- [How do I get a new part into inventory?](get-part-into-inventory.md)
- [How do I issue parts to a job?](issue-parts.md)
- [What happens if stock is incorrect?](stock-incorrect.md)
- [How do I plan recurring maintenance?](../plan-work/plan-recurring-maintenance.md)
- [How do I complete a job?](../complete-work/complete-job.md)
- [How do I plan my storeroom and inventory strategy?](../setup-control/plan-your-storeroom-strategy.md)
