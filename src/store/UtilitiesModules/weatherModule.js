import { weatherApiBaseUrl, Weather_API_key } from '../../helpers/Constants';
import { apiGETcall } from '../../helpers/api_call';

const moduleWeather = {
  state() {
    return {
      cityName: 'pune',
      responseObject: {},
    };
  },
  mutations: {},
  actions: {
    async getWeather({ state }) {
      const response = await apiGETcall(
        `${weatherApiBaseUrl}q=${state.cityName}&appid=${Weather_API_key}`
      );
      if (response.status === 200) {
        state.responseObject = response.data;
      }
    },
  },
  getters: {},
  modules: {},
};

export default moduleWeather;
