import axius from "axios";

const api = axius.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.defaults.headers.Authorization = `Bearer ${localStorage.getItem("ESSENCIA:token")}`;

export default api;
