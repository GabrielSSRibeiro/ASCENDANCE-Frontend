import axius from "axios";

const api = axius.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.defaults.headers.authorization = `Bearer ${localStorage.getItem("ESSENCIA:token")}`;

export default api;
