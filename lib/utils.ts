import fs from "fs";
import path from "path";
import matter from "gray-matter";

const newsDir = path.join(process.cwd(), "content/news");

export function getAllNewsIds() {
  const newsFiles = fs.readdirSync(newsDir);
  return newsFiles.map((newsFile) => newsFile.replace(/\.md$/, ""));
}

export function getNewsData(id: string) {
  const newsFile = path.join(newsDir, `${id}.md`);
  const fileContent = fs.readFileSync(newsFile, "utf8");
  const formattedResult = matter(fileContent);
  return {
    id,
    ...formattedResult.data,
  };
}
