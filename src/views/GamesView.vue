<script>
import Draggable from 'vue3-draggable';

export default {
  components: {
    Draggable,
  },
  computed: {
    gamesList: {
      get() {
        return this.$store.state.games.gameDraggable.gamesComponents;
      },
      set(value) {
        this.$store.commit('updateGamesUI', value);
      },
    },
  },
};
</script>

<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-20 mx-auto">
      <draggable class="flex flex-wrap" v-model="gamesList">
        <template v-slot:item="{ item }">
          <div class="flex relative m-4 cursor-move">
            <div
              class="
                mx-auto
                p-4
                max-w-lg
                bg-white
                rounded-lg
                border border-gray-200
                shadow-md
                sm:p-6
                lg:p-8
                dark:bg-gray-800 dark:border-gray-700
                w-full
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
