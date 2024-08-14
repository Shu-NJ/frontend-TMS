import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-tms-vca7.onrender.com/api",
});
export default api;
