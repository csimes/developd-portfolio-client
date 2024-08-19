---
title: "Creating a Next.js Blog with App Router and Markdown"
date: 2024-08-19
author: Cherron Simes
tags:
  [
    "Next.js",
    "Static Site Generation",
    "Markdown",
    "Frontmatter",
    "Metadata",
    "App Router",
  ]
description: "Learn how to build a powerful and efficient blog using Next.js, App Router, and Markdown. This comprehensive guide covers everything from setup to deployment, including SEO best practices."
keywords:
  [
    "Next.js blog",
    "App Router",
    "Markdown blog",
    "Static Site Generation",
    "SEO for blogs",
    "gray-matter",
    "markdown-to-jsx",
    "Chakra UI",
    "blog development",
    "React framework",
  ]
---

# Creating a Next.js Blog: Harnessing App Router and Markdown

## Introduction

In this comprehensive guide, we'll walk through the process of building a modern, efficient blog using Next.js, a powerful React framework. We'll leverage the new App Router, along with Markdown for content management, to create a seamless and developer-friendly blogging platform. This approach combines the best of both worlds: the flexibility and ease of writing in Markdown, and the performance and developer experience of Next.js.

## Why Next.js for Blogging?

Next.js has become a go-to choice for building web applications, and it's particularly well-suited for blogs. Here's why:

1. **Static Site Generation (SSG)**: Next.js excels at SSG, allowing us to pre-render our blog posts at build time. This results in blazing-fast page loads and improved SEO.
2. **App Router**: The new App Router in Next.js 13+ provides an intuitive way to structure our application and handle routing, making it easier to organize our blog.
3. **React-based**: Leveraging React's component-based architecture allows for modular and maintainable code.
4. **Built-in optimizations**: Next.js comes with image optimization, code splitting, and other performance enhancements out of the box.

## Understanding Frontmatter and Metadata

Before we dive into the implementation, let's discuss a crucial concept: frontmatter.

Frontmatter is a block of YAML or JSON at the beginning of a Markdown file, used for storing metadata about the content. For a blog post, this might include:

- Title
- Author
- Publication date
- Tags or categories
- Description
- Custom fields (e.g., featured image, reading time)

Here's an example of frontmatter in a Markdown file:

```yaml
---
title: "My Awesome Blog Post"
date: 2024-04-22
author: Cherron Simes
tags: ["Next.js", "React", "Web Development"]
description: "A deep dive into building modern web applications with Next.js"
---
```

This metadata is invaluable for organizing, sorting, and displaying your blog posts.

## Prerequisites

Before we start, ensure you have:

- Node.js (v14 or later)
- A code editor (e.g., Visual Studio Code)
- Basic knowledge of React and JavaScript

## Setting up the Project

Let's begin by creating our Next.js project:

1. Open your terminal and run:
   ```bash
   npx create-next-app@latest my-nextjs-blog
   ```
2. When prompted, choose the following options:

   - Use TypeScript? Yes
   - Use ESLint? Yes
   - Use Tailwind CSS? No (We'll use Chakra UI instead)
   - Use `src/` directory? No
   - Use App Router? Yes
   - Customize the default import alias? No

3. Navigate to your new project:

   ```bash
   cd my-nextjs-blog
   ```

4. Install additional dependencies:
   ```bash
   npm install gray-matter markdown-to-jsx @chakra-ui/react @chakra-ui/next-js @emotion/react @emotion/styled framer-motion
   ```

## Project Structure

Let's set up our project structure:

```
my-nextjs-blog/
├── app/
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── BlogPost.tsx
├── lib/
│   └── posts.ts
├── posts/
│   ├── hello-world.md
│   └── welcome-to-nextjs.md
└── public/
    └── images/
```

## Implementing the Blog

Now, let's implement our blog step by step:

### 1. Fetching Post Metadata

Create `lib/posts.ts`:

```typescript
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostMetadata() {
  const files = fs.readdirSync(postsDirectory);
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
    };
  });
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostContent(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return { data, content };
}
```

### 2. Creating the Blog List Page

Create `app/blog/page.tsx`:

```tsx
import Link from "next/link";
import { getPostMetadata } from "@/lib/posts";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export default function BlogPage() {
  const posts = getPostMetadata();

  return (
    <Box
      maxWidth="800px"
      margin="auto"
      padding={8}
    >
      <Heading
        as="h1"
        mb={8}
      >
        My Blog
      </Heading>
      <VStack
        spacing={8}
        align="stretch"
      >
        {posts.map((post) => (
          <Box
            key={post.slug}
            borderWidth={1}
            borderRadius="lg"
            p={6}
          >
            <Link href={`/blog/${post.slug}`}>
              <Heading
                as="h2"
                size="lg"
                mb={2}
              >
                {post.title}
              </Heading>
            </Link>
            <Text mb={2}>{post.date}</Text>
            <Text>{post.description}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
```

### 3. Implementing Individual Blog Post Pages

Create `app/blog/[slug]/page.tsx`:

```tsx
import { getPostContent, getPostMetadata } from "@/lib/posts";
import Markdown from "markdown-to-jsx";
import { Box, Heading, Text } from "@chakra-ui/react";

export async function generateStaticParams() {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { data, content } = getPostContent(params.slug);

  return (
    <Box
      maxWidth="800px"
      margin="auto"
      padding={8}
    >
      <Heading
        as="h1"
        mb={4}
      >
        {data.title}
      </Heading>
      <Text mb={8}>{data.date}</Text>
      <Box className="prose">
        <Markdown>{content}</Markdown>
      </Box>
    </Box>
  );
}
```

### 4. Setting up Chakra UI

Update `app/layout.tsx`:

```tsx
import { ChakraProvider } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
```

## SEO Optimization

To improve SEO, let's add metadata to our pages:

Update `app/blog/page.tsx`:

```tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Blog | Your Name",
  description: "Welcome to my blog about web development and technology.",
};

// ... rest of the component
```

Update `app/blog/[slug]/page.tsx`:

```tsx
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { data } = getPostContent(params.slug);
  return {
    title: `${data.title} | Your Name`,
    description: data.description,
  };
}

// ... rest of the component
```

## Deployment

To deploy your Next.js blog:

1. Push your code to a GitHub repository.
2. Sign up for a Vercel account and connect it to your GitHub account.
3. Import your blog repository into Vercel.
4. Vercel will automatically detect that it's a Next.js project and set up the build configuration.
5. Click "Deploy" and your blog will be live in minutes!

## Conclusion

Congratulations! You've now created a powerful, SEO-friendly blog using Next.js, App Router, and Markdown. This setup provides a solid foundation that you can further customize and expand upon.

Remember to:

- Write engaging content in your Markdown files
- Regularly update your blog with new posts
- Optimize your images and use alt tags
- Consider adding features like comments, social sharing, and an RSS feed

Happy blogging!
