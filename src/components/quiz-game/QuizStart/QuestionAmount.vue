<template>
  <div class="mt-2">
    <label
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >Number of Questions:</label
    >
    <input
      type="number"
      max="50"
      min="1"
      v-model="$store.state.games.quiz.numberOfQuestions"
      class="
        mb-2
        text-center
        bg-gray-50
        border border-gray-300
        text-gray-900 text-sm
        rounded-lg
        focus:ring-blue-500 focus:border-blue-500
        block
        w-full
        p-2.5
        dark:bg-gray-700
        dark:border-gray-600
        dark:placeholder-gray-400
        dark:text-white
        dark:focus:ring-blue-500
        dark:focus:border-blue-500
      "
      required
    />
  </div>
</template>
