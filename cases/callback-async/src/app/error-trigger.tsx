"use client";

import { useState } from "react";
import { CustomError } from "lib/custom-error";
import { useErrorTrap } from "lib/use-error-trap";
import { FooterSection } from "lib/footer-section";
import { ActionButton } from "lib/action-button";
import { StatusText } from "lib/status-text";

type Props = {
  errorType?: string;
  enabledTrap: boolean;
};

export function ErrorTrigger({ errorType, enabledTrap }: Props) {
  console.log("ErrorTrigger", new Date().toISOString());
  const { escalateAsync } = useErrorTrap(enabledTrap);
  const [status, setStatus] = useState<{ text: string; loading: boolean } | null>(null);

  const handleClick = escalateAsync(async () => {
    setStatus({ text: "Loading...", loading: true });
    await new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (errorType === "1") {
          reject(new Error(`Callback async error ${new Date().toISOString()}`));
          return;
        }
        if (errorType === "2") {
          reject(new CustomError(`Callback async error ${new Date().toISOString()}`));
          return;
        }
        resolve();
      }, 500);
    });
    setStatus({ text: `Success ${new Date().toISOString()}`, loading: false });
  });

  return (
    <FooterSection flex>
      <ActionButton onClick={handleClick}>Trigger async callback</ActionButton>
      {status && <StatusText loading={status.loading}>{status.text}</StatusText>}
    </FooterSection>
  );
}
