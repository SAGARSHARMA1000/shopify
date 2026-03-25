import API from "./axios";

export const fetchProducts = () => API.get("/products");

export const fetchProductById = (id) => API.get(`/products/${id}`);

export const createProduct = (data, token) =>
  API.post("/products", data, {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data"
 },
  });

export const updateProduct = (id, data, token) =>
  API.put(`/products/${id}`, data, {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
  });

export const deleteProductApi = (id, token) =>
  API.delete(`/products/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  export const fetchHotDeals = () =>
  API.get("/products/hot-deals");

export const fetchLatestHotDeal = () =>
  API.get("/products/hot-deal/latest");