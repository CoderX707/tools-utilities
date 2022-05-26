<script>
export default {
  props: {},
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
        type="text"
        @keyup="onInputChange($event)"
        v-model="$store.state.converter.firstInputValue"
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
    >
      <option
        v-for="relatedOption in $store.state.converter.selectedConverterOptions"
      >
        {{ relatedOption }}
      </option>
    </select>
  </div>
</template>
