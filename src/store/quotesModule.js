import quotes from '../helpers/quotes';

const moduleQuotes = {
  state() {
    return {
      quotesList: [],
      active: 0,
    };
  },
  mutations: {
    slideshow(state) {
      if (state.quotesList.length !== 0) {
        let i = 0;
        setInterval(() => {
          if (i > state.quotesList.length - 1) {
            i = 0;
          }
          state.active = i;
          i++;
        }, 10000);
      }
    },
  },
  actions: {
    async get_quotes({ state, commit }) {
      if (state.quotesList.length === 0) {
        state.quotesList = await quotes();
        commit('slideshow');
      }
    },
  },
  getters: {},
};

export default moduleQuotes;
