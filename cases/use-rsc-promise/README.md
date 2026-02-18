# use-rsc-promise

## What this case verifies
- A server-created promise can be passed to a client component and consumed with React `use()`.
- Rejections from that promise surface through the route error boundary.

## Why this matters
- This pattern is useful when server-side data orchestration is needed, but final rendering is client-driven.
- It clarifies ownership of loading and error states across the server/client boundary.

## Next.js / React cautions
- Keep promise creation deterministic on the server side for each request.
- Combine `Suspense` (loading) and `error.tsx` (failure) intentionally; one does not replace the other.
- Be explicit about what error details are safe to expose in UI.

## Try it
- `/?e=0`: promise resolves and `use()` returns data.
- `/?e=1`: promise rejects with `Error`.
- `/?e=2`: promise rejects with `CustomError`.
