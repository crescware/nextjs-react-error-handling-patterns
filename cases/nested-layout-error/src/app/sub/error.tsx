"use client";

import { ErrorDisplay } from "lib/error-display";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

// This same-segment error boundary does NOT catch errors from its own layout.
// The error propagates up to the parent segment's error boundary instead.
export default function ErrorBoundary({ error, reset }: Props) {
  return <ErrorDisplay error={error} reset={reset} />;
}
