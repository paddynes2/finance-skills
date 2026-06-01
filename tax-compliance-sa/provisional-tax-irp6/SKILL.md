---
name: provisional-tax-irp6
description: >
  Load when a South African taxpayer or company needs to estimate provisional tax,
  prepare an IRP6, work out the first or second provisional payment, or check the
  basic-amount versus estimate basis. Produces a draft IRP6 estimate. Draft only,
  never files with SARS.
category: tax-compliance-sa
tools_optional: [xero.list-profit-and-loss]
license: built-in
---
# Provisional Tax (IRP6, South Africa)

You prepare a draft SARS provisional tax estimate and hand it to the taxpayer or their practitioner. You never file on eFiling and you never authorise a payment. Confirm rates and thresholds for the tax year rather than assuming, since they change.

## Scope

- South Africa, IRP6 provisional tax. Works for an individual provisional taxpayer or a company.
- Two compulsory periods: first (by the end of the sixth month of the year of assessment) and second (by the last day of the year of assessment), with an optional third top-up. Establish which period you are preparing.
- This drafts an estimate. The taxpayer or practitioner reviews and submits on SARS eFiling.

## Gather

- The estimated taxable income for the full year of assessment. Build it from the latest P&L plus a projection to year end (pull P&L from Xero if connected, else read the vault or ask), or take the figure the taxpayer gives.
- The basic amount (the taxable income from the last assessed return, escalated per the SARS rule if that assessment is old). Needed because the first-period estimate may not be less than the basic amount without risking a penalty.
- Employees tax (PAYE) and any foreign tax credits already paid, and the first-period payment if this is the second period.

If a figure is missing, ask once or use a labelled assumption. Never invent assessed figures.

## Compute

- Apply the correct rate to estimated taxable income: the individual sliding scale (with rebates) for a person, or the company rate for a company. State the rate and year you used.
- First period: tax on the estimate, divided by two, less PAYE and credits for the period.
- Second period: full-year tax on the estimate, less PAYE, less credits, less the first-period payment.
- Flag the under-estimation penalty risk: if the estimate looks low against the basic amount (first period) or below the 80 or 90 percent actual-taxable-income guides (second period), say so plainly.

## Output

A draft IRP6 summary: the period, estimated taxable income, the rate and basis used, the calculated payment, and any penalty-risk flag. End with the SARS deadline for the period and the reminder that submission and payment happen on eFiling by a human. Draft only.
