# Global church discovery roadmap

Status: proposal only. The current product is an editorial guide to external
church finders, not a comprehensive global database. This document does not
implement or authorize scraping, a scheduler, Google Sheets integration, or an
interactive application. Maintainers review scope and permissions before each phase.

## Current finder

Start with ministry/network directories, then denomination/association finders,
then regional resources. Section links support direct navigation; the existing
`/find-a-church/#australia-sydney` link and Sydney resources remain available.
Coverage varies, and inclusion is a research lead rather than an endorsement.

## 1. Prove the editorial data workflow

Use source-specific Google Sheets tabs to preserve upstream provenance and a
separate normalized master sheet for review. Keep raw imports separate from
approved records. Do not publish sheet credentials, private submissions, or
personal contact information. Prefer public church contact details.

Proposed fields: stable church ID, name, country, administrative region, locality,
address, website, languages, meeting details, latitude/longitude and precision,
source ID/URL, source record ID, permission/license basis, observed date, last
reviewed date, review status, doctrinal evidence URLs with dated editorial notes,
and duplicate/merge history. Distinguish a network's confession from evidence
about a particular congregation; do not infer doctrinal approval from membership.

- Record source ownership, terms, attribution and redistribution permission first.
  Publicly readable does not mean permission to bulk collect or republish.
- Propose monthly imports only for permission-compatible sources, using an API,
  export or other explicitly permitted mechanism. Honor rate limits and removal
  requests; sources without permission remain outbound links or manual leads.
- Stage a diff for human review, not automatic publication. Preserve manual edits,
  detect deleted/changed records and support rollback to the previous export.
- Deduplicate using source IDs, normalized domains/addresses and possible nearby
  matches. A reviewer resolves ambiguity; never silently merge separate campuses.
- Mark stale records visibly using a reviewed freshness policy. Missing import
  results do not prove closure. Queue rechecks and corrections before removal.
- Validate a versioned schema: required fields, stable IDs, allowed statuses,
  valid URLs, country codes, coordinate ranges, dates, uniqueness and provenance.
  Reject invalid records and retain a reviewable error report.
- Export only approved, validated records as versioned JSON through a reviewed PR;
  include source/license attribution, an export date and reversible change history.

Exit gate: a small licensed sample completes source → normalized sheet → reviewer
→ validated JSON, including duplicate, stale, correction and rollback examples.

## 2. Build an accessible global discovery experience

A future modern application could offer synchronized map/list views, filters for
location, language and church/network attributes, shareable filtered URLs, and
church detail pages with source evidence and last-reviewed dates. Treat uncertain
coverage honestly; offer an empty-state path to existing external directories.

Users may suggest a church or add a proposed map pin, but submissions enter a
moderation queue rather than appearing live. Require review, abuse controls,
correction/removal workflows and an auditable moderation history. Provide a
church-representative claim process without implying unverified ownership.

Map pins and filters must have equivalent keyboard-accessible list interactions,
clear labels, visible focus, usable touch targets, predictable focus after filtering,
and announced result counts. Do not rely on pin color alone. Support screen readers,
small screens and a map-unavailable fallback; never require location permission.
Test list and map parity with representative users before launch.

Exit gate: reviewed records work in both map and list; filtering, suggestion,
moderation and empty/error states pass keyboard, screen-reader and responsive QA.

## 3. Decide operations before automation

Evaluate map tiles and geocoding providers for global coverage, attribution,
license compatibility, retention/caching restrictions and redistribution of derived
coordinates. Estimate initial batch and monthly update costs separately from map
loads; set budgets, quotas and alerts before approval. Reuse coordinates only when
permitted, geocode changed addresses rather than every record, and review ambiguous
matches. Do not publish precise locations for sensitive congregations without consent.

Name owners for source permissions, monthly import review, doctrine/content review,
moderation, stale-record rechecks, costs and incident response. Agree service targets,
retention and removal policies before enabling scheduled jobs. Automation comes
only after the manual workflow proves safe and useful.

## Delivery review

For each phase use Scope → Plan → Execute → Assess → Resolve (SPEAR). Assess
coverage honesty, doctrinal evidence, permissions/privacy, data integrity,
accessibility, operational costs and rollback independently. Record passing evidence
and explicit blockers; a roadmap item is not an implemented feature.
