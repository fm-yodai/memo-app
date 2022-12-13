import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    memos: []
  },
  getters: {
  },
  mutations: {
    save (state, newMemo) {
      state.memos.unshift(newMemo)
    }
  },
  actions: {
  },
  modules: {
  }
})
