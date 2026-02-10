import { ReactNode } from "react";

type Props = {
  title?: string;
  children: ReactNode;
};

export function PageLayout({ title, children }: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 p-6">
      {title && (
        <p className="fixed top-2 left-2 text-xs text-gray-400 dark:text-gray-500">{title}</p>
      )}
      <div className="max-w-2xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        {children}
      </div>
    </div>
  );
}
