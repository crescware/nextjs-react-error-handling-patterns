# client-sync-throw

## What this case verifies
- A synchronous throw during client component render is captured by the nearest segment `error.tsx` boundary.
- Both native `Error` and custom subclasses propagate to the boundary payload.

## Why this matters
- Client-only branches (feature switches, environment checks, malformed props) can fail during render.
- You need confidence that your segment-level fallback is reachable and informative.

## Next.js / React cautions
- Render must stay pure; avoid side effects before branches that may throw.
- In development, Strict Mode may re-render more often, so keep thrown conditions deterministic.
- If a throw belongs to expected validation, prefer explicit UI messaging instead of crashing render.

## Try it
- `/?e=0`: no throw.
- `/?e=1`: render throws `Error`.
- `/?e=2`: render throws `CustomError`.
