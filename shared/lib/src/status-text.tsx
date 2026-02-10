import { ReactNode } from "react";

type Props = {
  loading: boolean;
  children: ReactNode;
};

export function StatusText({ loading, children }: Props) {
  return (
    <p
      className={`text-sm ml-auto ${loading ? "text-gray-500 dark:text-gray-400" : "text-green-700 dark:text-green-400"}`}
    >
      {children}
    </p>
  );
}
