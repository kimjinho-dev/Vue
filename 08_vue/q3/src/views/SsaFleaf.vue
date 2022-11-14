<template>
  <div>
    <h2>2단계</h2>
    <span>
      <button @click="toSsafling">왼쪽</button>
      <img src="../assets/happlossome.png" height="300px" width="300px"  alt="">
      <button @click="toSsaflower">오른쪽</button>
    </span>
    <h2>해플링썸</h2>
  </div>
</template>

<script>
export default {
  name: 'SsaFleaf',
  methods: {
    toSsafling() {
      alert('이전 진화 단계로 돌아갈 수 없습니다')
    },
    toSsaflower() {
      this.$router.push({name:'Ssaflower'})
    },
  }
}
</script>

<style>

</style>