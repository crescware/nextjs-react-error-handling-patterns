# callback-sync

## What this case verifies
- Synchronous exceptions thrown inside event handlers are not automatically captured by segment error boundaries.
- `useErrorTrap(...).escalate()` bridges callback failures into boundary-friendly render-time throws.

## Why this matters
- Button handlers often contain validation and feature-flag branches that can throw unexpectedly.
- This pattern provides a predictable fallback screen instead of silent UI drift.

## Next.js / React cautions
- Event-handler exceptions are outside normal render reconciliation.
- Prefer typed domain results for expected validation issues; reserve thrown errors for unexpected failures.
- If you choose boundary routing, centralize it so all handlers behave consistently.

## Try it
- `/?e=0&trap=1`: callback succeeds.
- `/?e=1&trap=1`: throws `Error`, rendered by `error.tsx`.
- `/?e=2&trap=1`: throws `CustomError`, rendered by `error.tsx`.
- `/?e=1&trap=0`: demonstrates behavior without trap escalation.
