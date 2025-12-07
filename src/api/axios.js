import axios from "axios";

// Ganti dengan URL ngrok kamu
const api = axios.create({
  baseURL: "", // link api
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
