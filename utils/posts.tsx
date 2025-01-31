import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  image?: string;
  readTime: number;
}

export interface Post {
  frontMatter: PostMetadata;
  content: string;
}

function formatDate(date: Date | string): string {
  if (typeof date === "string") {
    date = new Date(date);
  }
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

function isValidHttpUrl(string: string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

function getImagePath(image: string | undefined) {
  if (!image) return "/public/assets/default-blog-image.jpg";
  return isValidHttpUrl(image) ? image : `/images/${image}`;
}

export async function getPostMetadata(): Promise<PostMetadata[]> {
  const fileNames = await fs.readdir(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = await fs.readFile(fullPath, "utf8");
      const matterResult = matter(fileContents);
      const readTime = calculateReadTime(matterResult.content);

      return {
        slug,
        title: matterResult.data.title,
        date: formatDate(matterResult.data.date),
        description: matterResult.data.description,
        tags: matterResult.data.tags || [],
        image: getImagePath(matterResult.data.image),
        readTime,
      } as PostMetadata;
    })
  );

  return allPostsData.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const readTime = calculateReadTime(content);

  return {
    frontMatter: {
      slug,
      title: data.title,
      date: formatDate(data.date),
      description: data.description,
      tags: data.tags || [],
      image: getImagePath(data.image),
      readTime,
    },
    content,
  };
}

export async function getAllPostSlugs(): Promise<string[]> {
  const fileNames = await fs.readdir(postsDirectory);
  return fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
}
