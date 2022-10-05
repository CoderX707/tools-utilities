<script>
export default {
  data() {
    return { star: 0 };
  },
  computed: {
    percentage() {
      return (
        (this.$store.state.games.quiz.quizScore /
          this.$store.state.games.quiz.numberOfQuestions) *
        100
      );
    },
    stars() {
      return this.percentage !== 100 ? this.percentage / 100 : 1;
    },
  },
};
</script>

<template>
  <img
    class="rounded-t-lg"
    src="/images/Congratulation.png"
    alt="Congratulation"
  >
  <div class="pb-5">
    <h5
      class="
        text-center text-xl
        font-semibold
        tracking-tight
        text-gray-900
        dark:text-white
      "
    >
      Your Scored {{ $store.state.games.quiz.quizScore }} /
      {{ $store.state.games.quiz.numberOfQuestions }} correct answers!
    </h5>
    <div class="flex justify-center items-center mt-2.5 mb-5">
      <svg
        v-for="star in stars * 5"
        :key="star"
        class="w-5 h-5 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>

      <span
        class="
          bg-blue-100
          text-blue-800 text-xs
          font-semibold
          mr-2
          px-2.5
          py-0.5
          rounded
          dark:bg-blue-200 dark:text-blue-800
          ml-3
        "
      >{{ percentage }}%</span>
    </div>
    <div class="flex justify-center">
      <button
        type="button"
        class="
          text-white
          bg-gradient-to-br
          from-purple-600
          to-blue-500
          hover:bg-gradient-to-bl
          focus:ring-4 focus:outline-none focus:ring-blue-300
          dark:focus:ring-blue-800
          font-medium
          rounded-lg
          text-sm
          px-5
          py-2.5
          text-center
          mr-2
          mb-2
        "
        @click="$store.commit('initGame')"
      >
        Back to Home
      </button>
    </div>
  </div>
</template>
