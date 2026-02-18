import { ReactElement, Suspense } from "react";
import { PageLayout } from "lib/page-layout";
import { SuccessBanner } from "lib/success-banner";
import { ResultText } from "lib/result-text";
import { LoadingBanner } from "lib/loading-banner";
import { ErrorTrigger } from "./error-trigger";

type Props = {
  searchParams: Promise<{ e?: string; trap?: string }>;
};

async function AsyncContent({
  errorType,
  enabledTrap,
}: {
  errorType?: string;
  enabledTrap: boolean;
}): Promise<ReactElement> {
  console.log("AsyncContent", new Date().toISOString());
  const v = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`hello ${new Date().toISOString()}`);
    }, 1000);
  });

  return (
    <>
      <SuccessBanner>
        <ResultText>{v}</ResultText>
      </SuccessBanner>
      <ErrorTrigger errorType={errorType} enabledTrap={enabledTrap} />
    </>
  );
}

export default async function PageRoot({ searchParams }: Props) {
  console.log("PageRoot", new Date().toISOString());
  const { e: errorType, trap } = await searchParams;
  const enabledTrap = trap === "1";

  return (
    <PageLayout title="callback-sync">
      <Suspense fallback={<LoadingBanner />}>
        <AsyncContent errorType={errorType} enabledTrap={enabledTrap} />
      </Suspense>
    </PageLayout>
  );
}
