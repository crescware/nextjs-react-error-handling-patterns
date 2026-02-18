# use-effect-async

## What this case verifies
- Async failures inside `useEffect` can be escalated to `error.tsx` with `useErrorTrap(...).escalateAsync()`.
- A loading/success status can still be shown before escalation occurs.

## Why this matters
- Effects often run bootstrapping logic (analytics init, SDK startup, background sync).
- Unhandled promise rejections in effects are easy to miss and hard to diagnose from user reports.

## Next.js / React cautions
- Error boundaries do not automatically own arbitrary async rejections from effect internals.
- Guard against stale updates if effect work outlives the component lifecycle.
- Keep effect dependencies strict to avoid accidental duplicate executions.

## Try it
- `/?e=0&trap=1`: async effect succeeds.
- `/?e=1&trap=1`: async effect rejection escalates to `error.tsx`.
- `/?e=2&trap=1`: custom error rejection escalates to `error.tsx`.
- `/?e=1&trap=0`: demonstrates behavior without trap escalation.
