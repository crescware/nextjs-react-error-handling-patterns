import { PropsWithChildren } from "react";

type Props = {
  href: string;
};

export function NavLink({ href, children }: PropsWithChildren<Props>) {
  return (
    <a className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline" href={href}>
      {children}
    </a>
  );
}
