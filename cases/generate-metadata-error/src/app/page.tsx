import type { Metadata } from "next";
import { PageLayout } from "lib/page-layout";
import { SuccessBanner } from "lib/success-banner";
import { CustomError } from "lib/custom-error";

type Props = {
  searchParams: Promise<{ e?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { e: errorType } = await searchParams;

  await new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (errorType === "1") {
        reject(new Error(`generateMetadata error ${new Date().toISOString()}`));
        return;
      }
      if (errorType === "2") {
        reject(new CustomError(`generateMetadata error ${new Date().toISOString()}`));
        return;
      }
      resolve();
    }, 500);
  });

  return {
    title: "generate-metadata-error - Success",
  };
}

export default async function GenerateMetadataErrorPage() {
  const v = `hello ${new Date().toISOString()}`;

  return (
    <PageLayout title="generate-metadata-error">
      <SuccessBanner>
        <p className="text-gray-900 dark:text-gray-100 ml-auto text-sm">{v}</p>
      </SuccessBanner>
    </PageLayout>
  );
}
