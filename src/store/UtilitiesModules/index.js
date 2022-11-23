import moduleCalculator from './calculatorModule';
import moduleFileSharing from './fileSharingModule';
import moduleJsonFormatter from './jsonFormatterModule';
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
    fileSharing:moduleFileSharing,
    jsonFormatter:moduleJsonFormatter,
  },
};

export default moduleUtilities;
