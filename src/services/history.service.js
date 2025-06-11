import api from './api';

export const historyService = {
  getHistory: async (page = 1, limit = 10) => {
    try {
      const response = await api.get(`/history?page=${page}&limit=${limit}`);
      console.log('History API Response:', response);
      
      const { history, pagination } = response.data;
      return {
        history: history || [],
        pagination: pagination || {
          page: 1,
          limit: 10,
          totalItems: 0,
          totalPages: 0
        }
      };
    } catch (error) {
      console.error('Error fetching history:', error.response || error);
      throw error;
    }
  }
};