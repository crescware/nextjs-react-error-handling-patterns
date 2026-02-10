import { ReactElement, Suspense } from "react";
import { PageLayout } from "lib/page-layout";
import { SuccessBanner } from "lib/success-banner";
import { LoadingBanner } from "lib/loading-banner";
import { EffectThrower } from "./effect-thrower";

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
      <EffectThrower errorType={errorType} enabledTrap={enabledTrap} />
    </>
  );
}

export default async function UseEffectSyncPage({ searchParams }: Props) {
  const { e: errorType, trap } = await searchParams;
  const enabledTrap = trap === "1";

  return (
    <PageLayout title="use-effect-sync">
      <Suspense fallback={<LoadingBanner />}>
        <AsyncContent errorType={errorType} enabledTrap={enabledTrap} />
      </Suspense>
    </PageLayout>
  );
}
