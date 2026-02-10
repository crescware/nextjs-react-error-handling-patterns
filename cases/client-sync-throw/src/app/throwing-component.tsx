"use client";

import { CustomError } from "lib/custom-error";

type Props = {
  errorType?: string;
};

export function ThrowingComponent({ errorType }: Props) {
  if (errorType === "1") {
    throw new Error(`Client sync throw error ${new Date().toISOString()}`);
  }
  if (errorType === "2") {
    throw new CustomError(`Client sync throw error ${new Date().toISOString()}`);
  }

  return (
    <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        No error triggered. Use <code>?e=1</code> or <code>?e=2</code> to throw during render.
      </p>
    </div>
  );
}
