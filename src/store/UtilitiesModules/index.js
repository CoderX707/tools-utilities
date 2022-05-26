import moduleCalculator from './calculatorModule';
import moduleWeather from './weatherModule';

const moduleUtilites = {
  state() {
    return {};
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    calculator: moduleCalculator,
    weather: moduleWeather,
  },
};

export default moduleUtilites;
