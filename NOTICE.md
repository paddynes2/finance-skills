# Attribution

Skills in this library are authored in house unless noted below. Where a skill adapts permissively licensed open source material, the original license and copyright are retained as required.

## Adapted sources

- **charlie-cfo-skill** by EveryInc, MIT License (https://github.com/EveryInc/charlie-cfo-skill). `cfo-advisory/runway-and-burn` adapts structure and selected formulas from this work, recalibrated away from the SaaS founder framing for general SMB and fractional CFO use.

## In house

All other skills (`tax-compliance-sa/*`, `cash-working-capital/*`) are authored in house and carry no third party license. They are written to work without any specific data connector: they read the buyer vault or ask for figures, and they target optional Xero tools when that connector is wired.

## Inclusion bar

A skill is only included once it genuinely works in Felix: it must either degrade gracefully (ask the user or read the vault) or target a connector the install actually has. Skills that hard depend on tools not present in Felix are not shipped.
