<script>
export default {
  props: {},
  emits: ['select-value-change-second'],
  methods: {
    onSelectChangeSecond(event) {
      this.$emit('select-value-change-second', event.target.value);
    },
  },
};
</script>

<template>
  <div>
    <div>
      <input
        v-model="$store.state.converter.secondInputValue"
        type="text"
        disabled
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
      >
    </div>
    <select
      v-model="$store.state.converter.selectedOptionTo"
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
      @change="onSelectChangeSecond($event)"
    >
      <option
        v-for="relatedOption in $store.state.converter.selectedConverterOptions"
        :key="relatedOption"
        :value="relatedOption"
      >
        {{ relatedOption }}
      </option>
    </select>
  </div>
</template>
