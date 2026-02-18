# use-effect-sync

## What this case verifies
- Synchronous failures triggered from `useEffect` can be funneled through `useErrorTrap(...).escalate()`.
- This enables consistent boundary UX across callback and effect-based failures.

## Why this matters
- Mount-time effect logic is frequently used for setup and can still fail unexpectedly.
- A shared escalation pattern reduces ad-hoc error handling differences across components.

## Next.js / React cautions
- In development, Strict Mode may run effects more than once; keep effect logic idempotent.
- Do not treat effect throws as business validation flow.
- Use escalation selectively for fatal paths that should transition to fallback UI.

## Try it
- `/?e=0&trap=1`: effect succeeds.
- `/?e=1&trap=1`: `Error` escalates to `error.tsx`.
- `/?e=2&trap=1`: `CustomError` escalates to `error.tsx`.
- `/?e=1&trap=0`: demonstrates behavior without trap escalation.
