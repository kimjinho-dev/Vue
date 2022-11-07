<template>
  <div>
    <span @click='updateTodoStatus' 
    :class="{'is-completed':todo.isCompleted }" >
    {{ todo.title }}
    </span>
    <button @click="todoDelete">delete</button>
  </div>  
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    todo: Object,
  },
  methods: {
    todoDelete() {
      this.$store.commit('DELETE_TODO',this.todo)
      // this.$store.dispatch('saveTodosToLocalStorage')
    },
    updateTodoStatus() {
      this.$store.dispatch('updateTodoStatus',this.todo)
    },
  },
}
</script>

<style>
  .is-completed {
    text-decoration: line-through;
  }
</style>