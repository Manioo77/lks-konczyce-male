import fs from "fs";
import path from "path";
import matter from "gray-matter";

const newsDir = path.join(process.cwd(), "public/content/news");

export function getAllNewsBasicData() {
  const newsFiles = fs.readdirSync(newsDir);
  const newsContentFiles = newsFiles.filter((f) => f.match(/\.md$/));
  const newsBasicData = newsContentFiles.map((newsFile) => {
    const fileContent = fs.readFileSync(path.join(newsDir, newsFile), "utf8");
    const formattedResult = matter(fileContent);
    const id = newsFile.replace(/\.md$/, "");
    const image = newsFiles.find(
      (f) => f.includes(id) && f.match(/\.png$|\.jpg|\.jpeg$$/)
    );
    return {
      id,
      imageUrl: image ? `/content/news/${image}` : null,
      ...formattedResult.data,
    };
  });

  return newsBasicData;
}

export function getSingleNewsData(id: string) {
  const newsFile = path.join(newsDir, `${id}.md`);
  const fileContent = fs.readFileSync(newsFile, "utf8");
  const formattedResult = matter(fileContent);
  return {
    id,
    ...formattedResult.data,
  };
}
