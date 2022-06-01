<script>
import SearchBox from './SearchBox.vue';
import HeaderTitle from '../CommonComponents/HeaderTitle.vue';
import ToastMessage from '../CommonComponents/ToastMessage.vue';
export default {
  name: 'Weather',
  components: {
    HeaderTitle,
    SearchBox,
    ToastMessage,
  },
};
</script>
<template>
  <HeaderTitle heading="Weather" />
  <ToastMessage
    :message="$store.state.utilites.weather.errorMessage"
    id="weatherError"
  />
  <SearchBox />
  <div
    class="grid justify-items-center"
    v-if="$store.state.utilites.weather.responseObject !== null"
  >
    <p class="my-4 text-2xl dark:text-white">
      {{ $store.state.utilites.weather.responseObject.name }},
      {{ $store.state.utilites.weather.responseObject.sys.country }}
    </p>
    <i
      :class="[$store.state.utilites.weather.icon]"
      class="wi my-4 text-7xl dark:text-gray-100"
    />
    <p class="text-3xl dark:text-gray-100">
      {{ $store.state.utilites.weather.responseObject.main.temp }} &deg;
    </p>
    <div class="flex justify-center my-3 dark:text-gray-400">
      <p class="mr-3">
        Max:
        {{ $store.state.utilites.weather.responseObject.main.temp_max }} &deg;
      </p>
      <p>
        Min:
        {{ $store.state.utilites.weather.responseObject.main.temp_min }} &deg;
      </p>
    </div>
    <p class="capitalize dark:text-gray-300">
      {{ $store.state.utilites.weather.responseObject.weather[0].description }}
    </p>
  </div>
  <div v-else class="mt-3 text-center text-gray-500">
    Search city for get current weather
  </div>
</template>
