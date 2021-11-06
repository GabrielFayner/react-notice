import axios from "axios";

export const api = axios.create({
  baseURL: "https://backend-plathanus.herokuapp.com/",
  // baseURL: "http://localhost:3333/"
});

export default api;
