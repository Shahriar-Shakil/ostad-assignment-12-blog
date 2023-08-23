import Container from "@/components/container";
import { getCategories } from "@/data/getCategories";
import React from "react";
import Link from "next/link";
import { imageBlurData } from "@/utils/all";
import Image from "next/image";
export default async function Category() {
  const data = await getCategories();

  return (
    <Container>
      <h3 className="text-2xl font-semibold  mb-4"> Our Categories</h3>

      <div className="grid gap-10 lg:gap-10 md:grid-cols-6 ">
        {data.map((category) => (
          <div key={category.id}>
            <Link href={`/blogs/${category.id}`}>
              <Image src={imageBlurData} width={100} height={100}></Image>
              {category.name}
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}
