# start-transition

## What this case verifies
- Errors originating in asynchronous transition work can surface to route error handling.
- `useTransition` pending UI is independent from error boundary fallback rendering.

## Why this matters
- Transitions are commonly used for non-blocking updates after user actions.
- Failures during transition tasks should be deliberate, observable, and recoverable.

## Next.js / React cautions
- Keep transition actions focused on state coordination; isolate risky async work.
- Pending indicators should not be your only failure strategy.
- Validate how your app behaves when transition work rejects after partial UI updates.

## Try it
- `/?e=0`: transition completes and success status appears.
- `/?e=1`: transition task rejects with `Error`.
- `/?e=2`: transition task rejects with `CustomError`.
