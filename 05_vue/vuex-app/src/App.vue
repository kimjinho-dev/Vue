<template>
  <div id="app">
    <!-- <h1>{{ $store.state.message }}</h1> -->
    <h1> {{ message }} </h1>
    <h2>메세지 길이는 {{ messageLength }}</h2>
    <input 
      type="text"
      @keyup.enter="editMessage"
      v-model="inputMessage"
    >
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      inputMessage: ""
    }
  },
  components: {
  },
  methods : {
    editMessage() {
      const editMessage = this.inputMessage
      this.$store.dispatch('editMessage',editMessage)
    }
  },
  computed: {
    message() {
      return this.$store.state.message
    },
    messageLength() {
      return this.$store.getters.messageLength
    },    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
