import fs from "fs";
import path from "path";

const contentPath = path.join(process.cwd(), "src/data/content.json");

export function getContent() {
  try {
    const raw = fs.readFileSync(contentPath, "utf-8");
    return JSON.parse(raw);
  } catch {
    // Return empty object if file not found (Vercel/serverless)
    return {};
  }
}

export function updateContent(newContent: object) {
  try {
    fs.writeFileSync(contentPath, JSON.stringify(newContent, null, 2), "utf-8");
  } catch {
    // On Vercel, file system writes are not persistent - silently fail
    console.warn("Content update: file system write not supported in this environment.");
  }
}
