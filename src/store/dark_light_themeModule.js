import { colorTheme, LogoDark, LogoLight } from '../helpers/Constants';

const moduleDarkLightTheme = {
  state() {
    return {
      themeColor: 'light',
      logo: LogoLight,
    };
  },
  mutations: {
    changeTheme(state) {
      const color = this.getters.getLocalStorage;
      if (color === 'light') {
        state.themeColor = 'dark';
        state.logo = LogoDark;
        document.documentElement.classList.add(state.themeColor);
        localStorage.setItem(colorTheme, state.themeColor);
      } else {
        document.documentElement.classList.remove(state.themeColor);
        state.themeColor = 'light';
        state.logo = LogoLight;
        localStorage.setItem(colorTheme, state.themeColor);
      }
    },
    applyTheme(state) {
      const color = this.getters.getLocalStorage;
      color === 'light' ? (state.logo = LogoLight) : (state.logo = LogoDark);
      document.documentElement.classList.add(color);
    },
  },
  actions: {},
  getters: {
    getLocalStorage(state) {
      if (localStorage.getItem(colorTheme) !== null) {
        return (state.themeColor = localStorage.getItem(colorTheme));
      } else {
        localStorage.setItem(colorTheme, state.themeColor);
        return state.themeColor;
      }
    },
  },
};

export default moduleDarkLightTheme;
