import { resolveComponent, markRaw } from 'vue';

import ConverterBox from '../../components/unit-converter/ConverterBox.vue';
import currencyConverter from '../../components/currency-converter/currencyConverter.vue';
import Traslate from '../../components/translate/Translate.vue';
import Stopwatch from '../../components/stopwatch/Stopwatch.vue';
import PasswordGenerator from '../../components/password-generator/PasswordGenerator.vue';
import QrCodeGenerator from '../../components/qr-code-generator/QrCodeGenerator.vue';
import TextUtils from '../../components/text-utils/TextUtils.vue';
import Calculator from '../../components/calculator/index.vue';
import Weather from '../../components/weather/index.vue';
import FileSharing from '../../components/fileSharing/index.vue';
import JsonFormatter from '../../components/jsonFormatter/index.vue';
import { shuffleArray } from '../../helpers/helper';
import { utilitesSomponentsListString } from '../../helpers/all_conponents_list';

const components = {
  ConverterBox,
  currencyConverter,
  Traslate,
  Stopwatch,
  PasswordGenerator,
  QrCodeGenerator,
  TextUtils,
  Calculator,
  Weather,
  FileSharing,
  JsonFormatter
};

const lookupComponent = (name) => {
  const c = components[name] ?? resolveComponent(name);
  return markRaw(c);
};

const compsList = shuffleArray(utilitesSomponentsListString).map(
  lookupComponent
);

const moduleDraggableUtilitiesModule = {
  state() {
    return {
      elements: compsList,
    };
  },
  mutations: {
    updateElements(state, payload) {
      state.elements = payload;
    },
  },
  actions: {},
  getters: {
    elements(state) {
      return state.elements;
    },
  },
};

export default moduleDraggableUtilitiesModule;
