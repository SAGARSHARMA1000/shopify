import API from "./axios";

export const placeCODOrder = (data, token) =>
  API.post("/orders", data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const createOnlineOrder = (data, token) =>
  API.post("/orders/online", data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const verifyPayment = (data, token) =>
  API.post("/orders/verify", data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getMyOrders = (token) =>
  API.get("/orders/my", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getAllOrders = (token) =>
  API.get("/orders", {
    headers: { Authorization: `Bearer ${token}` },
  });
  export const updateOrderStatusApi = (id, status, token) =>
  API.put(
    `/orders/${id}/status`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );