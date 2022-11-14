import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'
import createPersistedState from 'vuex-persistedstate'

const API_URL = "http://127.0.0.1:8000"

Vue.use(Vuex)


export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    token:null,
    articles: [],
  },
  getters: {
    isLogin(state) {
      return state.token ? true : false
    }
  },
  mutations: {
    GET_ARTICLES(state,articles) {
      state.articles = articles
    },
    // SIGN_UP(state,token) {
    //   state.token = token
    // }
    SAVE_TOKEN(state,token) {
      state.token = token
      router.push({name:'ArticleView'})
    }
  },
  actions: {
    getArticles(context) {
      axios({
        url:`${API_URL}/api/v1/articles/`,
        method:"get",
        headers: {
          Authorization: `Token ${context.state.token}`
        }
      })
      .then(response => {
        // console.log(response)
        context.commit('GET_ARTICLES', response.data)
      })
      // .catch(error =>{
      //   console.log(error)
      // })
    },
    signUp(context,payload) {
      axios({
        url:`${API_URL}/accounts/signup/`,
        method:"post",
        data: {
          username: payload.username,
          password1: payload.password1,
          password2: payload.password2,
        }
      })
      .then(response => {
        console.log(response,context)
        // context.commit('SIGN_UP', response.data.key)
        context.commit('SAVE_TOKEN', response.data.key)
      })
      .catch(error =>{
        console.log(error)
      })
    },
    logIn(context,payload) {
      axios({
        url:`${API_URL}/accounts/login/`,
        method:"post",
        data: {
          username: payload.username,
          password: payload.password,
        }
      })
      .then(response => {
        console.log(response,context)
        context.commit('SAVE_TOKEN', response.data.key)
      })
      .catch(error =>{
        console.log(error)
      })
    },
  },
  modules: {
  }
})
