import { ReactElement, Suspense } from "react";
import { PageLayout } from "lib/page-layout";
import { SuccessBanner } from "lib/success-banner";
import { ResultText } from "lib/result-text";
import { LoadingBanner } from "lib/loading-banner";
import { CustomError } from "lib/custom-error";

type Props = {
  searchParams: Promise<{ e?: string }>;
};

async function AsyncContent({ errorType }: { errorType?: string }): Promise<ReactElement> {
  console.log("AsyncContent", new Date().toISOString());
  const v = await new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (errorType === "1") {
        reject(new Error(`Page error ${new Date().toISOString()}`));
        return;
      }
      if (errorType === "2") {
        reject(new CustomError(`Page error ${new Date().toISOString()}`));
        return;
      }
      resolve(`hello ${new Date().toISOString()}`);
    }, 1000);
  });

  return (
    <SuccessBanner>
      <ResultText>{v}</ResultText>
    </SuccessBanner>
  );
}

export default async function PageRoot({ searchParams }: Props) {
  console.log("PageRoot", new Date().toISOString());
  const { e: errorType } = await searchParams;

  return (
    <PageLayout title="error-tsx-throws">
      <Suspense fallback={<LoadingBanner />}>
        <AsyncContent errorType={errorType} />
      </Suspense>
    </PageLayout>
  );
}
