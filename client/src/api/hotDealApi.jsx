// api/hotDealApi.js

import API from "./axios";

export const getHotDealBanner = () => API.get("/hotdeal/banner");

export const saveHotDealBanner = (form) =>
  API.post("/hotdeal/banner", form);


export const deleteHotDealBanner = () =>
  API.delete("/hotdeal/banner");
