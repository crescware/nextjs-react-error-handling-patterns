# nextjs-react-error-handling-patterns

A collection of isolated Next.js 16 + React 19 apps, each demonstrating a specific error handling pattern. Every case is a standalone app in a pnpm workspace, sharing common components via a `shared/lib` package.

## Tech Stack

- Next.js 16.1.6
- React 19.2.3
- TypeScript 5.9.3
- Tailwind CSS 4
- pnpm workspace

## Getting Started

```bash
pnpm install
pnpm dev
```

The dev script presents an interactive menu to select a case. It launches the chosen app and opens the browser with `?e=0&trap=1`.

## Query Parameters

Most cases accept these query parameters to control error behavior:

| Param  | Values       | Description                                    |
|--------|--------------|------------------------------------------------|
| `e`    | `0`, `1`, `2`| `0` = no error, `1` = `Error`, `2` = `CustomError` |
| `trap`  | `0`, `1`     | `1` = enable `useErrorTrap` (callback/effect cases only) |

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

## Shared Library (`shared/lib`)

| Export | Description |
|--------|-------------|
| `useErrorTrap` | Hook to catch errors in callbacks/effects and re-throw at render time for error boundary capture |
| `CustomError` | Error subclass with `debug()` method, used to test whether error boundaries preserve the original class |
| `ErrorDisplay` | Reusable error boundary UI with name, message, stack trace, and reset button |
| `PageLayout` | Centered card container with optional title label |
| `SuccessBanner` | Green success state banner |
| `LoadingBanner` | Blue loading state banner with animation |

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Interactive case selector + dev server |
| `pnpm format` | Format with oxfmt |
| `pnpm lint` | Lint with oxlint |
| `pnpm typecheck` | Type check all packages including root |
