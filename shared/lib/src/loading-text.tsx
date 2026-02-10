import { PropsWithChildren } from "react";

export function LoadingText({ children }: PropsWithChildren) {
  return <p className="text-sm text-gray-500 dark:text-gray-400 ml-auto">{children}</p>;
}
