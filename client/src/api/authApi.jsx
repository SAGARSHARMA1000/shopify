import API from "./axios";

export const registerUser = (data) => API.post("/auth/register", data);

export const loginUser = (data) => API.post("/auth/login", data);

// GET PROFILE
export const getProfileApi = () => API.get("/users/profile");

// UPDATE PROFILE
export const updateProfileApi = (data) =>
  API.put("/users/profile", data);

// CHANGE PASSWORD
export const changePasswordApi = (data) =>
  API.put("/users/password", data);

export const deleteAccountApi = () =>
  API.delete("/users/delete");