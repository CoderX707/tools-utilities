<script>
import QuizStart from './QuizStart/index.vue';
import QuizStarted from './QuizStarted/index.vue';
import QuizEnd from './QuizEnd/index.vue';
import ToastMessage from '../CommonComponents/ToastMessage.vue';
export default {
  components: {
    QuizStart,
    QuizStarted,
    QuizEnd,
    ToastMessage,
  },
};
</script>

<template>
  <ToastMessage
    :message="$store.state.games.quiz.errorMessage"
    id="quizError"
  />
  <div v-if="$store.state.games.quiz.quizStart === 0">
    <QuizStart />
  </div>
  <div v-else-if="$store.state.games.quiz.quizStart === 1">
    <QuizStarted />
  </div>
  <div v-else-if="$store.state.games.quiz.quizStart === 2">
    <QuizEnd />
  </div>
</template>
