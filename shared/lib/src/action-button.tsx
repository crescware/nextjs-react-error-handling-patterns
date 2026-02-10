import { PropsWithChildren } from "react";

type Props = {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export function ActionButton({ onClick, type, children }: PropsWithChildren<Props>) {
  return (
    <button
      className="px-5 py-2.5 bg-gray-600 text-white text-sm font-medium rounded-lg cursor-pointer hover:bg-gray-700/90 active:bg-gray-700/50 transition-colors"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
