import api from './api';

export const scanService = {
  scanImage: async (imageBlob) => {
    try {
      const formData = new FormData();
      formData.append('image', imageBlob);

      const response = await api.post('/scan/scan', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });

      return response.data;
    } catch (error) {
      console.error('Scan error:', error);
      throw error;
    }
  }
};