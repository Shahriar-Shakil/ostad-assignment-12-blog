import { newestBlog } from "./apis";

export const getNewestBlog = async () => {
  try {
    const res = await fetch(newestBlog, { cache: "no-store" });
    return res.json();
  } catch (error) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
};
