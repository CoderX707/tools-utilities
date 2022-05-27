<script></script>
<template>
  <div class="relative mt-4">
    <input
      v-model="$store.state.utilites.weather.cityName"
      type="search"
      class="
        block
        p-4
        w-full
        text-sm text-gray-900
        bg-gray-50
        rounded-lg
        border border-gray-300
        focus:ring-blue-500 focus:border-blue-500
        dark:bg-gray-700
        dark:border-gray-600
        dark:placeholder-gray-400
        dark:text-white
        dark:focus:ring-blue-500
        dark:focus:border-blue-500
      "
      placeholder="City Name"
      required
    />
    <button
      type="submit"
      class="
        text-white
        absolute
        right-2.5
        bottom-2.5
        bg-blue-700
        hover:bg-blue-800
        focus:ring-4 focus:outline-none focus:ring-blue-300
        font-medium
        rounded-lg
        text-sm
        px-4
        py-2
        dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
      "
      @click="$store.dispatch('getWeather')"
    >
      Search
    </button>
  </div>
</template>
