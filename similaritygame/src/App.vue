<template>
  <div id="app" >
    <input 
    @keyup.left="left"
    @keyup.right="right"
    @keyup.up="up"
    @keyup.down="down"
    >
    <img
      src="@/assets/logo.png" 
      width="100px"
      height="100px"
      :style="{ position:'absolute', left:posx + 'px', top:posy + 'px'}"
    >
    

  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      x:200,
      y:600,
    }
  },
  computed: {
    posx() {
      return this.x
    },
    posy() {
      return this.y
    }
  },
  methods: {
    left() {
      console.log("left")
      this.x -= 100
    },
    right() {
      console.log("right")
      this.x += 100
    },
    up() {
      console.log("up")
      this.y -= 100
    },
    down() {
      console.log("down")
      this.y += 100
    },
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
