<template>
  <div>
    <h1>VideoList입니다</h1>
    <VideoListItem/>
  </div>
</template>

<script>
import VideoListItem from "@/components/VideoListItem"
export default {
  name: "VideoList",
  components: {
    VideoListItem,
  },
}
</script>

<style>

</style>