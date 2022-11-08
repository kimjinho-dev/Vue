<template>
  <div>
    <h1>VideoListItem입니다</h1>
    <p v-for="(url,index) in urls" :key="index">
      <video controls loop muted>
        <source
        :src="https://www.youtube.com/watch?v={{url.items.index.id}}">
      </video>
    </p>
  </div>
</template>

<script>
export default {
  name: "VideoListItem",
  computed: {
    urls() {
      return this.$store.state.urls
    }
  }
}
</script>

<style>

</style>