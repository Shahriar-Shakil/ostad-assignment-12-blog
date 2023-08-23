import PostList from "@/app/components/PostList";
import Container from "@/app/components/container";
import { getCategories } from "@/data/getCategories";
import { getBlogByCategory } from "@/data/getblogByCategory";
import React from "react";

export default async function BlogsByCategory({ params }) {
  const { categoryId } = params;
  const blogs = await getBlogByCategory(categoryId);
  return (
    <Container>
      <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">
        {blogs.map((post) => (
          <PostList key={post.id} post={post} aspect="landscape" />
        ))}
      </div>
    </Container>
  );
}
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const category = await getCategories();

  return category.map((category) => ({
    categoryId: "" + category.id,
  }));
}
