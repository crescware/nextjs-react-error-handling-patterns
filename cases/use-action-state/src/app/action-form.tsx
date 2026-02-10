"use client";

import { useActionState } from "react";
import { submitAction } from "./action";

type Props = {
  errorType?: string;
};

export function ActionForm({ errorType }: Props) {
  const [state, formAction, isPending] = useActionState(submitAction, null);

  return (
    <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 flex items-center gap-3">
      <form action={formAction}>
        <input type="hidden" name="errorType" value={errorType ?? ""} />
        <button
          type="submit"
          className="px-5 py-2.5 bg-gray-600 text-white text-sm font-medium rounded-lg cursor-pointer hover:bg-gray-700/90 active:bg-gray-700/50 transition-colors"
        >
          Submit action
        </button>
      </form>
      {isPending && <p className="text-sm text-gray-500 dark:text-gray-400 ml-auto">Loading...</p>}
      {state && !isPending && (
        <p className="text-sm text-green-700 dark:text-green-400 ml-auto">{state}</p>
      )}
    </div>
  );
}
