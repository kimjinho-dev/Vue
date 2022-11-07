import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: "Hi",
  },
  getters: {
    messageLength(state) {
      return state.message.length
    }
  },
  mutations: {
    EDIT_MESSAGE(state,editMessage) {
        state.message = editMessage
    }
  },
  actions: {
    editMessage(context, editMessage) {
      context.commit('EDIT_MESSAGE',editMessage)
    }
  },
  modules: {
  }
})
