import axius from "axios";

const api = axius.create({
  baseURL: "http://localhost:3333"
});

export default api;
