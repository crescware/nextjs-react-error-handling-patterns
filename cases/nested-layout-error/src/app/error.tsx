"use client";

import { ErrorDisplay } from "lib/error-display";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

// This parent-segment error boundary CATCHES errors from child segment layouts.
export default function ErrorBoundary({ error, reset }: Props) {
  return <ErrorDisplay error={error} reset={reset} />;
}
