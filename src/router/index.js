import Vue from 'vue'
import Router from 'vue-router'
import TestModules from './modules/test'
import VoteModules from './modules/vote'
Vue.use(Router)

const router = new Router({
  routes: [
    ...TestModules,
    ...VoteModules
  ]
})

export default router
