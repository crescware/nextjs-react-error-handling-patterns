"use client";

import { useEffect, useState } from "react";
import { CustomError } from "lib/custom-error";
import { useErrorTrap } from "lib/use-error-trap";

type Props = {
  errorType?: string;
  enabledTrap: boolean;
};

export function EffectThrower({ errorType, enabledTrap }: Props) {
  const { escalateAsync } = useErrorTrap(enabledTrap);
  const [status, setStatus] = useState<{ text: string; loading: boolean } | null>(null);

  useEffect(() => {
    setStatus({ text: "Loading...", loading: true });
    const run = escalateAsync(async () => {
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          if (errorType === "1") {
            reject(new Error(`useEffect async error ${new Date().toISOString()}`));
            return;
          }
          if (errorType === "2") {
            reject(new CustomError(`useEffect async error ${new Date().toISOString()}`));
            return;
          }
          resolve();
        }, 500);
      });
      setStatus({ text: `Success ${new Date().toISOString()}`, loading: false });
    });
    void run();
  }, [errorType, escalateAsync]);

  return (
    <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 flex items-center gap-3">
      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Effect fired on mount</p>
      {status && (
        <p
          className={`text-sm ml-auto ${status.loading ? "text-gray-500 dark:text-gray-400" : "text-green-700 dark:text-green-400"}`}
        >
          {status.text}
        </p>
      )}
    </div>
  );
}
