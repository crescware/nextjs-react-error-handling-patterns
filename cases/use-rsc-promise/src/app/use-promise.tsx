"use client";

import { use } from "react";
import { SuccessBanner } from "lib/success-banner";
import { ResultText } from "lib/result-text";

type Props = {
  dataPromise: Promise<string>;
};

export function UsePromise({ dataPromise }: Props) {
  const v = use(dataPromise);

  return (
    <SuccessBanner>
      <ResultText>{v}</ResultText>
    </SuccessBanner>
  );
}
