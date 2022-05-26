import { calculatorButtons } from '../../helpers/Constants';

const moduleCalculator = {
  state() {
    return {
      calculatorValue: '',
      calculatorButtons: calculatorButtons,
      operator: null,
      previousCalculatorValue: '',
    };
  },
  mutations: {
    calculate(state, n) {
      if (!isNaN(n) || n === '.') {
        state.calculatorValue += n + '';
      }
      if (n === 'C') {
        state.calculatorValue = '';
        state.previousCalculatorValue = '';
        state.operator = null;
      }
      if (n === '%') {
        state.calculatorValue = state.calculatorValue / 100 + '';
      }
      if (['/', '*', '-', '+'].includes(n)) {
        state.operator = n;
        state.previousCalculatorValue = state.calculatorValue;
        state.calculatorValue = '';
      }
      if (
        n === '=' &&
        state.previousCalculatorValue !== '' &&
        state.operator !== null &&
        state.calculatorValue !== ''
      ) {
        state.calculatorValue = eval(
          state.previousCalculatorValue + state.operator + state.calculatorValue
        );
        state.previousCalculatorValue = '';
        state.operator = null;
      }
    },
  },
  actions: {},
  getters: {},
};

export default moduleCalculator;
