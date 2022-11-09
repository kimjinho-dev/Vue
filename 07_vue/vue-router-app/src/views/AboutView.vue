<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="toHome">홈버튼</button>
  </div>
</template>

<script>
export default ({
  name: 'AboutView',
  methods: {
    toHome() {
      this.$router.push({name:'home'})
    }

  }
})
</script>

