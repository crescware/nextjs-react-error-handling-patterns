import { useCallback, useState } from "react";

export function useErrorTrap(enabledTrap: boolean) {
  const [error, setError] = useState<Error | null>(null);

  const caughtUp = useCallback(
    (e: unknown) => {
      if (!enabledTrap) throw e;
      setError(e instanceof Error ? e : new Error(String(e)));
    },
    [enabledTrap],
  );

  const escalate = useCallback(
    <ARGS extends unknown[], RETURN>(
      fn: (...args: ARGS) => RETURN,
    ): ((...args: ARGS) => RETURN | void) => {
      return (...args: ARGS) => {
        try {
          return fn(...args);
        } catch (e) {
          caughtUp(e);
          return;
        }
      };
    },
    [caughtUp],
  );

  const escalateAsync = useCallback(
    <ARGS extends unknown[], RETURN>(
      fn: (...args: ARGS) => Promise<RETURN>,
    ): ((...args: ARGS) => Promise<RETURN | void>) => {
      return async (...args: ARGS) => {
        try {
          return await fn(...args);
        } catch (e) {
          caughtUp(e);
          return;
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
