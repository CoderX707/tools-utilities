import { createStore } from 'vuex';

import moduleConverter from './UtilitiesModules/converterModule';
import moduleStopwatch from './UtilitiesModules/stopwatchModule';
import currencyConvertModule from './UtilitiesModules/currencyConvertModule';
import languageTranslateModule from './UtilitiesModules/languageTranslateModule';
import moduleQuotes from './quotesModule';
import todoModule from './NotesModules/todoModule';
import moduleGeneratePassword from './UtilitiesModules/passwordGeneratorModule';
import moduleQRCodeGenerator from './UtilitiesModules/qrCodeGeneratorModule';
import moduleTextUtils from './UtilitiesModules/textUtilsModule';
import moduleDraggableUtilitiesModule from './UtilitiesModules/draggableUtilitiesModule';
import moduleNotes from './NotesModules';
import moduleGames from './GamesModules';
import moduleUtilites from './UtilitiesModules';
import moduleDarkLightTheme from './dark_light_themeModule';
import moduleHome from './HomeModules';

// Create a new vuex store instance.
const store = createStore({
  state() {
    return {};
  },
  mutations: {},
  actions: {},
  modules: {
    converter: moduleConverter,
    languageModule: languageTranslateModule,
    currencyModule: currencyConvertModule,
    todo: todoModule,
    quotes: moduleQuotes,
    generatePassword: moduleGeneratePassword,
    qrcode: moduleQRCodeGenerator,
    textUtils: moduleTextUtils,
    stopwatch: moduleStopwatch,
    draggableUtilities: moduleDraggableUtilitiesModule,
    notes: moduleNotes,
    games: moduleGames,
    utilites: moduleUtilites,
    darkLightTheme: moduleDarkLightTheme,
    home: moduleHome,
  },
});

export default store;
