# use-action-state

## What this case verifies
- A server action invoked through `useActionState` can fail and route the failure to `error.tsx`.
- Pending and success UI from `useActionState` coexists with boundary-based fatal error handling.

## Why this matters
- Server actions are often used for mutations where both expected validation and unexpected failures occur.
- Teams need a clear rule for when to return state vs when to throw.

## Next.js / React cautions
- Use returned action state for recoverable business errors users can fix.
- Throw only for exceptional or infrastructure-level failures.
- Keep action inputs explicit and validated, even for hidden fields.

## Try it
- `/?e=0`: action resolves and returns success text.
- `/?e=1`: action rejects with `Error`, handled by `error.tsx`.
- `/?e=2`: action rejects with `CustomError`, handled by `error.tsx`.
