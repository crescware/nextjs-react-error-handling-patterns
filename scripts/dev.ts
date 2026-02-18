import { select } from "@inquirer/prompts";
import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { spawn, execSync } from "node:child_process";

const casesDir = resolve(import.meta.dirname, "..", "cases");
const casesCatalog = readFileSync(resolve(casesDir, "README.md"), "utf8");
const caseDescriptions = new Map(
  casesCatalog
    .split(/\r?\n/)
    .map((line) => line.match(/^\|\s*`([a-z0-9-]+)`\s*\|\s*(.+?)\s*\|\s*$/)?.slice(1))
    .filter(
      (
        entry,
      ): entry is [string, string] =>
        Array.isArray(entry) && entry.length === 2 && entry[0] !== "e" && entry[0] !== "trap",
    ),
);

const cases = readdirSync(casesDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();
const maxNameLength = Math.max(...cases.map((name) => name.length));

async function main(): Promise<void> {
  let selected: string;
  try {
    selected = await select({
      message: "Select a case to run:",
      choices: cases.map((name, index) => ({
        name: `${String(index + 1).padStart(2, "0")}. ${name.padEnd(maxNameLength)} - ${caseDescriptions.get(name) ?? "No description available"}`,
        value: name,
      })),
      loop: false,
    });
  } catch {
    process.exit(0);
  }

  const child = spawn("pnpm", ["--filter", selected, "dev"], {
    stdio: ["inherit", "pipe", "inherit"],
  });

  process.on("SIGINT", () => {
    child.kill("SIGINT");
    process.exit(0);
  });

  let opened = false;
  child.stdout?.on("data", (data: Buffer) => {
    process.stdout.write(data);
    if (!opened) {
      const match = data.toString().match(/http:\/\/localhost:\d+/);
      if (match) {
        opened = true;
        execSync(`open "${match[0]}?e=0&trap=1"`);
      }
    }
  });

  child.on("exit", (code) => {
    process.exit(code ?? 0);
  });
}

main();
