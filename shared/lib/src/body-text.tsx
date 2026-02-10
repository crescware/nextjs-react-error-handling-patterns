import { PropsWithChildren } from "react";

export function BodyText({ children }: PropsWithChildren) {
  return <p className="text-gray-900 dark:text-gray-100">{children}</p>;
}
