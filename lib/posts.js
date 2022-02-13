import fs from "fs";
import matter from "gray-matter";

import path from "path";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export function getFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getSlug(fileName) {
  return fileName.replace(/\.md$/, "");
}

export function getData(fileName) {
  const slug = getSlug(fileName);

  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);
  data.content = content;
  data.slug = slug;

  return data;
}

export function getAll() {
  const files = getFiles();

  const data = files.map(getData);

  return data.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getFeatured() {
  const all = getAll();

  return all.filter((x) => x.isFeatured);
}
