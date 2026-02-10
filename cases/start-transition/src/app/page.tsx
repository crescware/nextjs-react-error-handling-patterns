import { ReactElement, Suspense } from "react";
import { PageLayout } from "lib/page-layout";
import { SuccessBanner } from "lib/success-banner";
import { ResultText } from "lib/result-text";
import { LoadingBanner } from "lib/loading-banner";
import { TransitionTrigger } from "./transition-trigger";

type Props = {
  searchParams: Promise<{ e?: string }>;
};

async function AsyncContent({ errorType }: { errorType?: string }): Promise<ReactElement> {
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
      <TransitionTrigger errorType={errorType} />
    </>
  );
}

export default async function StartTransitionPage({ searchParams }: Props) {
  const { e: errorType } = await searchParams;

  return (
    <PageLayout title="start-transition">
      <Suspense fallback={<LoadingBanner />}>
        <AsyncContent errorType={errorType} />
      </Suspense>
    </PageLayout>
  );
}
