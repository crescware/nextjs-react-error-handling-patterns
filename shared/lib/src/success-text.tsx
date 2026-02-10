import { PropsWithChildren } from "react";

export function SuccessText({ children }: PropsWithChildren) {
  return <p className="text-sm text-green-700 dark:text-green-400 ml-auto">{children}</p>;
}
