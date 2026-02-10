import { PageLayout } from "lib/page-layout";
import { SuccessBanner } from "lib/success-banner";
import { ResultText } from "lib/result-text";
import { FooterSection } from "lib/footer-section";
import { NavLink } from "lib/nav-link";

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
        <ResultText>Root page loaded.</ResultText>
      </SuccessBanner>
      <FooterSection>
        <NavLink href={href}>Navigate to /sub</NavLink>
      </FooterSection>
    </PageLayout>
  );
}
