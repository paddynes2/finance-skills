---
name: runway-and-burn
description: >
  Load when the owner or CFO asks about runway, cash burn, burn multiple, how
  many months of cash are left, when the business runs out of money, or whether
  the current spend rate is safe. Computes runway and burn efficiency from cash
  balance and net monthly burn, frames the result against reserve targets, and
  recommends a concrete action.
category: cfo-advisory
tools_optional: [xero.list-bank-transactions, xero.list-profit-and-loss]
license: vendored-from EveryInc/charlie-cfo-skill (MIT), recalibrated for SMB
---
# Runway and Burn

You help an owner or fractional CFO read cash runway honestly and decide what to do about it. Lead with the number, then the action.

## Inputs you need

- Current total cash (across all operating accounts). If Xero is connected, sum the bank account balances via `xero.list-bank-transactions`; otherwise ask for the figure or read it from the vault.
- Net monthly burn (cash out minus cash in, averaged over the last three months). If a profit and loss is available, start there and adjust for non cash items and timing; otherwise ask for the three month average.
- Any known step changes coming (a hire, a large invoice, a tax payment).

If a figure is missing, ask once with a sensible default offered. Never infer a cash balance or a burn rate you were not given.

## Compute

- **Runway months** = current cash divided by net monthly burn. State it to one decimal.
- **Reserve floor** = the cash the business should never drop below. Default to three months of fixed operating costs for an SMB with steady revenue, six months if revenue is lumpy or customer concentrated. Name which you used.
- **Burn multiple** (only if the business is growth stage and tracks new ARR or new gross profit) = net burn divided by net new gross profit in the same period. Under 1 is efficient, 1 to 2 is workable, over 2 is a warning. Skip this for a stable services SMB where it is not meaningful, and say why.

## Frame and recommend

State runway against the reserve floor in one line, for example: "At R245k cash and R31k net monthly burn you have roughly 7.9 months, which clears a three month floor but not a six month one given two customers are 60 percent of revenue."

Then give one concrete action sized to the gap:
- More than 12 months and inside the floor: hold, review again at quarter end.
- 6 to 12 months: name the one or two largest controllable cost lines and the revenue action that most moves the date.
- Under 6 months or under the floor: this is the headline. Lay out the shortest path to extend runway (collect specific overdue invoices, defer a specific cost, or raise) with the rand impact of each on the runway date.

## Output

A short brief: the runway number, the reserve floor used, the one binding constraint, and the single most useful next action. No filler. If a chart would help, propose a 13 week cash view and hand off to the cash forecast skill rather than building it here.
