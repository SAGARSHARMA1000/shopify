// api/userApi.js


import API from "./axios";

export const fetchCustomers = async () => {
  const res = await API.get("/users/customers");
  return res.data;
};