import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkPresetLintMarkdownStyleGuide from "remark-preset-lint-markdown-style-guide";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "articlesData"); // Define the posts directory

export async function getArticlesData() {
  const fileNames = fs.readdirSync(postsDirectory); // Get all file names in the directory
  const allArticlesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ""); // Remove ".md" from file name to get id

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const { title, description, datePublished, url } = matterResult.data;

    // Use remark to convert markdown into HTML string
    const processedContent = remark()
      .use(remarkHtml)
      .processSync(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
      id,
      contentHtml,
      title,
      description,
      datePublished,
      url,
    };
  });

  return allArticlesData;
}

export async function getArticleData(id: string) {
  console.log(id);
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = remark()
    .use(remarkPresetLintMarkdownStyleGuide)
    .use(remarkHtml)
    .processSync(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    ...matterResult.data,
  };
}
