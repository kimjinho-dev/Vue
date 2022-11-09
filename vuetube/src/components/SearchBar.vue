<template>
  <div>
    <p>검색어 : {{ category }}</p>
    <input type="text" v-model="searchData" @keyup.enter="search">
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchData: null,
    }
  },
  methods: {
    search() {
      this.$store.dispatch('search', this.searchData)
      this.searchData = null
    },
  },
  computed: {
    category() {
      return this.$store.state.category
    }
  }
}
</script>

<style>

</style>