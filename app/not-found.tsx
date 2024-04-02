"use client";
import { Link } from "@chakra-ui/next-js";
import React from "react";

export default function NotFound() {
  return (
    <div className="text-center">
      <h2>Not Found</h2>
      <p>Could not find requested resource!</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
