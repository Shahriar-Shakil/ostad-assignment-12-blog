let BaseUrl = process.env.BASE_URL;
export const newestBlog = `${BaseUrl}/post-newest`;
export const API_BLOGS_CATEGORIES = `${BaseUrl}/post-categories`;
export const blogByCategoryId = (id) => `${BaseUrl}/post-list/${id}`;
export const blogDetails = (id) => `${BaseUrl}/post-details/${id}`;
