<template>
  <!-- 이거 없으면 한번에 받는걸 인식을 못하네 -->
  <div>
    <h1>TodoList</h1>
    <ul v-for="(todo, index) in todos" :key="index">
      <TodoListItem :todo="todo" />
    </ul>
  </div>
</template>

<script>
import TodoListItem from "@/components/TodoListItem";

export default {
  name: "TodoList",
  components: {
    TodoListItem,
  },
  props: {
    todos: Array,
  },
};
</script>

<style>
</style>