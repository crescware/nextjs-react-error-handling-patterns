import { ReactElement } from "react";

export default async function RscPageRoot(): Promise<ReactElement> {
  const v = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`hello ${new Date().toISOString()}`);
    }, 1000);
  });

  return <h1>{v}</h1>;
}
