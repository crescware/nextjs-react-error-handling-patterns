import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function BodyText({ children }: Props) {
  return <p className="text-gray-900 dark:text-gray-100">{children}</p>;
}
