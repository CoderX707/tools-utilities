import { resolveComponent, markRaw } from 'vue';

import Quiz from '../../components/quiz-game/index.vue';
import TicTacToe from '../../components/tic-tac-toe/index.vue';
import Notepad from '../../components/notepad/Notepad.vue';
import Todo from '../../components/todo/Todo.vue';
import ConverterBox from '../../components/unit-converter/ConverterBox.vue';
import currencyConverter from '../../components/currency-converter/currencyConverter.vue';
import Traslate from '../../components/translate/Translate.vue';
import Stopwatch from '../../components/stopwatch/Stopwatch.vue';
import PasswordGenerator from '../../components/password-generator/PasswordGenerator.vue';
import QrCodeGenerator from '../../components/qr-code-generator/QrCodeGenerator.vue';
import TextUtils from '../../components/text-utils/TextUtils.vue';
import Calculator from '../../components/calculator/index.vue';
import Weather from '../../components/weather/index.vue';

import { homeComponentsListString } from '../../helpers/all_conponents_list';
import { shuffleArray } from '../../helpers/helper';

const components = {
  Quiz,
  TicTacToe,
  ConverterBox,
  currencyConverter,
  Notepad,
  Todo,
  Traslate,
  Stopwatch,
  PasswordGenerator,
  QrCodeGenerator,
  TextUtils,
  Calculator,
  Weather,
};

const lookupComponent = (name) => {
  const comp = components[name] ?? resolveComponent(name);
  return markRaw(comp);
};

const componentsList = shuffleArray(homeComponentsListString).map(
  lookupComponent
);

const moduleHomeDraggable = {
  state() {
    return { homeComponents: componentsList };
  },
  mutations: {
    updateHomeUI(state, payload) {
      state.homeComponents = payload;
    },
  },
  actions: {},
  getters: {
    homeComponents(state) {
      return state.homeComponents;
    },
  },
};

export default moduleHomeDraggable;
