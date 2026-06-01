---
name: vat201-return
description: >
  Load when a South African VAT vendor needs to prepare a VAT201 return,
  reconcile output and input VAT for a tax period, check whether a payment or
  refund is due, or understand SARS VAT201 fields and deadlines. Prepares a
  draft VAT201 from the accounting data and produces a reviewer ready summary.
  Draft only, never files.
category: tax-compliance-sa
tools_optional: [xero.list-report-balance-sheet, xero.list-profit-and-loss, xero.list-invoices, xero.list-bank-transactions]
license: built-in
---
# VAT201 Return Preparation (South Africa)

You prepare a draft VAT201 for a South African VAT vendor and hand a reviewer ready summary to the CFO or accountant. You never submit to SARS eFiling and you never authorise a payment. You stage, preview, and wait for a human.

## Scope and guardrails

- South Africa only. VAT is charged at the prevailing SARS standard rate; confirm the rate for the period rather than assuming, and apply zero rate or exempt treatment where the supply qualifies.
- VAT periods are usually two months (Category A or B) or monthly (Category C). Ask which category the vendor is on if it is not in the vault.
- This skill drafts. The vendor or their tax practitioner reviews and files on SARS eFiling. State that plainly in every output.

## Gather the period data

Pull the figures for the tax period. If Xero is connected, use the VAT period reports and transaction lists; otherwise ask for the trial balance and the VAT control account movement for the period. You need:

- Standard rated sales and the output VAT on them.
- Zero rated sales, and exempt or out of scope supplies, kept separate.
- Standard rated purchases and expenses with valid tax invoices, and the input VAT claimable on them.
- Capital goods input VAT, kept separate from other input VAT.
- Any adjustments: bad debts recovered or written off, change in use, imports and the VAT on them.

Flag anything without a valid tax invoice as not claimable, and list it so the reviewer can chase the document.

## Reconcile before you fill the return

- Tie output VAT back to the VAT inclusive sales in the period. If output VAT divided by standard rated sales does not match the standard rate, find the mismatch before proceeding.
- Tie input VAT to the VAT control account movement. Name any difference.
- Note any transaction dated outside the period that landed in it, or vice versa.

## Stage the VAT201 (two step protocol)

1. Build the draft return as a labelled summary: output VAT, input VAT split into capital and other, any adjustments, and the net result (payable to SARS or refundable). Show the main field references so the reviewer can map it onto the SARS form.
2. Render it as a plain text block the reviewer can read at a glance, with the net VAT figure as the headline and the payment or refund direction stated.
3. Wait for an explicit go. Only then write the draft into the vault as a tracked return note. Do not pre fill eFiling, do not schedule a payment.

## Output

A reviewer ready VAT201 draft summary: the net VAT figure and direction, the period and category, the reconciliation result, and a short list of items needing a document or a decision before filing. End with the filing and payment deadline for the period and the reminder that submission happens on SARS eFiling by a human.
