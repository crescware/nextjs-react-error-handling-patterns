"use client";

import { useActionState } from "react";
import { submitAction } from "./action";
import { FooterSection } from "lib/footer-section";
import { ActionButton } from "lib/action-button";
import { LoadingText } from "lib/loading-text";
import { SuccessText } from "lib/success-text";

type Props = {
  errorType?: string;
};

export function ActionForm({ errorType }: Props) {
  console.log("ActionForm", new Date().toISOString());
  const [state, formAction, isPending] = useActionState(submitAction, null);

  return (
    <FooterSection flex>
      <form action={formAction}>
        <input type="hidden" name="errorType" value={errorType ?? ""} />
        <ActionButton type="submit">Submit action</ActionButton>
      </form>
      {isPending && <LoadingText>Loading...</LoadingText>}
      {state && !isPending && <SuccessText>{state}</SuccessText>}
    </FooterSection>
  );
}
