import { PropsWithChildren } from "react";

export function ResultText({ children }: PropsWithChildren) {
  return <p className="text-gray-900 dark:text-gray-100 ml-auto text-sm">{children}</p>;
}
