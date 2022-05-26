<script>
export default {
  props: {},
  methods: {
    onSelectChange: function (event) {
      this.$emit('change-currency-second', event.target.value);
    },
  },
};
</script>

<template>
  <div>
    <div>
      <input
        type="text"
        disabled
        v-model="$store.state.currencyModule.currencyConvertedInputValue"
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
    <select
      @change="onSelectChange($event)"
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
    >
      <option
        v-for="currency in $store.state.currencyModule.currencyWithCountry.countries"
        :value="`${currency.currencyName}-${currency.currencyCode}-${currency.rate}`"
      >
        {{ currency.currencyName }} - ({{ currency.currencyCode }})
      </option>
    </select>
  </div>
</template>
