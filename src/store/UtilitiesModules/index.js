import moduleCalculator from './calculatorModule';
import moduleWeather from './weatherModule';

const moduleUtilities = {
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

export default moduleUtilities;
