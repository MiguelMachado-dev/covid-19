import api from '@/services';

export default {
  async getInitialData() {
    const response = await api.get('/v2/countries');

    this.countryList = response.data;
  },
};
