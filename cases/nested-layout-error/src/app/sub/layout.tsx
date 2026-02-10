import { headers } from "next/headers";
import { CustomError } from "lib/custom-error";

export default async function SubLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const url = headersList.get("x-url");
  const errorType = url ? new URL(url).searchParams.get("e") : null;

  if (errorType === "1") {
    throw new Error(`Nested layout error ${new Date().toISOString()}`);
  }
  if (errorType === "2") {
    throw new CustomError(`Nested layout error ${new Date().toISOString()}`);
  }

  return children;
}
