import {
  characters,
  lowerCaseCharacters,
  mediumPassword,
  numericCharacters,
  strongPassword,
  symbolsCharacters,
  upperCaseCharacters,
} from '../../helpers/Constants';

const moduleGeneratePassword = {
  state() {
    return {
      isUpperCase: true,
      isLowerCase: true,
      isNumeric: true,
      isSymbols: true,
      passwordLength: 8,
      ganeratedPassword: '',
      characterSet: '',
      characters: characters,
      passwordStrength: 3,
    };
  },
  mutations: {
    changePasswordLength(state, length) {
      state.passwordLength = length;
      this.commit('generatePassword');
    },
    checkboxChange(state, data) {
      if (data.title === 'Uppercase') {
        state.isUpperCase = data.checked;
      }
      if (data.title === 'Lowercase') {
        state.isLowerCase = data.checked;
      }
      if (data.title === 'Numbers') {
        state.isNumeric = data.checked;
      }
      if (data.title === 'Symbols') {
        state.isSymbols = data.checked;
      }
      this.commit('generatePassword');
    },
    generatePassword(state) {
      state.characterSet = '';
      let charactersArray = state.characters.split(',');
      let password = '';
      if (state.isLowerCase && charactersArray.indexOf('a-z') >= 0) {
        state.characterSet += lowerCaseCharacters;
      }
      if (state.isUpperCase && charactersArray.indexOf('A-Z') >= 0) {
        state.characterSet += upperCaseCharacters;
      }
      if (state.isNumeric && charactersArray.indexOf('0-9') >= 0) {
        state.characterSet += numericCharacters;
      }
      if (state.isSymbols && charactersArray.indexOf('#') >= 0) {
        state.characterSet += symbolsCharacters;
      }
      for (let i = 0; i < state.passwordLength; i++) {
        password += state.characterSet.charAt(
          Math.floor(Math.random() * state.characterSet.length)
        );
      }
      password != ''
        ? this.commit('StrengthChecker')
        : (state.passwordStrength = '');
      state.ganeratedPassword = password;
    },
    StrengthChecker(state) {
      if (strongPassword.test(state.ganeratedPassword)) {
        state.passwordStrength = 0; //strong password
      } else if (mediumPassword.test(state.ganeratedPassword)) {
        state.passwordStrength = 1; // medium password
      } else {
        state.passwordStrength = 2; // weak password
      }
    },
  },
  actions: {},
  getters: {},
};

export default moduleGeneratePassword;
