<script>
import HeaderTitle from '../CommonComponents/HeaderTitle.vue';
import ToastMessage from '../CommonComponents/ToastMessage.vue';

export default {
    name: "JsonFormatter",
    components: { ToastMessage, HeaderTitle },
};
</script>
<template>
  <ToastMessage
    id="jsonFormatError"
    :message="$store.state.utilites.jsonFormatter.errorMessage"
  />
  <HeaderTitle heading="JSON Formatter" />
  <div class="grid grid-cols-9 mt-3">
    <textarea
      v-model="$store.state.utilites.jsonFormatter.inputValue"
      rows="20"
      class="col-span-4 block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
    <div class="flex flex-col justify-center m-2">
      <button
        class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        @click="$store.commit('format')"
      >
        <span class="relative p-5 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Format
        </span>
      </button>
      <button
        class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
        @click="$store.commit('minify')"
      >
        <span class="relative p-5 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Minify 
        </span>
      </button>
    </div>
    <textarea
      v-model="$store.state.utilites.jsonFormatter.outputValue"
      readonly
      rows="20"
      class="col-span-4 block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  </div>
</template>
