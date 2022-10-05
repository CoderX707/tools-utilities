<script>
export default {
  name: 'HeaderTitle',
  props: {
    heading: { type: String, required: true },
  },
};
</script>
<template>
  <p class="font-bold text-gray-400 text-2xl text-center">
    {{ heading }}
  </p>
</template>
