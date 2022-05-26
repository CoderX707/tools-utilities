<script>
import SearchBox from './SearchBox.vue';
export default {
  name: 'Weather',
  components: {
    SearchBox,
  },
  beforeMount() {
    // this.$store.dispatch('getWeather')
  },
};
</script>
<template>
  <SearchBox />
 
 
</template>
