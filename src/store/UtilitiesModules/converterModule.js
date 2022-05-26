import {
  converterOptions,
  convertLengthOptions,
  convertTemperatureOptions,
} from '../../helpers/Constants';

const moduleConverter = {
  state() {
    return {
      selectOptions: converterOptions,
      selectedConverterOptions: [],
      selectedOptionFrom: '',
      selectedOptionTo: '',
      temperatureOptions: convertTemperatureOptions,
      lengthOptions: convertLengthOptions,
      selectedConversion: '',
      firstInputValue: 0,
      secondInputValue: 0,
      formula: '',
    };
  },
  mutations: {},
  actions: {},
  getters: {},
};

export default moduleConverter;
