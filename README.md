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

## Documentation

- Cases catalog and query params: [`cases/README.md`](cases/README.md)

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Interactive case selector + dev server |
| `pnpm format` | Format with oxfmt |
| `pnpm lint` | Lint with oxlint |
| `pnpm typecheck` | Type check all packages including root |
