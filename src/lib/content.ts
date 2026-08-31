import fs from "fs";
import path from "path";

const contentPath = path.join(process.cwd(), "src/data/content.json");

export function getContent() {
  const raw = fs.readFileSync(contentPath, "utf-8");
  return JSON.parse(raw);
}

export function updateContent(newContent: object) {
  fs.writeFileSync(contentPath, JSON.stringify(newContent, null, 2), "utf-8");
}
