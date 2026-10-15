import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";

const entry = new URL("../.output/server/index.mjs", import.meta.url);

if (!existsSync(entry)) {
  console.log("[start] .output missing, building first...");
  const result = spawnSync("npm", ["run", "build"], {
    stdio: "inherit",
    shell: true,
    env: { ...process.env, NITRO_PRESET: "node-server", NODE_ENV: "production" },
  });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

await import(entry.href);