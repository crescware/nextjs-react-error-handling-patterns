"use client";

import { useEffect, useState } from "react";
import { CustomError } from "lib/custom-error";
import { useErrorTrap } from "lib/use-error-trap";
import { FooterSection } from "lib/footer-section";
import { LabelText } from "lib/label-text";
import { SuccessText } from "lib/success-text";

type Props = {
  errorType?: string;
  enabledTrap: boolean;
};

export function EffectThrower({ errorType, enabledTrap }: Props) {
  console.log("EffectThrower", new Date().toISOString());
  const { escalate } = useErrorTrap(enabledTrap);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const run = escalate(() => {
      if (errorType === "1") {
        throw new Error(`useEffect sync error ${new Date().toISOString()}`);
      }
      if (errorType === "2") {
        throw new CustomError(`useEffect sync error ${new Date().toISOString()}`);
      }
      setStatus(`Success ${new Date().toISOString()}`);
    });
    run();
  }, [errorType, escalate]);

  return (
    <FooterSection flex>
      <LabelText>Effect fired on mount</LabelText>
      {status && <SuccessText>{status}</SuccessText>}
    </FooterSection>
  );
}
