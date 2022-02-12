import fs from "fs";
import matter from "gray-matter";

import path from "path";

const postsDirectory = path.join(process.cwd(), "content", "posts");

function getData(fileName) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);
  data.content = content;
  const slug = fileName.replace(/\.md$/, "");
  data.slug = slug;

  return data;
}

export function getAll() {
  const files = fs.readdirSync(postsDirectory);

  const data = files.map(getData);

  return data.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getFeatured() {
  const all = getAll();

  return all.filter((x) => x.isFeatured);
}