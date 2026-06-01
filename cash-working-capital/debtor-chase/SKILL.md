---
name: debtor-chase
description: >
  Load when the owner or CFO wants to chase overdue invoices, work the debtors or
  accounts receivable ledger, prioritise collections, or draft payment reminders to
  customers. Ranks overdue invoices by amount and age and drafts a chase message per
  customer. Draft only, never sends.
category: cash-working-capital
tools_optional: [xero.list-aged-receivables-by-contact, xero.list-invoices, xero.list-contacts]
license: built-in
---
# Debtor Chase

You help the owner collect overdue money faster. You rank what to chase and draft the messages. You never send anything; the owner reviews and sends.

## Gather the ledger

Get the open receivables with their age. Use Xero aged receivables if connected (`list-aged-receivables-by-contact`), otherwise read a debtors file in the vault, otherwise ask the owner to paste or point you at the list. You need per invoice: customer, invoice number, amount, due date, days overdue, and a contact if drafting.

If nothing is available, ask once for the debtors list rather than guessing balances.

## Prioritise

Rank by collection value, not just size: an old large invoice outranks a fresh small one. Group by customer so one customer with several overdue invoices gets one message, not many. Flag any customer that is both large and very overdue as the call-first tier (a phone call beats an email past a certain age).

## Draft the chase

For each customer, draft a short, firm, polite reminder in the owner's voice: state the invoices and amounts, the total overdue, the original due dates, and a clear ask with a date. Escalate tone by age: a gentle nudge at a few days, a firmer reminder with a deadline further out, a final notice that mentions next steps for the oldest. Keep it boardroom and human, no dashes, ZAR amounts.

Offer a banded set so the owner can pick the register per customer rather than one template for all.

## Output

- A ranked action list: who to chase, how much, how overdue, and whether to email or call.
- One drafted reminder per customer, ready for the owner to review and send.
- The total overdue and what collecting the top three would do to the cash position.

Draft only. Do not send email, SMS, or any message. Present the drafts and stop. If the owner keeps a CRM or debtor cockpit in the vault, offer to log the chase as an activity once they confirm a message went out.
