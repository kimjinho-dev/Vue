<template>
  <div>
    <h2>1단계</h2>
    <span>
      <button @click="toNocolor">왼쪽</button>
      <img src="../assets/happling.png" height="300px" width="300px" alt="">
      <button @click="toSsafleaf">오른쪽</button>
    </span>
    <h2>해플링</h2>
  </div>
</template>

<script>
export default {
  name: 'SsaFling',
  methods: {
    toNocolor() {
      alert('이전 진화 단계로 돌아갈 수 없습니다')
    },
    toSsafleaf() {
      this.$router.push({name:'Ssafleaf'})
    },
  }
}
</script>

<style>

</style>