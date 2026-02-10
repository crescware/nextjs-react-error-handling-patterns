import { PropsWithChildren } from "react";

type Props = {
  flex?: boolean;
};

export function FooterSection({ flex, children }: PropsWithChildren<Props>) {
  return (
    <div
      className={`px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700${flex ? " flex items-center gap-3" : ""}`}
    >
      {children}
    </div>
  );
}
