"use client";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export default function NotFound() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      minHeight="calc(100vh - 136px)" // 100vh minus (96px nav + 40px footer)
      p={4}
    >
      <Flex
        flexDirection={isLargerThan768 ? "row" : "column"}
        alignItems="center"
        justifyContent="center"
        maxWidth="1200px"
        width="100%"
      >
        <VStack
          spacing={6}
          textAlign="center"
          maxW="400px"
          w="100%"
          mb={isLargerThan768 ? 0 : 8}
        >
          <Heading fontSize={["2xl", "3xl", "4xl"]}>Uh oh..</Heading>
          <Heading
            fontSize={["xl", "2xl", "3xl"]}
            fontWeight="normal"
          >
            Something went wrong
          </Heading>
          <Text fontSize={["md", "lg"]}>
            Looks like this page doesn&apos;t exist or was removed.
          </Text>
        </VStack>
        <Box ml={isLargerThan768 ? 12 : 0}>
          <Image
            boxSize={isLargerThan768 ? "40vw" : "80vw"}
            maxW="400px"
            src="/assets/404.png"
            alt="404 Illustration"
          />
        </Box>
      </Flex>
    </Flex>
  );
}
