import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function ResultText({ children }: Props) {
  return <p className="text-gray-900 dark:text-gray-100 ml-auto text-sm">{children}</p>;
}
