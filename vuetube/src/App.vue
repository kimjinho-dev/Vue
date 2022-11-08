<template>
  <div id="app">
    <SearchBar/>
    <MainVideo/>
    <VideoList/>
    <button @click="test">test</button>

  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar"
import MainVideo from "@/components/MainVideo"
import VideoList from "@/components/VideoList"

export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components: {
    SearchBar,
    MainVideo,
    VideoList,
  },
  methods: {
    test() {
      this.$store.dispatch('getUrl')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
