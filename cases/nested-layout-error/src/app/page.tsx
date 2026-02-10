import { PageLayout } from "lib/page-layout";
import { SuccessBanner } from "lib/success-banner";

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function RootPage({ searchParams }: Props) {
  const params = await searchParams;
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (typeof value === "string") {
      query.set(key, value);
    }
  }
  const qs = query.toString();
  const href = `/sub${qs ? `?${qs}` : ""}`;

  return (
    <PageLayout title="nested-layout-error">
      <SuccessBanner>
        <p className="text-gray-900 dark:text-gray-100 ml-auto text-sm">Root page loaded.</p>
      </SuccessBanner>
      <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
        <a
          href={href}
          className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
        >
          Navigate to /sub
        </a>
      </div>
    </PageLayout>
  );
}
