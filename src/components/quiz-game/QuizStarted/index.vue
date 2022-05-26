<script>
import Loading from './Loading.vue';
import QuestionBox from './QestionBox.vue';
export default {
  components: {
    Loading,
    QuestionBox,
  },
};
</script>
<template>
  <Loading v-if="$store.state.games.quiz.quizLoading" />

  <div v-else-if="$store.state.games.quiz.quizLoading === false">
    <QuestionBox :question="$store.state.games.quiz.currentQuestion" />
  </div>
</template>
