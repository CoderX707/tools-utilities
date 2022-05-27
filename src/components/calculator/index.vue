<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Calculator',
  methods: {
    action(n) {
      this.$store.commit('calculate', n);
    },
  },
});
</script>

<template>
  <div>
    <div class="mb-6">
      <input
        disabled
        type="text"
        id="default-input"
        :value="$store.state.utilites.calculator.calculatorValue || 0"
        class="
          bg-gray-50
          border border-gray-300
          text-gray-900 text-sm
          rounded-lg
          text-xl text-right
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
      />
    </div>
    <div class="grid grid-cols-4 gap-2">
      <button
        v-for="n in $store.state.utilites.calculator.calculatorButtons"
        :key="n"
        type="button"
        @click="action(n)"
        class="
          text-gray-900
          bg-white
          border border-gray-300
          focus:outline-none
          hover:bg-gray-100
          focus:ring-4 focus:ring-gray-200
          font-medium
          rounded-lg
          text-sm
          px-5
          py-2.5
          mr-2
          mb-2
          dark:bg-gray-800
          dark:text-white
          dark:border-gray-600
          dark:hover:bg-gray-700
          dark:hover:border-gray-600
          dark:focus:ring-gray-700
        "
        :class="{
          'bg-gray-200 dark:bg-gray-700': ['C', '*', '/', '-', '+', '%', '='].includes(n),
          'col-span-2': ['C', '='].includes(n),
        }"
      >
        {{ n }}
      </button>
    </div>
  </div>
</template>
