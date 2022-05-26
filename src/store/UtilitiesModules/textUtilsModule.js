import {
  ExtraSpacesRemover,
  LowerCaseText,
  NewLineRemover,
  NumberRemover,
  RemovePunctuations,
  UpperCaseText,
} from '../../helpers/Constants';

const moduleTextUtils = {
  state() {
    return {
      inputText: '',
      isRemovePunctuations: false,
      isUppercase: false,
      isLowercase: false,
      isNewLineRemover: false,
      isExtraSpacesRemover: false,
      isNumberRemover: false,
    };
  },
  mutations: {
    changeTextOptions(state, option) {
      if (option.title === UpperCaseText) {
        state.isLowercase = false;
        state.isUppercase = option.checked;
        state.inputText = state.isUppercase
          ? state.inputText.toUpperCase()
          : state.inputText;
      }
      if (option.title === LowerCaseText) {
        state.isUppercase = false;
        state.isLowercase = option.checked;
        state.inputText = state.isLowercase
          ? state.inputText.toLowerCase()
          : state.inputText;
      }
      if (option.title === RemovePunctuations) {
        const punctReg =
          /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
        state.isRemovePunctuations = option.checked;
        state.inputText = state.isRemovePunctuations
          ? state.inputText.replace(punctReg, ' ')
          : state.inputText;
      }
      if (option.title === NewLineRemover) {
        const newLineRemove = /\r?\n|\r/g;
        state.isNewLineRemover = option.checked;
        state.inputText = state.isNewLineRemover
          ? state.inputText.replace(newLineRemove, ' ')
          : state.inputText;
      }
      if (option.title === ExtraSpacesRemover) {
        const extraSpacesRemover = /\s+/g;
        state.isExtraSpacesRemover = option.checked;
        state.inputText = state.isExtraSpacesRemover
          ? state.inputText.replace(extraSpacesRemover, ' ').trim()
          : state.inputText;
      }
      if (option.title === NumberRemover) {
        const numberRemover = /[0-9]/g;
        state.isNumberRemover = option.checked;
        state.inputText = state.isNumberRemover
          ? state.inputText.replace(numberRemover, ' ')
          : state.inputText;
      }
    },
  },
  actions: {},
  getters: {},
};

export default moduleTextUtils;
