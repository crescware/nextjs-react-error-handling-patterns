import { ReactElement, Suspense } from "react";
import { PageLayout } from "lib/page-layout";
import { SuccessBanner } from "lib/success-banner";
import { LoadingBanner } from "lib/loading-banner";
import { ErrorTrigger } from "./error-trigger";

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
        <p className="text-gray-900 dark:text-gray-100 ml-auto text-sm">{v}</p>
      </SuccessBanner>
      <ErrorTrigger errorType={errorType} />
    </>
  );
}

export default async function CallbackAsyncPage({ searchParams }: Props) {
  const { e: errorType } = await searchParams;

  return (
    <PageLayout>
      <Suspense fallback={<LoadingBanner />}>
        <AsyncContent errorType={errorType} />
      </Suspense>
    </PageLayout>
  );
}
