import { ReactElement } from "react";
import { PageLayout } from "lib/page-layout";
import { SuccessBanner } from "lib/success-banner";
import { ContentSection } from "lib/content-section";
import { BodyText } from "lib/body-text";
import { CustomError } from "lib/custom-error";

type Props = {
  searchParams: Promise<{ e?: string }>;
};

export default async function PageRoot({ searchParams }: Props): Promise<ReactElement> {
  const { e: errorType } = await searchParams;

  console.log("PageRoot", new Date().toISOString());

  const v = await new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (errorType === "1") {
        reject(new Error(`RSC async error (no Suspense boundary) ${new Date().toISOString()}`));
        return;
      }
      if (errorType === "2") {
        reject(
          new CustomError(`RSC async error (no Suspense boundary) ${new Date().toISOString()}`),
        );
        return;
      }
      resolve(`hello ${new Date().toISOString()}`);
    }, 1000);
  });

  return (
    <PageLayout title="rsc-without-suspense">
      <SuccessBanner />
      <ContentSection>
        <BodyText>{v}</BodyText>
      </ContentSection>
    </PageLayout>
  );
}
