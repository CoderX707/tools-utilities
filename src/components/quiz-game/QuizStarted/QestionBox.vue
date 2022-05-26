<script>
import AnswerButton from './AnswerButton.vue';
export default {
  props: {
    question: { type: Object, required: true },
  },
  components: {
    AnswerButton,
  },
};
</script>
<template>
  <p class="font-bold">
    Q. {{ $store.state.games.quiz.currentQuestionIndex }} /
    {{ $store.state.games.quiz.numberOfQuestions }}
  </p>
  <div
    class="
      w-full
      text-center
      bg-white
      rounded-lg
      sm:p-5
      dark:bg-gray-800 dark:border-gray-700
    "
  >
    <p
      class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400"
      v-html="question.question"
    ></p>
    <div
      class="
        justify-center
        items-center
        space-y-4
        sm:flex sm:space-y-0 sm:space-x-4
      "
    >
      <AnswerButton
        v-for="answer in question.incorrect_answers"
        :answer="answer"
      />
      <AnswerButton :answer="question.correct_answer" />
    </div>
  </div>
</template>
