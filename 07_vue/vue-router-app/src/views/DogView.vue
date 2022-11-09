<template>
  <div>
    <h1>강아지 페이지</h1>
    <img :src="imgSrc" alt="">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "DogView",
  data() {
    return {
      imgSrc: null,
      message: null,
    }
  },
  methods: {
    getDogUrl() {
      const breed = this.$route.params.breed
      // const dogUrl = 'https://dog.ceo/api/breed/' + breed + '/images/random'
      const dogUrl = `https://dog.ceo/api/breed/${breed}/images/random`
      axios({
        method: 'get',
        url: dogUrl,
      })
        .then((response) => {
          this.imgSrc = response.data.message
        })
        .catch((error) => {
          this.$router.push({name:'NotFound404'})
          // this.$router.push('/404')
          console.log(error)
        })
    }
  },
  created() {
    this.getDogUrl()
  }
}
</script>

<style>

</style>