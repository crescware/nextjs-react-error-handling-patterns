"use client";

import { ErrorDisplay } from "lib/error-display";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

// This error boundary does NOT catch errors from the layout in the same segment.
// The global-error boundary handles those instead.
export default function ErrorBoundary({ error, reset }: Props) {
  return <ErrorDisplay error={error} reset={reset} />;
}
