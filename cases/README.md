# Cases

This directory contains standalone Next.js apps that each focus on one React/Next.js error handling pattern.

## Query Parameters

Most cases accept these query parameters to control error behavior:

| Param  | Values       | Description                                    |
|--------|--------------|------------------------------------------------|
| `e`    | `0`, `1`, `2`| `0` = no error, `1` = `Error`, `2` = `CustomError` |
| `trap` | `0`, `1`     | `1` = enable `useErrorTrap` (callback/effect cases only) |

## Cases

### RSC (React Server Component)

| Case | Pattern |
|------|---------|
| `rsc-with-suspense` | Async RSC error inside a Suspense boundary |
| `rsc-without-suspense` | Async RSC error without Suspense |

### Client Component Render

| Case | Pattern |
|------|---------|
| `client-sync-throw` | Error thrown during client component render |

### Callback

| Case | Pattern |
|------|---------|
| `callback-sync` | Sync callback error via `useErrorTrap.escalate()` |
| `callback-async` | Async callback error via `useErrorTrap.escalateAsync()` |

### useEffect

| Case | Pattern |
|------|---------|
| `use-effect-sync` | Sync throw inside `useEffect` via `useErrorTrap.escalate()` |
| `use-effect-async` | Async rejection inside `useEffect` via `useErrorTrap.escalateAsync()` |

### React 19 Hooks

| Case | Pattern |
|------|---------|
| `use-rsc-promise` | `use()` hook unwrapping a server-created promise |
| `use-client-promise` | `use()` hook unwrapping a client-created promise |
| `start-transition` | Async error inside `startTransition` |
| `use-action-state` | Server action error via `useActionState` form submission |

### Layout & Metadata

| Case | Pattern |
|------|---------|
| `layout-error` | Root layout throws, caught by `global-error.tsx` |
| `nested-layout-error` | Child layout throws, propagates to parent segment `error.tsx` |
| `generate-metadata-error` | Error thrown inside `generateMetadata` |

### Error Boundary Edge Cases

| Case | Pattern |
|------|---------|
| `error-tsx-throws` | `error.tsx` itself throws, cascading to `global-error.tsx` |
