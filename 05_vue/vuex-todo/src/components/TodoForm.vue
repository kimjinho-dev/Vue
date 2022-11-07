<template>
  <div>
    <h2>TodoForm</h2>
    <input 
      type="text"
      v-model.trim='todoTitle'
      @keyup.enter="createTodo" 
    >
  </div>
</template>

<script>
export default {
  name: 'TodoFrom',
  data() {
    return {
      todoTitle: null,
    }
  },
  methods: {
    createTodo() {
      if (this.todoTitle) {
      this.$store.dispatch('createTodo', this.todoTitle)
      this.todoTitle = null
      }
    },
  }
}
</script>

<style>

</style>