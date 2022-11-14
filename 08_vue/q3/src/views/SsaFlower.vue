<template>
  <div>
    <h2>3단계</h2>
    <span>
      <button @click="toSsafleaf">왼쪽</button>
      <img src="../assets/happlower.png" height="300px" width="300px"  alt="">
      <button @click="toHome">오른쪽</button>
    </span>
    <h2>해플라워</h2>
  </div>
</template>

<script>
export default {
  name: 'SsaFlower',
  methods: {
    toSsafleaf() {
      alert('이전 진화 단계로 돌아갈 수 없습니다')
    },
    toHome() {
      alert('홈으로 돌아갑니다')
      this.$router.push('/')
    },
  }
}
</script>

<style>

</style>