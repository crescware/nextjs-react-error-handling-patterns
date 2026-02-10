"use client";

import { ErrorDisplay } from "lib/error-display";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorBoundary({ error, reset }: Props) {
  return <ErrorDisplay error={error} reset={reset} />;
}
