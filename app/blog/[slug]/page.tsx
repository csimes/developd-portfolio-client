import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Image,
  ListItem,
  UnorderedList,
  OrderedList,
  Link,
  Code,
  Flex,
  Tag,
} from "@chakra-ui/react";
import { Calendar, Clock } from "lucide-react";
import { getPostBySlug, getAllPostSlugs, Post } from "../../../utils/posts";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

const MarkdownComponents = {
  h1: (props: any) => (
    <Heading
      as="h1"
      size="2xl"
      my={4}
      {...props}
    />
  ),
  h2: (props: any) => (
    <Heading
      as="h2"
      size="xl"
      my={4}
      {...props}
    />
  ),
  h3: (props: any) => (
    <Heading
      as="h3"
      size="lg"
      my={3}
      {...props}
    />
  ),
  h4: (props: any) => (
    <Heading
      as="h4"
      size="md"
      my={2}
      {...props}
    />
  ),
  p: (props: any) => (
    <Text
      mb={2}
      fontSize="md"
      {...props}
    />
  ),
  ul: (props: any) => (
    <UnorderedList
      my={2}
      {...props}
    />
  ),
  ol: (props: any) => (
    <OrderedList
      my={2}
      {...props}
    />
  ),
  li: (props: any) => <ListItem {...props} />,
  a: (props: any) => (
    <Link
      color="blue.500"
      {...props}
    />
  ),
  code: (props: any) => (
    <Code
      p={2}
      {...props}
    />
  ),
};

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <Container
      maxW="container.md"
      py={12}
    >
      <VStack
        spacing={8}
        align="stretch"
      >
        {post.frontMatter.image && (
          <Box
            borderRadius="lg"
            overflow="hidden"
          >
            <Image
              src={post.frontMatter.image}
              alt={post.frontMatter.title}
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
            {post.frontMatter.title}
          </Heading>
          <Flex
            align="center"
            fontSize="sm"
            color="gray.500"
          >
            <Calendar
              size={16}
              style={{ marginRight: "4px" }}
            />
            <Text mr={4}>{post.frontMatter.date}</Text>
            <Clock
              size={16}
              style={{ marginRight: "4px" }}
            />
            <Text>{post.frontMatter.readTime} min read</Text>
          </Flex>
          <Flex
            wrap="wrap"
            gap={2}
          >
            {post.frontMatter.tags.map((tag, index) => (
              <Tag
                key={index}
                size="sm"
                variant="outline"
                colorScheme="blue"
              >
                {tag}
              </Tag>
            ))}
          </Flex>
        </VStack>
        <Box className="blog-content">
          <ReactMarkdown components={MarkdownComponents}>
            {post.content}
          </ReactMarkdown>
        </Box>
      </VStack>
    </Container>
  );
}
