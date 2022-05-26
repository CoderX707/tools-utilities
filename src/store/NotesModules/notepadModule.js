import { ref } from 'vue';

const moduleNotepad = {
  state() {
    return {
      inputValue: ref('<h1>This is header</h1><p>This is paragraph</p>'),
    };
  },
  mutations: {},
  actions: {},
  getters: {},
};

export default moduleNotepad;
