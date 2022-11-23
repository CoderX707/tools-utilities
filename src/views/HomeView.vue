<script>
import Draggable from 'vue3-draggable';
import Quotes from '../components/quotes/Quotes.vue';

export default {
  components: {
    Quotes,
    Draggable,
  },
  computed: {
    componentsList: {
      get() {
        return this.$store.state.home.homeDraggable.homeComponents;
      },
      set(value) {
        this.$store.commit('updateHomeUI', value);
      },
    },
  },
  mounted() {
		document.getElementsByClassName('col-span-2').forEach((e)=>{
      e.parentNode.style.gridColumn = ' span 2 / span 2';
    })
  },
};
</script>

<template>
  <Quotes />
  <section class="text-gray-600 body-font">
    <div class="lg:container px-5 py-5 mx-auto">
      <draggable
        v-model="componentsList"
        class="grid sm:grid-cols-2 xl:grid-cols-3 gap-4"
      >
        <template #item="{ item }">
          <div
            class="relative m-4 cursor-move"
            :class="[( item.name==='Notepad' || item.name==='JsonFormatter' ?'col-span-2':'' )]"
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
