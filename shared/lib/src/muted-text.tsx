import { PropsWithChildren } from "react";

export function MutedText({ children }: PropsWithChildren) {
  return <p className="text-sm text-gray-500 dark:text-gray-400">{children}</p>;
}
