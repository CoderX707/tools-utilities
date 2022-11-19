import moduleCalculator from './calculatorModule';
import moduleFileSharing from './fileSharingModule';
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
    fileSharing:moduleFileSharing
  },
};

export default moduleUtilities;
