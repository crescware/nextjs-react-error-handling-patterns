import { ReactElement, Suspense } from "react";

type Props = {
  searchParams: Promise<{ e?: string }>;
};

class CustomError extends Error {
  name = "CustomError";

  constructor(message: string) {
    super(message);
  }

  debug(): string {
    return "hello world";
  }
}

async function AsyncContent({ errorType }: { errorType?: string }): Promise<ReactElement> {
  console.log(`AsyncContent expectError=${errorType} ${new Date().toISOString()}`);

  const v = await new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (errorType === "1") {
        reject(new Error(`RSC async error (with Suspense boundary) ${new Date().toISOString()}`));
        return;
      }
      if (errorType === "2") {
        reject(
          new CustomError(
            `RSC async error (with Suspense boundary) ${new Date().toISOString()}`,
          ),
        );
        return;
      }
      resolve(`hello ${new Date().toISOString()}`);
    }, 1000);
  });

  return (
    <div className="bg-green-50 dark:bg-green-950 border-b border-green-100 dark:border-green-800 px-6 py-4 flex items-center gap-3">
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 text-lg font-bold">
        ✓
      </span>
      <h2 className="text-lg font-semibold text-green-800 dark:text-green-300">Success</h2>
      <p className="text-gray-900 dark:text-gray-100 ml-auto text-sm">{v}</p>
    </div>
  );
}

export default async function RscPageRoot({ searchParams }: Props) {
  const { e: errorType } = await searchParams;

  console.log(`RscPageRoot expectError=${errorType} ${new Date().toISOString()}`);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 p-6">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <Suspense
          fallback={
            <div className="bg-blue-50 dark:bg-blue-950 border-b border-blue-100 dark:border-blue-800 px-6 py-4 flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-lg font-bold animate-spin">
                ↻
              </span>
              <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-300">
                Loading...
              </h2>
            </div>
          }
        >
          <AsyncContent errorType={errorType} />
        </Suspense>
      </div>
    </div>
  );
}
