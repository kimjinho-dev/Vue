<template>
  <div>
    <div v-for="(url,index) in urls" :key="index">
      <!-- {{url.snippet}} -->
      <!-- <img :style="default"> -->
      <!-- {{url.thumbnails.default}} -->
      <div style="text-align: left">
        <img 
        :src="`${url.snippet.thumbnails.default.url}`"
        :height="`${url.snippet.thumbnails.default.height}`"
        :width="`${url.snippet.thumbnails.default.width}`">
        {{url.snippet.title}}
      </div>
      <!-- <iframe width="560" height="315" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen 
      :src="`https://www.youtube.com/embed/${url.id.videoId}`"></iframe> -->
    </div>
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