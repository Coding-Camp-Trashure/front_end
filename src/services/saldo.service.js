import api from './api';

export const saldoService = {
  getSaldo: async () => {
    try {
      const response = await api.get('/saldo');
      return response.data;
    } catch (error) {
      console.error('Error fetching saldo:', error);
      throw error;
    }
  }
};