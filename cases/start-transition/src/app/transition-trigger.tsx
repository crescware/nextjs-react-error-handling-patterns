"use client";

import { useState, useTransition } from "react";
import { CustomError } from "lib/custom-error";
import { FooterSection } from "lib/footer-section";
import { ActionButton } from "lib/action-button";
import { LoadingText } from "lib/loading-text";
import { SuccessText } from "lib/success-text";

type Props = {
  errorType?: string;
};

export function TransitionTrigger({ errorType }: Props) {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<string | null>(null);

  const handleClick = () => {
    startTransition(async () => {
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          if (errorType === "1") {
            reject(new Error(`startTransition error ${new Date().toISOString()}`));
            return;
          }
          if (errorType === "2") {
            reject(new CustomError(`startTransition error ${new Date().toISOString()}`));
            return;
          }
          resolve();
        }, 500);
      });
      setStatus(`Success ${new Date().toISOString()}`);
    });
  };

  return (
    <FooterSection flex>
      <ActionButton onClick={handleClick}>Trigger transition</ActionButton>
      {isPending && <LoadingText>Loading...</LoadingText>}
      {status && !isPending && <SuccessText>{status}</SuccessText>}
    </FooterSection>
  );
}
