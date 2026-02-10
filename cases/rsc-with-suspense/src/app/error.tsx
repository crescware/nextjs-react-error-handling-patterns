"use client";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorBoundary({ error, reset }: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 p-6">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="bg-red-50 dark:bg-red-950 border-b border-red-100 dark:border-red-800 px-6 py-4 flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 text-lg font-bold">
            !
          </span>
          <h2 className="text-lg font-semibold text-red-800 dark:text-red-300">
            {error.name}: {error.message}
          </h2>
        </div>

        <div className="px-6 py-5 space-y-4">
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
            <dt className="font-medium text-gray-500 dark:text-gray-400">Name</dt>
            <dd className="text-gray-900 dark:text-gray-100">{error.name}</dd>
            <dt className="font-medium text-gray-500 dark:text-gray-400">Message</dt>
            <dd className="text-gray-900 dark:text-gray-100">{error.message}</dd>
            <dt className="font-medium text-gray-500 dark:text-gray-400">has debug()</dt>
            <dd className="text-gray-900 dark:text-gray-100">
              {typeof (error as any).debug === "function" ? "true" : "false"}
            </dd>
          </dl>

          {error.stack && (
            <details className="group">
              <summary className="text-sm font-medium text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-700 dark:hover:text-gray-300 select-none">
                Stack trace
              </summary>
              <pre className="mt-2 p-4 bg-gray-900 dark:bg-gray-950 text-gray-100 text-xs leading-relaxed rounded-lg overflow-x-auto whitespace-pre-wrap break-words">
                {error.stack}
              </pre>
            </details>
          )}
        </div>

        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
          <button
            className="px-5 py-2.5 bg-gray-600 text-white text-sm font-medium rounded-lg cursor-pointer hover:bg-gray-700 transition-colors"
            onClick={reset}
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
