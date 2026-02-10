"use client";

import { use } from "react";
import { SuccessBanner } from "lib/success-banner";

type Props = {
  dataPromise: Promise<string>;
};

export function UsePromise({ dataPromise }: Props) {
  const v = use(dataPromise);

  return (
    <SuccessBanner>
      <p className="text-gray-900 dark:text-gray-100 ml-auto text-sm">{v}</p>
    </SuccessBanner>
  );
}
