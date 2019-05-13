import Vue from 'vue'
import Router from 'vue-router'
import TestModules from './modules/test'
Vue.use(Router)

const router = new Router({
  routes: [
    ...TestModules
  ]
})

export default router
