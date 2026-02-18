# generate-metadata-error

## What this case verifies
- Exceptions thrown inside `generateMetadata` are surfaced through route error handling.
- Metadata generation failures can block successful page rendering for the route.

## Why this matters
- Real metadata often depends on network I/O (CMS, product APIs, localization services).
- If metadata fetches fail, your route can error before users see page content.

## Next.js / React cautions
- `generateMetadata` runs on the server and cannot use client hooks/state.
- Keep metadata fetches fast and resilient; use timeouts and guarded fallbacks where appropriate.
- Throw only for truly fatal metadata failures; otherwise degrade gracefully with default metadata.

## Try it
- `/?e=0`: metadata resolves and page renders.
- `/?e=1`: `generateMetadata` throws `Error`.
- `/?e=2`: `generateMetadata` throws `CustomError`.
