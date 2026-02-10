import { PropsWithChildren } from "react";

export function SuccessBanner({ children }: PropsWithChildren) {
  return (
    <div className="bg-green-50 dark:bg-green-950 border-b border-green-100 dark:border-green-800 px-6 py-4 flex items-center gap-3">
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 text-lg font-bold">
        ✓
      </span>
      <h2 className="text-lg font-semibold text-green-800 dark:text-green-300">Success</h2>
      {children}
    </div>
  );
}
