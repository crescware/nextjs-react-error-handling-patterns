"use client";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

// This error boundary intentionally throws to demonstrate cascading to global-error.tsx.
export default function ErrorBoundary({ error }: Props) {
  throw new Error(`error.tsx itself threw while handling: ${error.message}`);
}
