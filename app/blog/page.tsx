import { Image, Link } from "@chakra-ui/react";
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

export default function Blog() {
  const postMetadata = getPostMetadata("posts");

  return (
    <main className="container mx-auto py-8">
      <section className="mb-8">
        <Image
          src="https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero Image 1"
          className="m-auto w-1/2 rounded-lg shadow"
        />
      </section>
      {postMetadata.map((post) => (
        <div key={post.slug}>
          <Link href={`/blog/${post.slug}`}>
            <Image
              src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Post Image"
              className="w-1/4 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                {post?.title || "Placeholder Title"}
              </h3>
              <p className="text-gray-600 mb-2">
                {post?.description || "Placeholder excerpt..."}
              </p>
              <span className="text-sm text-gray-500">
                {post?.date || "May 24, 2023"}
              </span>
              <p>{post?.tags || "No tags for this post"} </p>
            </div>
          </Link>
        </div>
      ))}
    </main>
  );
}
