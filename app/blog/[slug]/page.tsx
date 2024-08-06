import React from "react";
import { Image, Link } from "@chakra-ui/react";
import Markdown from "markdown-to-jsx";
import fs from "fs";
import matter from "gray-matter";

function getPostContent(slug: any) {
  const folder = "posts/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
}

const Posts = (props: any) => {
  const slug = props.params?.slug;
  if (!slug) {
    return <p>No blog post found.</p>;
  }

  const post = getPostContent(slug);
  const title = post?.data.title;
  const date = post?.data.date;

  return (
    <div>
      <h2>{date}</h2>
      <Markdown>{post.content}</Markdown>
    </div>
  );
};

export default Posts;
