import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function LabelText({ children }: Props) {
  return <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{children}</p>;
}
