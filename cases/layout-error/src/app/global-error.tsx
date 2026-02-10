"use client";

import "./globals.css";
import { ErrorDisplay } from "lib/error-display";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: Props) {
  return (
    <html lang="en">
      <body>
        <ErrorDisplay error={error} reset={reset} />
      </body>
    </html>
  );
}
