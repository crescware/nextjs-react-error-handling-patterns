"use client";

import { useState } from "react";
import { CustomError } from "lib/custom-error";
import { useErrorTrap } from "lib/use-error-trap";

type Props = {
  errorType?: string;
  enabledTrap: boolean;
};

export function ErrorTrigger({ errorType, enabledTrap }: Props) {
  const { escalate } = useErrorTrap(enabledTrap);
  const [status, setStatus] = useState<string | null>(null);

  const handleClick = escalate(() => {
    if (errorType === "1") {
      throw new Error(`Callback sync error ${new Date().toISOString()}`);
    }
    if (errorType === "2") {
      throw new CustomError(`Callback sync error ${new Date().toISOString()}`);
    }
    setStatus(`Success ${new Date().toISOString()}`);
  });

  return (
    <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 flex items-center gap-3">
      <button
        className="px-5 py-2.5 bg-gray-600 text-white text-sm font-medium rounded-lg cursor-pointer hover:bg-gray-700/90 active:bg-gray-700/50 transition-colors"
        onClick={handleClick}
      >
        Trigger sync callback
      </button>
      {status && <p className="text-sm text-green-700 dark:text-green-400 ml-auto">{status}</p>}
    </div>
  );
}
