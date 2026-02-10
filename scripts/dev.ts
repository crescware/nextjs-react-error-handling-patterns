import { select } from "@inquirer/prompts";
import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { execSync } from "node:child_process";

const casesDir = resolve(import.meta.dirname, "..", "cases");

const cases = readdirSync(casesDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();

const selected = await select({
  message: "Select a case to run:",
  choices: cases.map((name) => ({ name, value: name })),
});

execSync(`pnpm --filter ${selected} dev`, { stdio: "inherit" });
