import { writeFileSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const line = "I can breathe underwater, but only in the bath, and only if I hold my breath first.";

const dirs = [process.env.MAKEFUN_OUTPUT_DIR, "/output", "output", tmpdir()];
let done = false;
for (const d of dirs) {
  if (!d) continue;
  try {
    mkdirSync(d, { recursive: true });
    writeFileSync(join(d, "entry.txt"), line);
    done = true;
    break;
  } catch {}
}
if (!done) throw new Error("could not write entry.txt");

