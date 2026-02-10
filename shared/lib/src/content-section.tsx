import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function ContentSection({ children }: Props) {
  return <div className="px-6 py-5">{children}</div>;
}
