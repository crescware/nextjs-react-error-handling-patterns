import { PageLayout } from "lib/page-layout";
import { SuccessBanner } from "lib/success-banner";
import { ResultText } from "lib/result-text";

export default async function SubPage() {
  const v = `hello ${new Date().toISOString()}`;

  return (
    <PageLayout title="nested-layout-error / sub">
      <SuccessBanner>
        <ResultText>{v}</ResultText>
      </SuccessBanner>
    </PageLayout>
  );
}
