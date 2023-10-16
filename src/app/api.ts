import axios from "axios";

import apiConfig from "./config/apiConfig";

export const api = axios.create({
  baseURL: apiConfig.API_URL || "http://localhost:3333", // Sua URL base
});
