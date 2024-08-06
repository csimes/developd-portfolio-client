import fs from "fs";
import matter from "gray-matter";

const getPostMetadata = (basePath) => {
  const postDirectory = basePath + "/";
  const files = fs.readdirSync(postDirectory);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // get the file data
  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      slug: filename.replace(".md", ""),
      description: matterResult.data.description,
      tags: matterResult.data.tags,
    };
  });
  return posts;
};

export default getPostMetadata;
