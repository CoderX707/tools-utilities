import { ref } from 'vue';
import { stringToSlug } from '../../helpers/helper';
import { apiDELETEcall, apiGETcall, apiPOSTcall } from '../../helpers/api_call';
import { note_api_endpoint } from '../../helpers/Constants';

const moduleNotepad = {
  state() {
    return {
      inputValue: ref('<h1>This is header</h1><p>This is paragraph</p>'),
      noteTitle: ref(''),
      errorMsg: ref(''),
      sharedNote: ref(null),
      isLoading: ref(false)
    };
  },
  mutations: {
    clearState(state) {
      state.inputValue = '<h1>This is header</h1><p>This is paragraph</p>',
      state.noteTitle = '',
      state.errorMsg = '',
      state.sharedNote = null,
      state.isLoading = false
    }
  },
  actions: {
    async createNote({ commit, state }) {
      const slug = stringToSlug(state.noteTitle);
      const note = {
        slug: slug,
        title: state.noteTitle,
        body: state.inputValue,
        createdAt: new Date()
      };
      const res = await apiPOSTcall(note_api_endpoint, note);
      if (res.status == 200) {
        state.sharedNote = res.data;
      } else {
        state.errorMsg = 'Something went wrong!'
        state.sharedNote = null;
      }
    },
    async getNote({ commit, state }, slug) {
      state.isLoading = true;
      const res = await apiGETcall(note_api_endpoint + '/' + slug);
      if (res.status == 200) {
        state.sharedNote = res.data;
        state.isLoading = false;
      } else {
        state.errorMsg = 'Not found!'
        state.sharedNote = null;
        state.isLoading = false;
      }
    },
    async deleteNote({ commit, state }, id) {
      const res = await apiDELETEcall(note_api_endpoint + '/' + id)
      state.errorMsg = 'Note deleted!'
      state.sharedNote = null;
    }
  },
  getters: {},
};

export default moduleNotepad;
