# About.Church

[![Deploy GitHub Pages](https://github.com/aweandreverence/www.about.church/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/aweandreverence/www.about.church/actions/workflows/deploy-pages.yml)

Helping believers who trust in Jesus Christ find and plug into a good local church.

A guide to Reformed and evangelical denominations that hold to the 5 Solas of the Reformation and the Biblical gospel, with links to their church finder tools.

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
