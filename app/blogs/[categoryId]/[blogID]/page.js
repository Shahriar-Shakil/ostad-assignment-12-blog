import React from "react";
import { getCategories } from "@/data/getCategories";
import Container from "@/app/components/container";
import { getBlogByCategory } from "@/data/getblogByCategory";
import { getBlogDetails } from "@/data/getBlogDetails";
import { parseISO, format } from "date-fns";
import Image from "next/image";
import { imageBlurData } from "@/utils/all";

export default async function SingleBlog({ params }) {
  const { blogID, categoryId } = params;
  const post = await getBlogDetails(blogID);
  const { postDetails } = post ?? {};
  // const blog = await
  if (postDetails === null) {
    return (
      <Container>
        <p className="text-red-500">Post Details is Null</p>
      </Container>
    );
  }
  return (
    <>
      <Container>
        <div className="max-w-screen-md mx-auto ">
          <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
            {postDetails.title}
          </h1>

          <div className="flex justify-center mt-3 space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
              <div>
                <div className="flex items-center space-x-2 text-sm">
                  <time
                    className="text-gray-500 dark:text-gray-400"
                    dateTime={postDetails?.updated_at || postDetails.created_at}
                  >
                    {format(
                      parseISO(
                        postDetails?.updated_at || postDetails.created_at
                      ),
                      "MMMM dd, yyyy"
                    )}
                  </time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative z-0 max-w-screen-lg mx-auto overflow-hidden lg:rounded-lg aspect-video">
        <Image
          src={postDetails.img}
          blurDataURL={imageBlurData}
          alt="blog image"
          placeholder="blur"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <Container>
        <article className="max-w-screen-md mx-auto ">
          <div className="mx-auto my-3 prose prose-base dark:prose-invert prose-a:text-blue-500">
            {postDetails.content}
          </div>
        </article>
      </Container>
    </>
  );
}
export async function generateStaticParams() {
  const categories = await getCategories();
  // let blogs = [];
  const allBlogsByCategory = await Promise.all(
    categories.map(async (category) => {
      const postByCategory = await getBlogByCategory(category.id);
      return postByCategory;
    })
  );
  const blogs = [].concat(...allBlogsByCategory);

  return blogs.map((post) => ({
    blogID: "" + post.id,
  }));
}
