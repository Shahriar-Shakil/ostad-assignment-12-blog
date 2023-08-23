import { blogDetails } from "./apis";

export const getBlogDetails = async (id) => {
  try {
    const res = await fetch(blogDetails(id));
    return res.json();
  } catch (error) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
};
