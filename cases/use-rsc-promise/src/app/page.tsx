import { Suspense } from "react";
import { PageLayout } from "lib/page-layout";
import { LoadingBanner } from "lib/loading-banner";
import { CustomError } from "lib/custom-error";
import { UsePromise } from "./use-promise";

type Props = {
  searchParams: Promise<{ e?: string }>;
};

function createDataPromise(errorType?: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (errorType === "1") {
        reject(new Error(`use() rejected promise ${new Date().toISOString()}`));
        return;
      }
      if (errorType === "2") {
        reject(new CustomError(`use() rejected promise ${new Date().toISOString()}`));
        return;
      }
      resolve(`hello ${new Date().toISOString()}`);
    }, 1000);
  });
}

export default async function PageRoot({ searchParams }: Props) {
  console.log("PageRoot", new Date().toISOString());
  const { e: errorType } = await searchParams;
  const dataPromise = createDataPromise(errorType);

  return (
    <PageLayout title="use-rsc-promise">
      <Suspense fallback={<LoadingBanner />}>
        <UsePromise dataPromise={dataPromise} />
      </Suspense>
    </PageLayout>
  );
}
