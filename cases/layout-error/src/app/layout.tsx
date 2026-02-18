import { headers } from "next/headers";
import { CustomError } from "lib/custom-error";
import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("RootLayout", new Date().toISOString());
  const headersList = await headers();
  const url = headersList.get("x-url");
  const errorType = url ? new URL(url).searchParams.get("e") : null;

  if (errorType === "1") {
    throw new Error(`Layout error ${new Date().toISOString()}`);
  }
  if (errorType === "2") {
    throw new CustomError(`Layout error ${new Date().toISOString()}`);
  }

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
