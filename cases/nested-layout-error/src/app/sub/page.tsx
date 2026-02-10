import { PageLayout } from "lib/page-layout";
import { SuccessBanner } from "lib/success-banner";

export default async function SubPage() {
  const v = `hello ${new Date().toISOString()}`;

  return (
    <PageLayout title="nested-layout-error / sub">
      <SuccessBanner>
        <p className="text-gray-900 dark:text-gray-100 ml-auto text-sm">{v}</p>
      </SuccessBanner>
    </PageLayout>
  );
}
