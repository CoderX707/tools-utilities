const moduleJsonFormatter = {
  state() {
    return {
      inputValue: "",
      outputValue: "",
      errorMessage: "",
    };
  },
  mutations: {
    format(state) {
      state.errorMessage = "";
      try {
        state.outputValue = JSON.stringify(
          JSON.parse(state.inputValue),
          null,
          2
        );
      } catch (error) {
        state.errorMessage = error.message;
      }
    },
    minify(state) {
      state.errorMessage = "";
      try {
        state.outputValue = JSON.stringify(JSON.parse(state.inputValue));
      } catch (error) {
        state.errorMessage = error.message;
      }
    },
  },
  actions: {},
  getters: {},
};

export default moduleJsonFormatter;
