# Felix Finance Skills Library

Curated, categorized markdown skills for the Felix AI Employee Install. Felix loads these at runtime from this repo into a local cache (no app rebuild), the same way the fork already loads browser domain skills. Each skill is a playbook the assistant reads on demand when a task matches its trigger.

This is the V1 **CFO / SMB** bundle, aimed at fractional CFO firms (first warm install: Peter). A second buy-side bundle is planned later and is out of scope here.

## How a skill is structured

```
<category>/<skill-id>/SKILL.md          required, the playbook
<category>/<skill-id>/references/*.md   optional, deeper tables the skill cites
```

`SKILL.md` carries YAML frontmatter the loader and matcher read:

```yaml
---
name: runway-and-burn
description: >
  When to load this skill and what it does. The matcher routes on this text,
  so write it as trigger phrases plus a one line summary.
category: cfo-advisory
tools_optional: []          # MCP tool names the skill uses if connected (e.g. xero.list-invoices)
license: built-in           # or: vendored-from <source> (<spdx>)
---
# Title (the first H1 becomes the display title)
```

A skill names the tools it *would* use (for example Xero), but degrades gracefully to user provided files and manual steps when the connector is not wired. Skills are connector agnostic: the same skill works whether Xero is reached through the native XeroAPI MCP or through Composio.

## Categories (V1)

1. `cfo-advisory` knowledge only: runway, unit economics, capital allocation, working capital rules.
2. `bookkeeping-close` Xero backed: month end close, journal entries, reconciliation, trial balance.
3. `cash-working-capital`: 13 week cash forecast, AR aging and debtor chase, DSO and DPO.
4. `reporting-board-packs`: P&L, balance sheet, board pack, investor update, variance commentary.
5. `tax-compliance-sa`: South African VAT201, provisional tax, SARS. Authored in house, the differentiator no off the shelf source covers.

## House rules baked into every skill

- Draft only. Nothing is sent, posted, paid, or filed without explicit human approval (HR12). Anything that writes to a system (a journal, a payment, an invoice) follows a two step protocol: stage, render a plain preview, wait for an explicit go, then commit.
- Boardroom voice. Lead with the answer. Concrete numbers. No em or en dashes, no hyphen as a separator.
- South African defaults where a jurisdiction matters: ZAR, SARS, VAT at the prevailing standard rate, .co.za Xero region.

## Integrations are not skills

Xero, QuickBooks, Stripe, and bank feeds are connectors enabled in the gallery, not entries in this library. A skill is the recipe; the connector is the appliance. The baseline Xero path is the official XeroAPI MCP server, which keeps client data flowing Xero to local with no extra processor, the cleaner POPIA story for South African books.

## Attribution

Skills vendored from permissively licensed sources keep their attribution in `NOTICE.md` and in the skill frontmatter `license:` field. AGPL sources are never folded in; they inform structure only.
