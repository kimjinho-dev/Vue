import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    todos: []
  },
  getters: {
    allTodosCount(state) {
      return state.todos.length
    },
    complitedTodosCound(state) {
      return state.todos.filter((todo)=> {
      if (todo.isCompleted) return todo}).length
    },
    uncomplitedTodosCound(state,getters) {
      return state.todos.length - getters.complitedTodosCound
    }
  },
  mutations: {
    CREATE_TODO(state,todoItem) {
      state.todos.push(todoItem)
    },
    DELETE_TODO(state,todoItem) {
      const index = state.todos.indexOf(todoItem)
      state.todos.splice(index,1)
    },
    UPDATE_TODO_STATUS(state,todoItem) {
      // todoItem.styleList.toggle('textDecoration')
      const index = state.todos.indexOf(todoItem)
      todoItem.isCompleted = !todoItem.isCompleted
      state.todos[index] = todoItem
      // state.todos = state.todos.map((todo) => {
      //   if(todo === todoItem) {
      //     todo.isCompleted = !todo.isCompleted
      //   }
      //   return todo
      // })
    },
    // LOAD_LOCAL_TODO(state) {
    //   const localStorageTodos = localStorage.getItem('localTodos')
    //   const parsedTodos = JSON.parse(localStorageTodos)
    //   state.todos = parsedTodos
    // },
  },
  actions: {
    createTodo(context, todotitle) {
      const todoItem = {
        title: todotitle,
        isCompleted: false 
      }
      context.commit('CREATE_TODO',todoItem)
      // context.dispatch('saveTodosToLocalStorage')
    },
    updateTodoStatus(context,todoItem) {
      context.commit('UPDATE_TODO_STATUS',todoItem)
      // todoItem.styleList.toggle('textDecoration')
      // context.dispatch('saveTodosToLocalStorage')
    },
    // saveTodosToLocalStorage(context) {
    //   const jsontodos = JSON.stringify(context.state.todos)
    //   localStorage.setItem('localTodos',jsontodos)
    // },
    // loadLocalTodo(context) {
    //   context.commit('LOAD_LOCAL_TODO')
    // }
  },
  modules: {
  },
})
