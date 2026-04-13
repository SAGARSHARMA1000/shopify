import axios from "axios";
// const API_BASE = import.meta.env.VITE_APP_API_BASE || "http://localhost:5000/api";
const API_BASE = import.meta.env.VITE_APP_API_BASE;

const API = axios.create({
  baseURL: API_BASE
});

API.interceptors.request.use((req) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  if (userInfo?.token) {
    req.headers.Authorization = `Bearer ${userInfo.token}`;
  }
  return req;
});

export default API;