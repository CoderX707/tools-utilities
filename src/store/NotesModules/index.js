import moduleNotepad from './notepadModule';
import moduleNotesDraggable from './notesDraggableModule';
import todoModule from './todoModule';

const moduleNotes = {
  state() {
    return {};
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    todo: todoModule,
    notepad: moduleNotepad,
    notesDraggable: moduleNotesDraggable,
  },
};

export default moduleNotes;
