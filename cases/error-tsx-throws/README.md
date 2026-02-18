# error-tsx-throws

## What this case verifies
- If a segment `error.tsx` throws while handling another error, Next.js escalates to `global-error.tsx`.
- The global boundary is the final safety net when local boundary rendering fails.

## Why this matters
- Error UIs can fail due to unsafe assumptions, missing data guards, or secondary exceptions.
- You need a hardened global fallback to prevent a blank or broken application shell.

## Next.js / React cautions
- Treat `error.tsx` as critical-path code: minimal dependencies, defensive rendering, no fragile parsing.
- Never assume `error.message` shape beyond basic `Error` contract.
- Keep `global-error.tsx` extremely robust because its blast radius is app-wide.

## Try it
- `/?e=0`: no page error, no boundary cascade.
- `/?e=1`: page throws `Error`, then `error.tsx` re-throws and `global-error.tsx` handles.
- `/?e=2`: same cascade with `CustomError` as original source.
