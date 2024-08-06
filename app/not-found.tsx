"use client";
import { Link } from "@chakra-ui/next-js";
import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import React from "react";

export default function NotFound() {
  return (
    <Flex
      maxH="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
    >
      <Box textAlign="center">
        <Heading
          mb={4}
          className="color-medium-orange"
        >
          Uh oh..
        </Heading>
        <Heading
          mb={6}
          size="lg"
          fontWeight="normal"
        >
          Something went wrong
        </Heading>
        <Text mb={8}>
          Looks like this page doesn&apos;t exist or was removed.
        </Text>
        <Button
          size="lg"
          as="a"
          href="/"
          className="bg-medium-orange transition duration-300 hover:scale-105 transform"
        >
          Back to Home
        </Button>
      </Box>
      <Box mt={12}>
        <Image
          boxSize="50vw"
          src="/assets/404.png"
          alt="404 Illustration"
        />
      </Box>
    </Flex>
  );
}
