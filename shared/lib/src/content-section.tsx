import { PropsWithChildren } from "react";

export function ContentSection({ children }: PropsWithChildren) {
  return <div className="px-6 py-5">{children}</div>;
}
