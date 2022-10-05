<script>
export default {
  props: {},
emits: ['input-value-change', 'change-currency-first'],
  methods: {
    onInputChange: function (event) {
      this.$emit('input-value-change', event.target.value);
    },
    onSelectChange: function (event,data) {
      this.$emit('change-currency-first', event.target.value);
    },
  },
};
</script>

<template>
  <div>
    <div>
      <input
        v-model="$store.state.currencyModule.currencyInputValue"
        type="text"
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
        @keyup="onInputChange($event)"
      >
    </div>
    <select
      class="
        bg-gray-50
        border border-gray-300
        text-gray-900
        mb-6
        text-sm
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
      @change="onSelectChange($event)"
    >
      <option
        v-for="currency in $store.state.currencyModule.currencyWithCountry.countries"
        :key="currency"
        :value="`${currency.currencyName}-${currency.currencyCode}-${currency.rate}`"
      >
        {{ currency.currencyName }} - ({{ currency.currencyCode }})
      </option>
    </select>
  </div>
</template>
