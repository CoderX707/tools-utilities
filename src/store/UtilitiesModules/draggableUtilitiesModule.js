import { resolveComponent, markRaw } from 'vue';

import ConverterBox from '../../components/unit-converter/ConverterBox.vue';
import currencyConverter from '../../components/currency-converter/currencyConverter.vue';
import Traslate from '../../components/translate/Translate.vue';
import Stopwatch from '../../components/stopwatch/Stopwatch.vue';
import PasswordGenerator from '../../components/password-generator/PasswordGenerator.vue';
import QrCodeGenerator from '../../components/qr-code-generator/QrCodeGenerator.vue';
import TextUtils from '../../components/text-utils/TextUtils.vue';

const components = {
  ConverterBox,
  currencyConverter,
  Traslate,
  Stopwatch,
  PasswordGenerator,
  QrCodeGenerator,
  TextUtils,
};
const lookupComponent = (name) => {
  const c = components[name] ?? resolveComponent(name);
  return markRaw(c);
};
const compsList = [
  'currencyConverter',
  'Stopwatch',
  'ConverterBox',
  'Traslate',
  'PasswordGenerator',
  'QrCodeGenerator',
  'TextUtils',
].map(lookupComponent);

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
