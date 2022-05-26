<script>
export default {
  data() {
    return {
      interval: 0,
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.$store.commit('getDuration');
    }, 100);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>
<template>
  <p class="font-bold text-gray-400 text-2xl text-center">Stopwatch</p>
  <p class="text-red-500 text-center my-2">
    {{ $store.state.stopwatch.errorMessage }}
  </p>
  <p class="text-6xl text-center mb-5">{{ $store.state.stopwatch.duration }}</p>
  <div class="flex items-center justify-center mb-3">
    <div
      class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
      role="group"
    >
      <button
        type="button"
        @click="$store.commit('startStopwatch')"
        class="
          rounded-l
          inline-block
          px-7
          py-3
          bg-green-600
          text-white
          font-medium
          text-sm
          leading-snug
          uppercase
          hover:bg-green-700
          focus:bg-green-700 focus:outline-none focus:ring-0
          active:bg-green-800
          transition
          duration-150
          ease-in-out
        "
      >
        Start
      </button>
      <button
        type="button"
        @click="$store.commit('resetStopwatch')"
        class="
          inline-block
          px-7
          py-3
          bg-yellow-300
          text-white
          font-medium
          text-sm
          leading-snug
          uppercase
          hover:bg-yellow-500
          focus:bg-yellow-500 focus:outline-none focus:ring-0
          active:bg-yellow-400
          transition
          duration-150
          ease-in-out
        "
      >
        Reset
      </button>
      <button
        type="button"
        @click="$store.commit('stopStopwatch')"
        class="
          rounded-r
          inline-block
          px-7
          py-3
          bg-red-600
          text-white
          font-medium
          text-sm
          leading-snug
          uppercase
          hover:bg-red-700
          focus:bg-red-700 focus:outline-none focus:ring-0
          active:bg-red-800
          transition
          duration-150
          ease-in-out
        "
      >
        Stop
      </button>
    </div>
  </div>
</template>
