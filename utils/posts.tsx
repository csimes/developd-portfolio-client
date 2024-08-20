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

export async function getPostMetadata(): Promise<PostMetadata[]> {
  const fileNames = await fs.readdir(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = await fs.readFile(fullPath, "utf8");
      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title,
        date: formatDate(matterResult.data.date),
        description: matterResult.data.description,
        tags: matterResult.data.tags || [],
        image: matterResult.data.image,
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

  return {
    frontMatter: {
      slug,
      title: data.title,
      date: formatDate(data.date),
      description: data.description,
      tags: data.tags || [],
      image: data.image,
    },
    content,
  };
}

export async function getAllPostSlugs(): Promise<string[]> {
  const fileNames = await fs.readdir(postsDirectory);
  return fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
}
