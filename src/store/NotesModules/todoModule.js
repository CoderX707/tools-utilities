import { todotorageKey } from '../../helpers/Constants';

const todoModule = {
  state() {
    return {
      todoString: { title: '', isDone: false },
      todoList: [],
    };
  },
  mutations: {
    addTodo(state) {
      if (state.todoString.title !== '')
        state.todoList.push({ title: state.todoString.title, isDone: false });
      state.todoString.title = '';
      localStorage.setItem(todotorageKey, JSON.stringify(state.todoList));
    },
    editTodo(state, index) {
      state.todoString.title = state.todoList[index].title;
      state.todoList.splice(index, 1);
      localStorage.setItem(todotorageKey, JSON.stringify(state.todoList));
    },
    todoDone(state, index) {
      state.todoString = state.todoList[index];
      state.todoString.isDone = state.todoString.isDone ? false : true;
      localStorage.setItem(todotorageKey, JSON.stringify(state.todoList));
      state.todoString = { title: '', isDone: false };
    },
    deleteTodo(state, index) {
      state.todoList.splice(index, 1);
      localStorage.setItem(todotorageKey, JSON.stringify(state.todoList));
    },
    storeData(state) {
      const storage = localStorage.getItem(todotorageKey);
      if (!storage) {
        localStorage.setItem(todotorageKey, JSON.stringify(state.todoList));
      } else {
        state.todoList = JSON.parse(storage);
      }
    },

    exportCsvFile(state) {
      console.log('exportCsvFile');
    },
  },
  actions: {},
  getters: {},
};

export default todoModule;
