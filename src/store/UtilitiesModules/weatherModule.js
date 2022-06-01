import { weatherApiBaseUrl, Weather_API_key } from '../../helpers/Constants';
import { apiGETcall } from '../../helpers/api_call';

const moduleWeather = {
  state() {
    return {
      cityName: '',
      errorMessage: '',
      responseObject: null,
      weathericon: {
        Thunderstorm: 'wi-thunderstorm',
        Drizzle: 'wi-sleet',
        Rain: 'wi-storm-showers',
        Snow: 'wi-snow',
        Atmosphere: 'wi-fog',
        Clear: 'wi-day-sunny',
        Clouds: 'wi-day-fog',
      },
      icon: '',
    };
  },
  mutations: {
    get_Weathericon(state, { icons, range_id }) {
      console.log(icons, range_id);
      switch (true) {
        case range_id >= 200 && range_id <= 232:
          state.icon = icons.Thunderstorm;
          break;
        case range_id >= 300 && range_id <= 321:
          state.icon = icons.Drizzle;
          break;
        case range_id >= 500 && range_id <= 531:
          state.icon = icons.Rain;
          break;
        case range_id >= 600 && range_id <= 622:
          state.icon = icons.Snow;
          break;
        case range_id >= 701 && range_id <= 781:
          state.icon = icons.Atmosphere;
          break;
        case range_id === 800:
          state.icon = icons.Clear;
          break;
        case range_id >= 801 && range_id <= 804:
          state.icon = icons.Clouds;
          break;
        default:
          state.icon = icons.Clouds;
      }
    },
  },
  actions: {
    async getWeather({ state, commit }) {
      state.errorMessage = '';
      console.log(state.cityName);
      const response = await apiGETcall(
        `${weatherApiBaseUrl}q=${state.cityName}&appid=${Weather_API_key}&units=metric`
      );
      if (response.status === 200) {
        state.responseObject = response.data;
        commit('get_Weathericon', {
          icons: state.weathericon,
          range_id: response.data.weather[0].id,
        });
      } else {
        state.errorMessage = 'Information not found please check city name';
      }
    },
  },
  getters: {},
  modules: {},
};

export default moduleWeather;
