"use client";

import { CustomError } from "lib/custom-error";
import { FooterSection } from "lib/footer-section";
import { MutedText } from "lib/muted-text";

type Props = {
  errorType?: string;
};

export function ThrowingComponent({ errorType }: Props) {
  if (errorType === "1") {
    throw new Error(`Client sync throw error ${new Date().toISOString()}`);
  }
  if (errorType === "2") {
    throw new CustomError(`Client sync throw error ${new Date().toISOString()}`);
  }

  return (
    <FooterSection>
      <MutedText>
        No error triggered. Use <code>?e=1</code> or <code>?e=2</code> to throw during render.
      </MutedText>
    </FooterSection>
  );
}
