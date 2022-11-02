<template>
  <div>
    <h2>{{ todo.title }}</h2>
  </div>
</template>

<script>
export default {
  name: "TodoListItem",
  props: {
    todo: String,
  },
};
</script>

<style>
</style>