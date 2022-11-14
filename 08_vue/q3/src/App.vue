<template>
  <div id="app">
    <h1>진화 단계 가이드</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/heppeed">start</router-link>
    </nav>
    <router-view/>
    <!-- <img v-if="isHome" src="@/assets/ssafy-banner.png" alt=""> -->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
