import { PageLayout } from "lib/page-layout";
import { SuccessBanner } from "lib/success-banner";
import { ResultText } from "lib/result-text";

export default async function LayoutErrorPage() {
  const v = `hello ${new Date().toISOString()}`;

  return (
    <PageLayout title="layout-error">
      <SuccessBanner>
        <ResultText>{v}</ResultText>
      </SuccessBanner>
    </PageLayout>
  );
}
