# rsc-with-suspense

## What this case verifies
- An async React Server Component can suspend for loading and still fail into `error.tsx` if the promise rejects.
- `Suspense` fallback and error boundary serve different phases: loading vs failure.

## Why this matters
- Server-side data fetching naturally mixes latency and failure.
- You need separate UX paths for slow responses and hard errors.

## Next.js / React cautions
- `Suspense` does not catch errors; it only renders fallback while waiting.
- Keep thrown server errors meaningful and sanitized for user-facing surfaces.
- Verify retry/reset behavior from `error.tsx` when server work is retried.

## Try it
- `/?e=0`: resolves successfully after fallback.
- `/?e=1`: rejects with `Error`, handled by `error.tsx`.
- `/?e=2`: rejects with `CustomError`, handled by `error.tsx`.
