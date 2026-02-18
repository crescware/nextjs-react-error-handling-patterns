import { useCallback, useState } from "react";

export function useErrorTrap(enabledTrap: boolean) {
  const [error, setError] = useState<Error | null>(null);

  const caughtUp = useCallback(
    (e: unknown) => {
      if (!enabledTrap) {
        throw e;
      }
      if (!(e instanceof Error)) {
        throw e;
      }
      setError(e);
    },
    [enabledTrap],
  );

  const escalate = useCallback(
    <ARGS extends unknown[]>(fn: (...args: ARGS) => void): ((...args: ARGS) => void) => {
      return (...args: ARGS) => {
        try {
          fn(...args);
        } catch (e) {
          caughtUp(e);
        }
      };
    },
    [caughtUp],
  );

  const escalateAsync = useCallback(
    <ARGS extends unknown[]>(
      fn: (...args: ARGS) => Promise<void>,
    ): ((...args: ARGS) => Promise<void>) => {
      return async (...args: ARGS) => {
        try {
          await fn(...args);
        } catch (e) {
          caughtUp(e);
        }
      };
    },
    [caughtUp],
  );

  if (error) {
    throw error;
  }

  return { caughtUp, escalate, escalateAsync };
}
