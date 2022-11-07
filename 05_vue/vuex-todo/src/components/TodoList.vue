<template>
  <div>
    <h1>TodoList</h1>
    <p>모든 Todo 개수 : {{ allTodosCount }}</p>
    <p>완료된 Todo 개수 : {{ complitedTodosCound }}</p>
    <p>진행중인 Todo 개수 : {{ uncomplitedTodosCound }}</p>
    <TodoListItem
    v-for='(todo,index) in todos'
    :key='index'
    :todo='todo'
    />
    <!-- <button @click="loadLocalTodo">저장된 Todo 불러오기</button> -->
    
  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem'

export default {
  name: 'TodoList',
  components: {
    TodoListItem
  },
  computed: {
    todos() {
      return this.$store.state.todos
    },
    allTodosCount() {
      return this.$store.getters.allTodosCount
    },
    complitedTodosCound() {
      return this.$store.getters.complitedTodosCound
    },
    uncomplitedTodosCound() {
      return this.$store.getters.uncomplitedTodosCound
    }
  },
  methods: {
    loadLocalTodo() {
      this.$store.dispatch('loadLocalTodo')
    }
  }
}
</script>

<style>

</style>