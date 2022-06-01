<script>
import Draggable from 'vue3-draggable';
import Quotes from '../components/quotes/Quotes.vue';

export default {
  components: {
    Quotes,
    Draggable,
  },
  mounted() {
    const div = document.getElementsByClassName('rich-text')[0].parentNode;
    div.style.gridColumn = ' span 2 / span 2';
  },
  computed: {
    conponentsList: {
      get() {
        return this.$store.state.home.homeDraggable.homeComponents;
      },
      set(value) {
        this.$store.commit('updateHomeUI', value);
      },
    },
  },
};
</script>

<template>
  <Quotes />
  <section class="text-gray-600 body-font">
    <div class="lg:container px-5 py-5 mx-auto">
      <draggable
        class="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        v-model="conponentsList"
      >
        <template v-slot:item="{ item }">
          <div
            class="relative m-4 cursor-move"
            :class="{ 'rich-text': item.components?.QuillEditor }"
          >
            <div
              class="
                p-4
                bg-white
                rounded-lg
                border border-gray-200
                shadow-md
                sm:p-6
                lg:p-8
                dark:bg-gray-800 dark:border-gray-700
              "
            >
              <component :is="item" />
            </div>
          </div>
        </template>
      </draggable>
    </div>
  </section>
</template>
<style>
@media (max-width: 768px) {
  div[draggable='true'] {
    grid-column: span 2 / span 2;
  }
}
</style>
