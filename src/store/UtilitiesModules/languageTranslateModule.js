import { translateLanguages } from '../../helpers/languages';

const languageTranslateModule = {
  state() {
    return {
      translateLanguages: translateLanguages,
      translateString: '',
      fromLang: 'mr',
      toLang: 'en',
      englishTonativeLang: 'Native Language',
      translatedString: 'Translated Language',
    };
  },
  mutations: {},
  actions: {
    async startTranslate({ state }) {
      if (state.translateString != '') {
        if (state.fromLang != 'en') {
          state.englishTonativeLang = await translate(state.translateString, {
            to: state.fromLang,
            engine: 'google',
            from: 'en',
          });
        }
        const translation = await translate(
          state.fromLang != 'en'
            ? state.englishTonativeLang
            : state.translateString,
          {
            to: state.toLang,
            engine: 'google',
            from: state.fromLang,
          }
        );
        state.translatedString = translation;
      }
    },
  },

  getters: {},
};

export default languageTranslateModule;
