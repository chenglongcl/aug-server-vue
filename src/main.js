// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from '@/router'
import store from '@/store'
import App from './App'
import httpRequest from '@/utils/http/api'
import wxJs from "@/utils/wx/init";
import '@/icons'
import {
  XHeader,
  Loading,
  LoadingPlugin,
  AlertPlugin,
  ConfirmPlugin,
  ToastPlugin,
  WechatPlugin
} from "vux"

FastClick.attach(document.body)

//global register vux component
Vue.component('x-header', XHeader)
Vue.component('loading', Loading)

//global use plugin
Vue.use(LoadingPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)
Vue.use(WechatPlugin)

Vue.config.productionTip = false

// 挂载全局
//Vue.prototype.$http = httpRequest // ajax请求方法
Vue.use(httpRequest)
//微信jsSign
let wxJsN = new wxJs
wxJsN.init(Vue, 'go')

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
