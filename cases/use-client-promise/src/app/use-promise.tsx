"use client";

import { use, useMemo } from "react";
import { SuccessBanner } from "lib/success-banner";
import { CustomError } from "lib/custom-error";

type Props = {
  errorType?: string;
};

export function UsePromise({ errorType }: Props) {
  const dataPromise = useMemo(() => {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (errorType === "1") {
          reject(new Error(`use() rejected promise ${new Date().toISOString()}`));
          return;
        }
        if (errorType === "2") {
          reject(new CustomError(`use() rejected promise ${new Date().toISOString()}`));
          return;
        }
        resolve(`hello ${new Date().toISOString()}`);
      }, 1000);
    });
  }, [errorType]);

  const v = use(dataPromise);

  return (
    <SuccessBanner>
      <p className="text-gray-900 dark:text-gray-100 ml-auto text-sm">{v}</p>
    </SuccessBanner>
  );
}
