import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.PROD 
    ? 'https://trashurebackend-production.up.railway.app'
    : '/api',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

// Enhanced error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 500) {
      console.error('Server Error Details:', {
        endpoint: error.config.url,
        method: error.config.method,
        data: error.response.data,
        status: error.response.status,
        message: error.message
      });
    }
    return Promise.reject(error);
  }
);

export default api;