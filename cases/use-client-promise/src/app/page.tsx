import { Suspense } from "react";
import { PageLayout } from "lib/page-layout";
import { LoadingBanner } from "lib/loading-banner";
import { UsePromise } from "./use-promise";

type Props = {
  searchParams: Promise<{ e?: string }>;
};

export default async function UseClientPromisePage({ searchParams }: Props) {
  const { e: errorType } = await searchParams;

  return (
    <PageLayout title="use-client-promise">
      <Suspense fallback={<LoadingBanner />}>
        <UsePromise errorType={errorType} />
      </Suspense>
    </PageLayout>
  );
}
