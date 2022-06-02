<script>
import Draggable from 'vue3-draggable';

export default {
  components: {
    Draggable,
  },
  computed: {
    myList: {
      get() {
        return this.$store.state.draggableUtilities.elements;
      },
      set(value) {
        this.$store.commit('updateElements', value);
      },
    },
  },
};
</script>

<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-10 mx-auto">
      <draggable class="grid md:grid-cols-2 lg:grid-cols-3 gap-4" v-model="myList">
        <template v-slot:item="{ item }">
          <div class="relative m-4 cursor-move">
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
