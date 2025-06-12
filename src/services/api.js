import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true // Add this for CORS with credentials
});

// Add request interceptor for CORS headers
api.interceptors.request.use((config) => {
  config.headers['Access-Control-Allow-Origin'] = 'https://frontend-production-2db3.up.railway.app';
  config.headers['Access-Control-Allow-Credentials'] = 'true';
  // Remove any double slashes in the URL except after http(s):
  config.url = config.url.replace(/([^:]\/)\/+/g, "$1");
  return config;
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 500) {
      console.error('Server Error Details:', {
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers
      });
    }
    return Promise.reject(error);
  }
);

export default api;