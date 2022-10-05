<script>
export default {
  props: {},
  emits: ['input-value-change', 'select-value-change'],
  methods: {
    onInputChange: function (event) {
      this.$emit('input-value-change', event.target.value);
    },
    onSelectChange: function (event) {
      this.$emit('select-value-change', event.target.value);
    },
  },
};
</script>

<template>
  <div>
    <div>
      <input
        v-model="$store.state.converter.firstInputValue"
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
      v-model="$store.state.converter.selectedOptionFrom"
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
        v-for="relatedOption in $store.state.converter.selectedConverterOptions"
        :key="relatedOption"
      >
        {{ relatedOption }}
      </option>
    </select>
  </div>
</template>
