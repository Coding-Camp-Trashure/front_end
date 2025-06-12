import api from './api';

const STORAGE_KEY = {
  TOKEN: 'token',
  USER: 'trashure_user'
};

export const authService = {
  login: async (credentials) => {
    try {
      const response = await api.post('/auth/login', credentials);
      const data = response.data;
      
      if (data?.token) {
        localStorage.setItem(STORAGE_KEY.TOKEN, data.token);
        api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
        
        const userInfo = {
          name: data.name || credentials.email.split('@')[0],
          email: credentials.email
        };
        localStorage.setItem(STORAGE_KEY.USER, JSON.stringify(userInfo));
        
        return data;
      }
      throw new Error('No token received from server');
    } catch (error) {
      console.error('Login error:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data
      });
      throw error;
    }
  },

  register: async (userData) => {
    try {
      const response = await api.post('/auth/register', userData);
      const data = response.data;
      
      if (data?.token) {
        // Store token
        localStorage.setItem(STORAGE_KEY.TOKEN, data.token);
        api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
        
        // Store user info from registration response
        const userInfo = {
          name: data.name,
          email: data.email
        };
        localStorage.setItem(STORAGE_KEY.USER, JSON.stringify(userInfo));
        
        return data;
      }
      throw new Error('No token received from server');
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },

  getCurrentUser: () => {
    try {
      const userStr = localStorage.getItem(STORAGE_KEY.USER);
      console.log('Getting user from storage:', userStr);
      return userStr ? JSON.parse(userStr) : null;
    } catch (error) {
      console.error('Error getting user data:', error);
      return null;
    }
  },

  logout: () => {
    localStorage.removeItem(STORAGE_KEY.TOKEN);
    localStorage.removeItem(STORAGE_KEY.USER);
    delete api.defaults.headers.common['Authorization'];
  }
};