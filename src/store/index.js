import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import loading from './modules/loading'
import login from './modules/login'
import getters from './getters'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    app,
    loading,
    login
  },
  getters,
  strict: process.env.NODE_ENV !== 'production'
})
