"use server";

import { CustomError } from "lib/custom-error";

export async function submitAction(
  _previousState: string | null,
  formData: FormData,
): Promise<string> {
  const errorType = formData.get("errorType") as string;

  await new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (errorType === "1") {
        reject(new Error(`Server action error ${new Date().toISOString()}`));
        return;
      }
      if (errorType === "2") {
        reject(new CustomError(`Server action error ${new Date().toISOString()}`));
        return;
      }
      resolve();
    }, 500);
  });

  return `Success ${new Date().toISOString()}`;
}
