import { useCallback, useState } from "react";

export function useErrorTrap(enabledTrap: boolean) {
  const [error, setError] = useState<Error | null>(null);
  if (error) {
    throw error;
  }
  const caughtUp = useCallback((e: unknown) => {
    if (!enabledTrap) throw e;
    setError(e instanceof Error ? e : new Error(String(e)));
  }, [enabledTrap]);
  return { caughtUp };
}
