<script>
import QuizStart from './QuizStart/index.vue';
import QuizStarted from './QuizStarted/index.vue';
import QuizEnd from './QuizEnd/index.vue';
export default {
  components: {
    QuizStart,
    QuizStarted,
    QuizEnd,
  },
};
</script>

<template>
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
