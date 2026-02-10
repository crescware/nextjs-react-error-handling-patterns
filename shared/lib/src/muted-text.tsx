import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function MutedText({ children }: Props) {
  return <p className="text-sm text-gray-500 dark:text-gray-400">{children}</p>;
}
