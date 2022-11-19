<script>
export default {
    name: 'FileSharingLoader',
    props: {
        percent: { type: Number, required: true },
        fileName: { type: String, required: true },
    },
}
</script>
<template>
  <div
    class="m-3 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
  >
    <div
      x-data="scrollProgress"
      class="flex items-center justify-center overflow-hidden rounded-full"
    >
      <svg class="w-20 h-20">
        <circle
          class="text-gray-300"
          stroke-width="5"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
        <circle
          class="text-blue-600"
          stroke-width="5"
          :stroke-dasharray="percent / 3.14"
          :stroke-dashoffset="percent"
          stroke-linecap="round"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
      </svg>
      <span class="absolute text-xl text-blue-700">{{ percent }}%</span>
    </div>
    <h5 class="mb-2 text-center mt-2 text-xl truncate font-bold tracking-tight text-gray-900 dark:text-white">
      {{ fileName }}
    </h5>
  </div>
</template>