import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || '',
  timeout: 30000, // 30 seconds timeout
});

// Request interceptor to add auth token
api.interceptors.request.use(
  async (config) => {
    // If we're in development, the proxy will handle the base URL
    // In production, we need to use the full server URL
    if (import.meta.env.PROD && import.meta.env.VITE_BASE_URL) {
      config.baseURL = import.meta.env.VITE_BASE_URL;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default api;
