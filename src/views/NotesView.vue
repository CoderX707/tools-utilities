<script>
import Draggable from 'vue3-draggable';

export default {
  components: {
    Draggable,
  },
  mounted() {
    const div = document.getElementsByClassName('rich-text')[0].parentNode;
    div.style.gridColumn = ' span 2 / span 2';
  },
  computed: {
    componentList: {
      get() {
        return this.$store.state.notes.notesDraggable.notesComponents;
      },
      set(value) {
        this.$store.commit('updateNotesUI', value);
      },
    },
  },
};
</script>

<template>
  <div class="mx-5 my-10">  
    <draggable class="grid md:grid-cols-3 gap-4" v-model="componentList">
      <template v-slot:item="{ item }">
        <div
          :class="{
            'rich-text': item.components.QuillEditor,
            'p-4 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700':
              item.components.TodoList,
          }"
          class="cursor-move"
        >
          <component :is="item" />
        </div>
      </template>
    </draggable>
  </div>
</template>
<style>
@media (max-width: 768px) {
  div[draggable='true'] {
    grid-column: span 2 / span 2;
  }
}
</style>
