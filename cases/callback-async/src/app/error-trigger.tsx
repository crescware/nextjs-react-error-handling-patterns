"use client";

import { useState } from "react";
import { CustomError } from "lib/custom-error";

type Props = {
  errorType?: string;
};

export function ErrorTrigger({ errorType }: Props) {
  const [status, setStatus] = useState<{ text: string; loading: boolean } | null>(null);

  async function handleClick() {
    setStatus({ text: "Loading...", loading: true });
    await new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (errorType === "1") {
          reject(new Error(`Callback async error ${new Date().toISOString()}`));
          return;
        }
        if (errorType === "2") {
          reject(new CustomError(`Callback async error ${new Date().toISOString()}`));
          return;
        }
        resolve();
      }, 500);
    });
    setStatus({ text: `Success ${new Date().toISOString()}`, loading: false });
  }

  return (
    <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 flex items-center gap-3">
      <button
        className="px-5 py-2.5 bg-gray-600 text-white text-sm font-medium rounded-lg cursor-pointer hover:bg-gray-700/90 active:bg-gray-700/50 transition-colors"
        onClick={handleClick}
      >
        Trigger async callback
      </button>
      {status && (
        <p className={`text-sm ml-auto ${status.loading ? "text-gray-500 dark:text-gray-400" : "text-green-700 dark:text-green-400"}`}>{status.text}</p>
      )}
    </div>
  );
}
