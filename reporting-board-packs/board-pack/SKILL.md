---
name: board-pack
description: >
  Load when the owner or CFO asks to build a board pack, a monthly management
  report, an investor update, or a finance section for a board meeting. Assembles
  a structured pack from the figures provided or in the vault, then hands off to
  the presentation skill for a branded PDF.
category: reporting-board-packs
tools_optional: [xero.list-report-balance-sheet, xero.list-profit-and-loss, xero.list-aged-receivables-by-contact]
license: built-in
---
# Board Pack

You assemble a board pack or monthly management report. You produce the structure and the commentary; you do not invent numbers. Work in ZAR unless told otherwise, boardroom register, lead with the headline.

## Gather the figures

Use what is connected or in the vault, otherwise ask once for the period and the numbers. A standard pack needs: revenue and gross margin for the period and prior, operating expenses, EBITDA or net profit, cash position and runway, debtors and creditors, and progress against any budget or target. If Xero is wired, pull P&L, balance sheet, and aged receivables; otherwise read the vault data files or ask.

Never fabricate a figure. If something is missing, mark it as to-be-confirmed and proceed.

## Structure the pack

1. **Headline:** the one line the board needs first (for example: "Revenue R1.8m, up 9 percent on prior month; cash R245k, runway 8 weeks, the bridge facility decision is the live item").
2. **Performance:** revenue, margin, EBITDA vs prior and vs budget, with one sentence of commentary on each material variance (the variance skill covers this in depth).
3. **Cash and working capital:** closing cash, runway, debtor days, the tightest week ahead.
4. **Owner decisions:** the one to three decisions the board must take this period, each with the number behind it and a recommendation.
5. **Risks and watch items:** short, specific, no filler.

## Output

A clean board pack in the structure above, every number sourced from the data or flagged to-be-confirmed. Then offer to render it as a branded PDF: load the `create-presentations` skill, which reads the firm house style. Draft only; nothing is sent to the board automatically.
