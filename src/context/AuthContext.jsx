import { createContext, useState, useContext, useEffect } from 'react';
import { authService } from '../services/auth.service';
import api from '../services/api'; // Import your api service

// Create the context
const AuthContext = createContext(null);

// Custom hook for using auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = () => {
      try {
        const token = localStorage.getItem('token'); // Check token directly
        const userData = authService.getCurrentUser();
        
        if (token && userData?.name) {
          // If we have both token and user data, set as authenticated
          setUser(userData);
          setIsAuthenticated(true);
          // Set auth header for subsequent API calls
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        // Clear invalid data if any
        authService.logout();
      } finally {
        // Always set loading to false, regardless of auth state
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (credentials) => {
    try {
      setIsLoading(true);
      const response = await authService.login(credentials);
      const userData = authService.getCurrentUser();
      setUser(userData);
      setIsAuthenticated(true);
      return response;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  const register = async (userData) => {
    try {
      const response = await authService.register(userData);
      return response;
    } catch (error) {
      throw {
        message: error.response?.data?.message || 'Registration failed',
        status: error.response?.status,
        data: error.response?.data
      };
    }
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    register
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};