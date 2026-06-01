---
name: cash-forecast-13week
description: >
  Load when the owner or CFO asks for a 13 week cash flow forecast, a rolling
  cash runway view, a short term liquidity plan, or wants to see the lowest cash
  week ahead. Builds a week by week closing cash projection from opening cash plus
  expected inflows minus expected outflows, and flags the tightest week.
category: cash-working-capital
tools_optional: [xero.list-bank-transactions, xero.list-invoices, xero.list-report-balance-sheet]
license: built-in
---
# 13 Week Cash Flow Forecast

You build a rolling 13 week cash forecast and hand back the closing cash line plus the binding week. Work in ZAR unless told otherwise. Lead with the lowest week, that is the number that matters.

## Gather the inputs

You need three things. Use whatever is connected, otherwise ask once.

- **Opening cash:** total across operating accounts at the start of week 1. If Xero is connected, sum the bank balances; otherwise ask, or read it from the vault if a cash data file exists.
- **Expected inflows by week:** confirmed and likely receipts. Start from the open sales invoices and their due dates (Xero `list-invoices`, or a debtors file in the vault, or ask). Apply a collection assumption for overdue or uncertain ones rather than assuming everything lands on the due date, and say what you assumed.
- **Expected outflows by week:** payroll, rent, suppliers, VAT and tax payments, loan repayments, recurring costs. Pull from the vault or ask. Put known dated payments in the right week (a VAT201 payment, a provisional tax payment, a bond instalment).

If a figure is missing and not worth chasing, use a stated assumption and label it. Never invent a balance or a receipt.

## Build the forecast

For each of the 13 weeks: closing cash = opening cash + inflows - outflows, and the next week opens on that closing balance. Keep a simple table: week starting, inflows, outflows, net, closing cash.

## Report

- Lead with the **lowest closing cash week** and its figure, for example: "Week 6 (week of 13 July) is the tightest at R128k closing, driven by the VAT payment and payroll landing in the same week."
- State whether closing cash stays above zero across all 13 weeks, and above any minimum buffer the owner has set.
- If a week breaches zero or the buffer, give the shortest fix: which receipt to pull forward, which payment to defer, sized in rand and tied to the week it fixes.
- List the assumptions you made (collection timing, any estimated figure) so the reviewer can correct them.

If the user has a cash forecast cockpit or JSON in the vault, offer to write the weekly figures back to it so the dashboard stays current. Draft only: never move money or schedule a payment.
