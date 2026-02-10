"use client";

import { useEffect, useState } from "react";
import { CustomError } from "lib/custom-error";
import { useErrorTrap } from "lib/use-error-trap";

type Props = {
  errorType?: string;
  enabledTrap: boolean;
};

export function EffectThrower({ errorType, enabledTrap }: Props) {
  const { escalate } = useErrorTrap(enabledTrap);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const run = escalate(() => {
      if (errorType === "1") {
        throw new Error(`useEffect sync error ${new Date().toISOString()}`);
      }
      if (errorType === "2") {
        throw new CustomError(`useEffect sync error ${new Date().toISOString()}`);
      }
      setStatus(`Success ${new Date().toISOString()}`);
    });
    run();
  }, [errorType, escalate]);

  return (
    <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 flex items-center gap-3">
      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Effect fired on mount</p>
      {status && <p className="text-sm text-green-700 dark:text-green-400 ml-auto">{status}</p>}
    </div>
  );
}
