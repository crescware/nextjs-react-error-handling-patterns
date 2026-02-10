import { ReactElement, Suspense } from "react";
import { PageLayout } from "@repo/shared-ui/page-layout";
import { SuccessBanner } from "@repo/shared-ui/success-banner";
import { LoadingBanner } from "@repo/shared-ui/loading-banner";

type Props = {
  searchParams: Promise<{ e?: string }>;
};

class CustomError extends Error {
  name = "CustomError";

  constructor(message: string) {
    super(message);
  }

  debug(): string {
    return "hello world";
  }
}

async function AsyncContent({ errorType }: { errorType?: string }): Promise<ReactElement> {
  console.log(`AsyncContent expectError=${errorType} ${new Date().toISOString()}`);

  const v = await new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (errorType === "1") {
        reject(new Error(`RSC async error (with Suspense boundary) ${new Date().toISOString()}`));
        return;
      }
      if (errorType === "2") {
        reject(
          new CustomError(`RSC async error (with Suspense boundary) ${new Date().toISOString()}`),
        );
        return;
      }
      resolve(`hello ${new Date().toISOString()}`);
    }, 1000);
  });

  return (
    <SuccessBanner>
      <p className="text-gray-900 dark:text-gray-100 ml-auto text-sm">{v}</p>
    </SuccessBanner>
  );
}

export default async function RscPageRoot({ searchParams }: Props) {
  const { e: errorType } = await searchParams;

  console.log(`RscPageRoot expectError=${errorType} ${new Date().toISOString()}`);

  return (
    <PageLayout>
      <Suspense fallback={<LoadingBanner />}>
        <AsyncContent errorType={errorType} />
      </Suspense>
    </PageLayout>
  );
}
