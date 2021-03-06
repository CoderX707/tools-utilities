import { resolveComponent, markRaw } from 'vue';

import Quiz from '../../components/quiz-game/index.vue';
import TicTacToe from '../../components/tic-tac-toe/index.vue';
import { gamesComponentsListString } from '../../helpers/all_conponents_list';
import { shuffleArray } from '../../helpers/helper';

const components = {
  Quiz,
  TicTacToe,
};

const lookupComponent = (name) => {
  const comp = components[name] ?? resolveComponent(name);
  return markRaw(comp);
};

const componentsList = shuffleArray(gamesComponentsListString).map(
  lookupComponent
);

const moduleGamesDraggable = {
  state() {
    return { gamesComponents: componentsList };
  },
  mutations: {
    updateGamesUI(state, payload) {
      state.gamesComponents = payload;
    },
  },
  actions: {},
  getters: {
    gamesComponents(state) {
      return state.gamesComponents;
    },
  },
};

export default moduleGamesDraggable;
