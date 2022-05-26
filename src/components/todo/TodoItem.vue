<script>
export default {
  props: {
    todo: Object,
    index: Number,
  },
  methods: {
    edit(index) {
      this.$store.commit('editTodo', index);
    },
    deletetodo(index) {
      this.$store.commit('deleteTodo', index);
    },
  },
};
</script>
<template>
  <div class="w-0 flex-1 flex items-center cursor-pointer" :class="{ 'line-through': todo.isDone }" @click="$store.commit('todoDone', index);">
    <span class="ml-2 flex-1 w-0 truncate">
      {{ todo.title }}
    </span>
  </div>
  <div class="ml-4 flex-shrink-0">
    <button
      class="mx-2 font-medium text-indigo-600 hover:text-indigo-400"
      @click="edit(index)"
    >
      Edit
    </button>
    <button
      class="font-medium text-red-600 hover:text-red-400"
      @click="deletetodo(index)"
    >
      Delete
    </button>
  </div>
</template>
