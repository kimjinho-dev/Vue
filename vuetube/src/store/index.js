import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    urls: []
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    getUrl() {
      const apiKey = process.env.VUE_APP_YOUTUBE_API_KEY
      axios({
        method:"get",
        url:`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=5&key=${apiKey}`,
      })
        .then(response => {
          console.log(response.data)
        })
        .catch(() => {
          console.log('실패입니다')
        })
    }
  },
  modules: {
  }
})
