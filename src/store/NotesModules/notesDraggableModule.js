import { resolveComponent, markRaw } from 'vue';

import Notepad from '../../components/notepad/Notepad.vue';
import Todo from '../../components/todo/Todo.vue';

const components = {
  Notepad,
  Todo,
};
const lookupComponent = (name) => {
  const comp = components[name] ?? resolveComponent(name);
  return markRaw(comp);
};
const componentsList = ['Notepad', 'Todo'].map(lookupComponent);

const moduleNotesDraggable = {
  state() {
    return {
      notesComponents: componentsList,
    };
  },
  mutations: {
    updateNotesUI(state, payload) {
      state.notesComponents = payload;
    },
  },
  actions: {},
  getters: {
    notesComponents(state) {
      return state.notesComponents;
    },
  },
};

export default moduleNotesDraggable;
