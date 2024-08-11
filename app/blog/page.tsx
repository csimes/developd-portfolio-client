import React from "react";
import NextLink from "next/link";
import {
  Image,
  Link,
  Box,
  Text,
  Heading,
  Flex,
  Container,
  Grid,
  GridItem,
  Tag,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Calendar, Clock } from "lucide-react";
import getPostMetadata from "../../utils/posts";

export const generateStaticParams = async () => {
  const posts = getPostMetadata("posts");
  return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata(params: any) {
  const id = params?.slug ? " ⋅ " + params?.slug : "";
  return {
    title: `developd | blog ${id.replaceAll("_", " ")}`,
  };
}

const formatTags = (tags: any): React.ReactNode => {
  if (!tags || (Array.isArray(tags) && tags.length === 0)) {
    return (
      <Tag
        size="sm"
        variant="outline"
      >
        No tags
      </Tag>
    );
  }

  if (Array.isArray(tags)) {
    return (
      <Flex
        flexWrap="wrap"
        gap={2}
      >
        {tags.map((tag, index) => (
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
    );
  }

  if (typeof tags === "string") {
    return (
      <Tag
        size="sm"
        variant="outline"
        colorScheme="blue"
      >
        {tags}
      </Tag>
    );
  }

  return (
    <Tag
      size="sm"
      variant="outline"
    >
      Invalid tags
    </Tag>
  );
};

export default function Blog() {
  const postMetadata = getPostMetadata("posts");

  return (
    <Container
      maxW="container.xl"
      py={12}
    >
      <VStack
        spacing={8}
        align="stretch"
      >
        <Box
          position="relative"
          height="400px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero Image"
            objectFit="cover"
            w="100%"
            h="100%"
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bg="rgba(0,0,0,0.6)"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={8}
            textAlign="center"
          >
            <Heading
              color="white"
              size="2xl"
              mb={4}
            >
              Welcome to Our Blog
            </Heading>
            <Text
              color="whiteAlpha.800"
              fontSize="xl"
            >
              Explore our latest articles and stay updated with the newest
              trends
            </Text>
          </Box>
        </Box>

        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={8}
        >
          {postMetadata.map((post, index) => (
            <GridItem key={post.slug}>
              <Box
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                transition="all 0.3s"
                _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
                height="100%"
                display="flex"
                flexDirection="column"
              >
                <Image
                  src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Post Image"
                  objectFit="cover"
                  h="200px"
                />
                <VStack
                  p={6}
                  align="stretch"
                  flex={1}
                  justify="space-between"
                >
                  <Box>
                    <Box mb={3}>{formatTags(post.tags)}</Box>
                    <Link
                      as={NextLink}
                      href={`/blog/${post.slug}`}
                    >
                      <Heading
                        size="md"
                        mb={2}
                        noOfLines={2}
                      >
                        {post.title || "Untitled Blog"}
                      </Heading>
                    </Link>
                    <Text
                      color="gray.600"
                      noOfLines={3}
                      mb={4}
                    >
                      {post.description || "No description"}
                    </Text>
                  </Box>
                  <HStack
                    spacing={4}
                    fontSize="sm"
                    color="gray.500"
                  >
                    <Flex align="center">
                      <Calendar
                        size={16}
                        style={{ marginRight: "4px" }}
                      />
                      <Text>{post.date || "No Date"}</Text>
                    </Flex>
                    <Flex align="center">
                      <Clock
                        size={16}
                        style={{ marginRight: "4px" }}
                      />
                      <Text>5 min read</Text>
                    </Flex>
                  </HStack>
                </VStack>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Container>
  );
}
