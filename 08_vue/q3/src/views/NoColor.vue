<template>
  <div>
    <h2>시작</h2>
    <button @click="toHome">왼쪽</button>
    <img src="../assets/happeed.png" height="300px" width="300px" alt="">
    <button @click="toSsafling">오른쪽</button>
    <h2>해피드</h2>
  </div>
</template>

<script>
export default {
  name: 'NoColor',
  methods: {
    toHome() {
      this.$router.push('/')
    },
    toSsafling() {
      this.$router.push({name:'Ssafling'})
    },
  }
}
</script>

<style>

</style>