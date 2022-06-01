import { quizApiBaseUrl, quizCategory } from '../../helpers/Constants';
import { apiGETcall } from '../../helpers/api_call';
import { generateURL } from '../../helpers/helper';

const moduleQuize = {
  state() {
    return {
      questions: [],
      quizCategories: quizCategory,
      selectedCategory: 'any',
      numberOfQuestions: 5,
      selectedDificulty: 'any',
      selectedType: 'multiple',
      quizLoading: false,
      quizStart: 0, // quiz start 0, quiz started 1, quiz end 2
      currentQuestion: {},
      currentQuestionIndex: 0,
      quizScore: 0,
      errorMessage: '',
    };
  },
  mutations: {
    onSelectCategory(state, category) {
      state.selectedCategory = category;
    },
    onSelectRedioButton(state, { group, value, label }) {
      if (group === 'difficulty' && value === true) {
        state.selectedDificulty = label;
      }
      if (group === 'type' && value === true) {
        state.selectedType = label;
      }
    },
    quizeStarted(state, data) {
      state.quizLoading = false;
      state.questions = data;
      state.currentQuestion = state.questions[0];
    },
    checkAnswer(state, answer) {
      if (state.currentQuestion.correct_answer === answer) {
        state.quizScore = state.quizScore + 1;
      }
      this.commit('getNextQuestion');
    },
    getNextQuestion(state) {
      state.currentQuestionIndex++;
      if (state.currentQuestionIndex < state.numberOfQuestions) {
        state.currentQuestion = state.questions[state.currentQuestionIndex];
      } else {
        state.quizStart = 2;
      }
    },
    initGame(state) {
      state.questions = [];
      state.quizCategories = quizCategory;
      state.selectedCategory = 'any';
      state.numberOfQuestions = 5;
      state.selectedDificulty = 'any';
      state.selectedType = 'any';
      state.quizLoading = false;
      state.quizStart = 0; // quiz start 0, quiz started 1, quiz end 2
      (state.currentQuestion = {}), (state.currentQuestionIndex = 0);
      state.quizScore = 0;
      state.errorMessage = '';
    },
  },
  actions: {
    startQuiz({ state, dispatch }) {
      state.quizLoading = true;
      state.quizStart = 1;
      dispatch('getQuizQuestions');
    },
    async getQuizQuestions({ state, commit }) {
      state.errorMessage = '';
      const returnUrl = generateURL(
        state.selectedCategory,
        state.selectedDificulty,
        state.selectedType
      );
      const response = await apiGETcall(
        `${quizApiBaseUrl}amount=${state.numberOfQuestions}${returnUrl}`
      );
      if (response.status === 200 && response.data.results.length > 0) {
        commit('quizeStarted', response.data.results);
      } else {
        state.errorMessage = 'Something went wrong please try again';
        state.quizLoading = false;
        state.quizStart = 0;
      }
    },
  },
  getters: {},
};

export default moduleQuize;
