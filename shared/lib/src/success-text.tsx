import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function SuccessText({ children }: Props) {
  return <p className="text-sm text-green-700 dark:text-green-400 ml-auto">{children}</p>;
}
