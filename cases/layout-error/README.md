# layout-error

## What this case verifies
- Errors thrown in the root layout are not handled by same-segment `error.tsx`.
- Root layout failures are handled by `global-error.tsx`.

## Why this matters
- Layout code is shared by every page under that root and has maximum blast radius.
- A small failure in layout initialization can take down the entire app shell.

## Next.js / React cautions
- Layout components do not receive `searchParams`; this case uses middleware to forward URL via `x-url` header.
- Keep root layout logic minimal and deterministic.
- Place critical recovery UX in `global-error.tsx`, not only per-segment boundaries.

## Try it
- `/?e=0`: root layout succeeds.
- `/?e=1`: root layout throws `Error`, handled by `global-error.tsx`.
- `/?e=2`: root layout throws `CustomError`, handled by `global-error.tsx`.
