import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    layout: "baseLayout",
  },
  mutations: {
    SET_LAYOUT(state, value){
      state.layout = value;
    }
  },
  actions: {
    setLayout({commit}, data){
      commit('SET_LAYOUT', data);
    }
  },
  modules: {
  }
})
