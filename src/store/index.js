import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    memos: []
  },
  getters: {
  },
  mutations: {
    save (state, newMemo) {
      newMemo.id = ++this.state.count
      state.memos.unshift(newMemo)
    }
  },
  actions: {
  },
  modules: {
  }
})
