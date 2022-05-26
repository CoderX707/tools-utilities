<script>
import TodoItem from './TodoItem.vue';
export default {
  components: {
    TodoItem,
  },
};
</script>

<template>
  <div class="mt-2">
    <ul
      role="list"
      class="border border-gray-200 rounded-md divide-y divide-gray-200"
    >
      <li
        class="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
        v-for="(todo, index) in $store.state.notes.todo.todoList"
      >
        <TodoItem :todo="todo" :index="index" />
      </li>
    </ul>
  </div>
</template>
