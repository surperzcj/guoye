import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});
const state = {
  token: '',
};
const getters = { //实时监听state值的变化(最新状态)
  getUserInfo(state) {
    return state.token
  },
};
const mutations = {
  settoken(state, id) {
    state.token = id;
  },
};
const actions = {

};
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins: [vuexLocal.plugin]
});
export default store;
