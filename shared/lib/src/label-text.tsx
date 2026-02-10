import { PropsWithChildren } from "react";

export function LabelText({ children }: PropsWithChildren) {
  return <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{children}</p>;
}
