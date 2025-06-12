import api from './api';

export const historyService = {
  getHistory: async (page = 1, limit = 10) => {
    try {
      const response = await api.get(`/history?page=${page}&limit=${limit}`);
      
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
      throw error;
    }
  }
};