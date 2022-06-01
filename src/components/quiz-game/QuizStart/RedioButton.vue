<script>
export default {
  props: {
    label: { type: String, required: true },
    id:{type: String, required: true},
    groupName: { type: String, required: true },
    selected: Boolean,
  },
};
</script>
<template>
  <div class="flex items-center mb-4">
    <input
      @change="
        $store.commit('onSelectRedioButton', {
          group: groupName,
          value: $event.target.checked,
          label: $event.target.value,
        })
      "
      :checked="selected"
      :id="label"
      type="radio"
      :name="groupName"
      :value="id"
      class="
        w-4
        h-4
        text-blue-600
        bg-gray-100
        border-gray-300
        focus:ring-blue-500
        dark:focus:ring-blue-600 dark:ring-offset-gray-800
        focus:ring-2
        dark:bg-gray-700 dark:border-gray-600
      "
    />
    <label
      :for="label"
      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >{{ label }}</label
    >
  </div>
</template>
