export function LoadingBanner() {
  return (
    <div className="bg-blue-50 dark:bg-blue-950 border-b border-blue-100 dark:border-blue-800 px-6 py-4 flex items-center gap-3">
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-lg font-bold animate-spin">
        ↻
      </span>
      <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-300">Loading...</h2>
    </div>
  );
}
