<script>
import quotes from '../../helpers/quotes.js';

export default {
  beforeMount() {
    this.$store.dispatch('get_quotes');
  },
  mounted() {},
};
</script>

<template>
  <div class="md:p-5 slide md:bg-gray-200 dark:bg-gray-900">
    <div class="carousel-inner relative overflow-hidden w-full">
      <div
        style="max-width: 99%"
        v-for="(quote, i) in $store.state.quotes.quotesList"
        :id="`slide-${i}`"
        :key="i"
        :class="`${$store.state.quotes.active === i ? 'active' : 'left-full'}`"
        class="
          shadow-lg
          rounded-lg
          bg-white
          dark:bg-gray-700
          carousel-item
          inset-0
          p-3
          relative
          w-full
          transform
          transition-all
          duration-500
          ease-in-out
        "
      >
        <div class="w-full mb-10">
          <p class="text-sm text-gray-600 dark:text-gray-100 text-center px-5 text-xl">
            <span class="text-indigo-500">“ </span> {{ quote.text }}
            <span class="text-indigo-500"> ”</span>
          </p>
        </div>
        <div class="w-full">
          <p class="text-md text-indigo-500 font-bold text-center">
            -- {{ quote.author }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.left-full {
  left: -101%;
}

.carousel-item {
  float: left;
  position: relative;
  display: block;
  width: 99%;
  margin-right: -101%;
  backface-visibility: hidden;
}

.carousel-item.active {
  left: 0;
}
</style>
