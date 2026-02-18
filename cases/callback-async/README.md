# callback-async

## What this case verifies
- Errors from asynchronous event callbacks are not automatically routed to a segment error boundary.
- `useErrorTrap(...).escalateAsync()` can capture the rejection and re-throw on render so `error.tsx` handles it.

## Why this matters
- Many production failures happen after `await` in click handlers.
- Without explicit escalation, users may only see a stale UI while errors go to the console.

## Next.js / React cautions
- Error boundaries handle render-phase failures, not arbitrary async callback rejections.
- Keep callback logic small and move recoverable failures to explicit UI state when possible.
- Use thrown errors for truly exceptional paths you want boundary UX to own.

## Try it
- `/?e=0&trap=1`: async callback succeeds.
- `/?e=1&trap=1`: throws `Error`, handled by `error.tsx`.
- `/?e=2&trap=1`: throws `CustomError`, handled by `error.tsx`.
- `/?e=1&trap=0`: demonstrates behavior without trap escalation.
