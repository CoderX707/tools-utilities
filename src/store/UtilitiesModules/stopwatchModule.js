const moduleStopwatch = {
  state() {
    return {
      startTime: 0,
      stopTime: 0,
      running: false,
      duration: 0,
      errorMessage: '',
    };
  },
  mutations: {
    startStopwatch(state) {
      if (state.running) {
        return (state.errorMessage = 'Stopwatch is already running');
      }
      state.errorMessage = '';
      state.running = true;
      state.startTime = new Date();
    },
    stopStopwatch(state) {
      if (!state.running) {
        return (state.errorMessage = 'Stopwatch is not started');
      }
      state.errorMessage = '';
      state.running = false;
      state.stopTime = new Date();
      state.duration = 0;
      const seconds =
        (state.stopTime.getTime() - state.startTime.getTime()) / 1000;
      state.duration += seconds;
    },
    resetStopwatch(state) {
      state.running = false;
      state.errorMessage = '';
      state.startTime = 0;
      state.stopTime = 0;
      state.duration = 0;
    },
    getDuration(state) {
      if (state.running) {
        const currentTime = new Date();
        return (state.duration =
          (currentTime.getTime() - state.startTime.getTime()) / 1000);
      } else {
        return state.duration;
      }
    },
  },
  actions: {},
  getters: {},
};

export default moduleStopwatch;
