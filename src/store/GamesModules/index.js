import moduleGamesDraggable from "./gamesDraggableModule";
import moduleQuize from "./quizModule";


const moduleGames = {
  state() {
    return {};
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    quiz: moduleQuize,
    gameDraggable: moduleGamesDraggable
  },
};

export default moduleGames;
