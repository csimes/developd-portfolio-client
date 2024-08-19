import React from "react";
import { Box, Container, Heading, Text, VStack, Image } from "@chakra-ui/react";
import Markdown from "markdown-to-jsx";
import fs from "fs";
import matter from "gray-matter";

interface PostFrontmatter {
  title: string;
  date: string | Date;
  image?: string;
  [key: string]: any; // Allow for additional frontmatter fields
}

interface PostContent {
  data: PostFrontmatter;
  content: string;
}

function getPostContent(slug: string): PostContent {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  // Ensure required fields are present and of the correct type
  const data: PostFrontmatter = {
    title: matterResult.data.title || "Untitled",
    date: matterResult.data.date || new Date(),
    image: matterResult.data.image,
    ...matterResult.data,
  };

  return {
    data,
    content: matterResult.content,
  };
}

const formatDate = (date: string | Date): string => {
  if (typeof date === "string") {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const Posts = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  if (!slug) {
    return <Text>No blog post found.</Text>;
  }

  const post = getPostContent(slug);
  const { title, date, image } = post.data;

  return (
    <Container
      maxW="container.md"
      py={12}
    >
      <VStack
        spacing={8}
        align="stretch"
      >
        {image && (
          <Box
            borderRadius="lg"
            overflow="hidden"
          >
            <Image
              src={image}
              alt={title}
              objectFit="cover"
              w="100%"
              h="400px"
            />
          </Box>
        )}
        <VStack
          align="start"
          spacing={4}
        >
          <Heading
            as="h1"
            size="2xl"
          >
            {title}
          </Heading>
          <Text
            fontSize="lg"
            color="gray.500"
          >
            {formatDate(date)}
          </Text>
        </VStack>
        <Box className="blog-content">
          <Markdown>{post.content}</Markdown>
        </Box>
      </VStack>
    </Container>
  );
};

export default Posts;
