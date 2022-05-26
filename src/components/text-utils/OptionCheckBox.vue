<script>
export default {
  props: {
    title: { type: String, required: true },
    checkboxValue: { type: Boolean, required: true },
  },
  methods: {},
};
</script>

<template>
  <div class="flex items-center">
    <input
      :checked="checkboxValue"
      :id="title"
      type="checkbox"
      @change="
        this.$store.commit('changeTextOptions', {
          checked: $event.target.checked,
          title,
        })
      "
      :value="checkboxValue"
      v-model="checkboxValue"
      class="
        w-4
        h-4
        text-blue-600
        bg-gray-100
        rounded
        border-gray-300
        focus:ring-blue-500
        dark:focus:ring-blue-600 dark:ring-offset-gray-800
        focus:ring-2
        dark:bg-gray-700 dark:border-gray-600
      "
    />
    <label
      :for="title"
      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >{{ title }}</label
    >
  </div>
</template>
