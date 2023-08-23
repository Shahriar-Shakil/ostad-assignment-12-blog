import { API_BLOGS_CATEGORIES } from "./apis";

export const getCategories = async () => {
  try {
    const res = await fetch(API_BLOGS_CATEGORIES);
    return res.json();
  } catch (error) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
};
