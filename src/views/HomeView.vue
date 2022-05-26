<script>
import Quotes from '../components/quotes/Quotes.vue';
export default {
  components: {
    Quotes,
  },
  data() {
    return {
      title: 'Home Page',
    };
  },
};
</script>

<template>
  <Quotes />
  <div>{{ title }}</div>
</template>
