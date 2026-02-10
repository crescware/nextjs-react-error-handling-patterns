"use client";

import { ErrorDisplay } from "@repo/shared-ui/error-display";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorBoundary({ error, reset }: Props) {
  return <ErrorDisplay error={error} reset={reset} />;
}
