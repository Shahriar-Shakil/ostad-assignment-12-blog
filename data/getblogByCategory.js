import { blogByCategoryId } from "./apis";

export const getBlogByCategory = async (id) => {
  try {
    const res = await fetch(blogByCategoryId(id));
    return res.json();
  } catch (error) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
};
