<template>
  <div>
    <iframe height="468px" width="700px" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen 
      :src="`https://www.youtube.com/embed/${mainVideo}`"></iframe>
  </div>
</template>

<script>
export default {
  name: "MainVideo",
  computed: {
    mainVideo() {
      if (this.$store.state.mainVideo) {
        return this.$store.state.mainVideo.id.videoId
      } else {
        return 'YlY2CJaErdE'
      }
    }
  },
}
</script>

<style>

</style>