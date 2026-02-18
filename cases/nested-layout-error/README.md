# nested-layout-error

## What this case verifies
- A child segment layout failure is not handled by that same child segment's `error.tsx`.
- The error bubbles to the nearest parent segment boundary (`/app/error.tsx` in this case).

## Why this matters
- Nested route trees can give a false sense of isolation for layout failures.
- Correct boundary placement is essential for predictable fallback ownership.

## Next.js / React cautions
- Layouts do not read `searchParams` directly; this case uses middleware and `x-url` header parsing.
- Parent segments should provide boundaries for child layout risk.
- Keep nested layouts focused on composition, not fragile side effects.

## Try it
- Open `/` first, then navigate to `/sub`.
- `/sub?e=0`: child layout succeeds.
- `/sub?e=1`: child layout throws `Error`, handled by parent `error.tsx`.
- `/sub?e=2`: child layout throws `CustomError`, handled by parent `error.tsx`.
