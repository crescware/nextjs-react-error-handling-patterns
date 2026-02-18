"use client";

import { useState } from "react";
import { CustomError } from "lib/custom-error";
import { useErrorTrap } from "lib/use-error-trap";
import { FooterSection } from "lib/footer-section";
import { ActionButton } from "lib/action-button";
import { SuccessText } from "lib/success-text";

type Props = {
  errorType?: string;
  enabledTrap: boolean;
};

export function ErrorTrigger({ errorType, enabledTrap }: Props) {
  console.log("ErrorTrigger", new Date().toISOString());
  const { escalate } = useErrorTrap(enabledTrap);
  const [status, setStatus] = useState<string | null>(null);

  const handleClick = escalate(() => {
    if (errorType === "1") {
      throw new Error(`Callback sync error ${new Date().toISOString()}`);
    }
    if (errorType === "2") {
      throw new CustomError(`Callback sync error ${new Date().toISOString()}`);
    }
    setStatus(`Success ${new Date().toISOString()}`);
  });

  return (
    <FooterSection flex>
      <ActionButton onClick={handleClick}>Trigger sync callback</ActionButton>
      {status && <SuccessText>{status}</SuccessText>}
    </FooterSection>
  );
}
