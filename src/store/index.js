import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

var state = {
  token: ''
}

var mutations = {
  SET_TOKEN: (state, token) => {
    localStorage.setItem("token", token), (state.token = token);
  },

}
var getters = {

}
var actions = {
  // 异步获取token
  async getShowLook({
    commit
  }, token) {
    commit("SET_TOKEN", token);
  },

}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
