// Regenerates index.json: the flat list of skill paths the Felix loader reads
// via raw.githubusercontent (no rate-limited GitHub API calls). Run after adding
// or removing a skill:  node scripts/gen-index.mjs
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

function findSkillFiles(dir, rel = "") {
  const out = [];
  for (const name of readdirSync(dir)) {
    if (name.startsWith(".") || name === "scripts" || name === "node_modules") continue;
    const abs = join(dir, name);
    const relPath = rel ? `${rel}/${name}` : name;
    if (statSync(abs).isDirectory()) {
      out.push(...findSkillFiles(abs, relPath));
    } else if (name === "SKILL.md") {
      out.push(relPath);
    }
  }
  return out;
}

const skills = findSkillFiles(ROOT).sort();
writeFileSync(join(ROOT, "index.json"), JSON.stringify({ skills }, null, 2) + "\n");
console.log(`index.json written: ${skills.length} skills`);
