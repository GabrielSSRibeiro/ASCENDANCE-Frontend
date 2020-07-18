import axius from "axios";

const api = axius.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default api;
