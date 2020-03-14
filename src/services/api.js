import axius from "axios";

const api = axius.create({
  baseURL: process.env.API_URL
});

export default api;
