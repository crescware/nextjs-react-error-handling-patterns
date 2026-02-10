"use client";

import { useState, useTransition } from "react";
import { CustomError } from "lib/custom-error";

type Props = {
  errorType?: string;
};

export function TransitionTrigger({ errorType }: Props) {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<string | null>(null);

  const handleClick = () => {
    startTransition(async () => {
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          if (errorType === "1") {
            reject(new Error(`startTransition error ${new Date().toISOString()}`));
            return;
          }
          if (errorType === "2") {
            reject(new CustomError(`startTransition error ${new Date().toISOString()}`));
            return;
          }
          resolve();
        }, 500);
      });
      setStatus(`Success ${new Date().toISOString()}`);
    });
  };

  return (
    <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 flex items-center gap-3">
      <button
        className="px-5 py-2.5 bg-gray-600 text-white text-sm font-medium rounded-lg cursor-pointer hover:bg-gray-700/90 active:bg-gray-700/50 transition-colors"
        onClick={handleClick}
      >
        Trigger transition
      </button>
      {isPending && <p className="text-sm text-gray-500 dark:text-gray-400 ml-auto">Loading...</p>}
      {status && !isPending && (
        <p className="text-sm text-green-700 dark:text-green-400 ml-auto">{status}</p>
      )}
    </div>
  );
}
