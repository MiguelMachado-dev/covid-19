import api from '@/services';

export default {
  async getInitialData() {
    const response = await api.get('/countries');

    this.countryList = response.data;
  },
};
