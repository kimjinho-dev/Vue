import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    urls: [],
    category: null,
    mainVideo: 0,
  },
  getters: {
  },
  mutations: {
    GET_URL(state,urls) {
      state.mainVideo = urls[0]
      console.log(state.mainVideo)
      state.urls = urls.filter(url => 
        {if(url !== state.mainVideo) return url
      })      
    },
    SEARCH(state,category) {
      state.category = category
    }
  },
  actions: {
    getUrl(context) {
      const apiKey = process.env.VUE_APP_YOUTUBE_API_KEY
      const params = {
        q: context.state.category,
        type: 'video',
        part: 'snippet',
        // order: 'viewCount',
        // chart: 'mostPopular',
        maxResults: 5,
        key: apiKey,        
      }
      axios({
        method:"get",
        url:'https://www.googleapis.com/youtube/v3/search',
        params:params,
      })
        .then(response => {
          context.commit('GET_URL',response.data.items)
        })
        .catch(() => {
          console.log('실패입니다')
        })
    },
    search(context,category) {
      context.commit('SEARCH',category)
      context.dispatch('getUrl')
    }
  },
  modules: {
  },
  created: {
    
  }
})
