import { PropsWithChildren } from "react";

type Props = {
  loading: boolean;
};

export function StatusText({ loading, children }: PropsWithChildren<Props>) {
  return (
    <p
      className={`text-sm ml-auto ${loading ? "text-gray-500 dark:text-gray-400" : "text-green-700 dark:text-green-400"}`}
    >
      {children}
    </p>
  );
}
