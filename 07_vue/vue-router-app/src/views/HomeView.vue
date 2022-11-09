<template>
  <div class="home">
    <input type="text" v-model="inputData" @keyup.enter="input" >
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      inputData: null
    }
  },
  methods: {
    input() {
      this.$router.push({name:'HelloView', params: {userName:this.inputData} })
    }
  }
}
</script>
