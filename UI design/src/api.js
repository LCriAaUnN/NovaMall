// Importing the axios library, which is used to make HTTP requests
import axios from "axios";

// Importing a constant that holds the key for the access token in local storage
import { ACCESS_TOKEN } from "./constants";

// The base URL for the API
const apiUrl = "http://localhost:8000";

// Creating an instance of axios with the base URL set to the API URL
const api = axios.create({
  baseURL: apiUrl
});

// Adding an interceptor to the axios instance. This interceptor will run before each request is sent.
// If there is a token in local storage, it will add it to the Authorization header of the request.
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  // If there's an error with setting up the request, this function will be called.
  (error) => {
    return Promise.reject(error);
  }
);

// Exporting the configured axios instance for use in other parts of the application
export default api;