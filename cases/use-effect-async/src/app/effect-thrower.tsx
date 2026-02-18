"use client";

import { useEffect, useState } from "react";
import { CustomError } from "lib/custom-error";
import { useErrorTrap } from "lib/use-error-trap";
import { FooterSection } from "lib/footer-section";
import { LabelText } from "lib/label-text";
import { StatusText } from "lib/status-text";

type Props = {
  errorType?: string;
  enabledTrap: boolean;
};

export function EffectThrower({ errorType, enabledTrap }: Props) {
  console.log("EffectThrower", new Date().toISOString());
  const { escalateAsync } = useErrorTrap(enabledTrap);
  const [status, setStatus] = useState<{ text: string; loading: boolean } | null>(null);

  useEffect(() => {
    setStatus({ text: "Loading...", loading: true });
    const run = escalateAsync(async () => {
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          if (errorType === "1") {
            reject(new Error(`useEffect async error ${new Date().toISOString()}`));
            return;
          }
          if (errorType === "2") {
            reject(new CustomError(`useEffect async error ${new Date().toISOString()}`));
            return;
          }
          resolve();
        }, 500);
      });
      setStatus({ text: `Success ${new Date().toISOString()}`, loading: false });
    });
    void run();
  }, [errorType, escalateAsync]);

  return (
    <FooterSection flex>
      <LabelText>Effect fired on mount</LabelText>
      {status && <StatusText loading={status.loading}>{status.text}</StatusText>}
    </FooterSection>
  );
}
