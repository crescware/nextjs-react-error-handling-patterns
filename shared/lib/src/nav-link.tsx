import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

export function NavLink({ href, children }: Props) {
  return (
    <a className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline" href={href}>
      {children}
    </a>
  );
}
