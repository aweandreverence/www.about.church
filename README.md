# About.Church

[![Deploy GitHub Pages](https://github.com/aweandreverence/www.about.church/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/aweandreverence/www.about.church/actions/workflows/deploy-pages.yml)

Helping believers who trust in Jesus Christ find and plug into a good local church.

A guide to Reformed and evangelical denominations that hold to the 5 Solas of the Reformation and the Biblical gospel, with links to their church finder tools.

## Church-finder content

The finder lives in `src/pages/find-a-church.js`. Directory inclusion is a research
lead, not an endorsement of every congregation. Keep the five-solas / Biblical
gospel scope explicit, use primary sources, and distinguish an association's
published beliefs from a local church's actual teaching and practice.

### Navigation and coverage

The finder starts with broader ministry/network directories, followed by
denomination/association finders and regional resources. Use the section links
to jump directly to a category; existing Sydney links at
`/find-a-church/#australia-sydney` remain supported. Mobile navigation exposes
its expanded state and can be closed with Escape. Country coverage varies:
this is a selected guide, not a comprehensive global directory.

See [the global discovery roadmap](ROADMAP.md) for the proposed reviewed data
workflow and accessible map/list application. No imports, scheduling, Sheets
integration or interactive map are implemented by this navigation update.

### Australia / Sydney sources

Reviewed 2026-10-10. These are editorial summaries and links, not reproduced
third-party directory data or a comprehensive list of Sydney churches.

| Resource                                                     | Primary-source evidence and coverage                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Limitations                                                                                                                                                                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [FIEC Australia directory](https://www.fiec.org.au/churches) | [Published beliefs](https://www.fiec.org.au/what-we-believe) affirm Scripture's supreme authority and sufficiency, Christ's substitutionary death, and salvation entirely by grace. The directory's rendered church links include [Evangelical Chinese Church](https://eccsydney.org.au/) (16 Masons Drive, North Parramatta) and [South-West Evangelical Church](https://www.swec.org.au/) (4 Morgan Street, Kingsgrove), confirmed on their own websites.                                 | The landing page and church links worked, but embedded ChurchSuite content refused to connect during browser verification. Keep direct local examples as a fallback; do not promise the map works. |
| [Church Near You](https://churchnearyou.com.au/)             | The [Sydney Anglican diocese's own page](https://sydneyanglicans.net/about) links this finder. Its [doctrine statement](https://sydneyanglicans.net/files/Doctrine_of_the_Anglican_Diocese_of_Sydney.pdf), approved 9 December 2024, affirms Scripture's supreme authority, Christ alone, justification by faith only, salvation as God's gift, and glory due to God alone. A browser search for `Sydney` returned nine listings, including St Thomas' North Sydney and St Philip's Sydney. | This establishes concrete local coverage, not doctrinal approval of each result or of Anglicanism worldwide. Prefer suburb/postcode searches; confirm current details with the church.             |

For content updates: scope the reader's need, plan the smallest useful change,
verify primary sources, assess theology/coverage/UI/validation/diff scope, then
resolve with recorded evidence (SPEAR). Recheck directory destinations, actual
local listings, and doctrinal sources when editing; do not infer coverage from an
HTTP 200 alone. Run the build and inspect `/find-a-church/` at desktop and mobile
widths. Commit the refreshed `docs/` export alongside the source; do not deploy as
part of content preparation.

## Development

```bash
make install
make dev
```

## Build

```bash
make build
```

## Deploy

Static site built to `docs/` for GitHub Pages. The committed `docs/` site is published by the `Deploy GitHub Pages` GitHub Actions workflow after changes land on `master`.

After merging the Actions migration, switch the repository Settings → Pages source to GitHub Actions and verify the first `Deploy GitHub Pages` workflow run succeeds.

---

Built by [Awe & Reverence](https://www.aweandreverence.com)
