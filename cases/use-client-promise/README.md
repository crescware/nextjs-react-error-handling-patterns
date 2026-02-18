# use-client-promise

## What this case verifies
- React `use()` can unwrap a promise created in a client component.
- Rejected client-side promises propagate to the segment error boundary.

## Why this matters
- Client-generated async workflows (local caches, browser APIs, deferred computations) are common.
- Promise identity and lifecycle mistakes can cause repeat suspends or confusing retries.

## Next.js / React cautions
- Stabilize client-created promises with `useMemo` or equivalent.
- Creating a new promise on every render can cause repeated suspense cycles.
- Pair `use()` with both `Suspense` and `error.tsx` to handle loading and failure explicitly.

## Try it
- `/?e=0`: promise resolves and content renders.
- `/?e=1`: promise rejects with `Error`.
- `/?e=2`: promise rejects with `CustomError`.
