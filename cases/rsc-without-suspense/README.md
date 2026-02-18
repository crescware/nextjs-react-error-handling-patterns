# rsc-without-suspense

## What this case verifies
- Async work in a server component can throw without any local `Suspense` loading boundary.
- Failures still route to `error.tsx`, but loading behavior is coarse.

## Why this matters
- Omitting `Suspense` is simpler but reduces control over perceived performance.
- Users may wait on a full-page response and then immediately hit an error state.

## Next.js / React cautions
- Without `Suspense`, the route cannot show granular loading UI for that async branch.
- Long-running server promises increase TTFB risk and hide progressive rendering opportunities.
- Use this pattern only when partial loading states are unnecessary.

## Try it
- `/?e=0`: server promise resolves and page renders.
- `/?e=1`: server promise rejects with `Error`.
- `/?e=2`: server promise rejects with `CustomError`.
