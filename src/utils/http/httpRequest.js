import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import merge from 'lodash/merge'

const http = axios.create({
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  isRetryRequest: false, //用来处理刷新token后重新请求的自定义变量
  showProgress: true //默认显示请稍后提示框
})

/**
 * 请求拦截
 */
http.interceptors.request.use(config => {
  if (config.showProgress) {
    Vue.$vux.loading.show({
      text: '请稍候...'
    })
  }
  return config
}, error => {
  return Promise.reject(error)
})

/**
 * 响应拦截
 */
http.interceptors.response.use(response => {
  Vue.$vux.loading.hide()
  if (response.data && response.data.code === 401) { // 401, token失效

  }
  return response
}, error => {
  Vue.$vux.loading.hide()
  Vue.$vux.alert.show({
    title: "提示",
    content: "网络错误，请稍后重试"
  });
  return Promise.reject(error)
})


/**
 * 请求地址处理
 * @param {*} actionName action方法名称
 */
http.adornUrl = (actionName, showProgress = true, apiUrl = 'baseUrl') => {
  http.defaults.showProgress = showProgress
  // 非生产环境 && 开启代理, 接口前缀统一使用[/proxyApi/]前缀做代理拦截!
  //return (process.env.NODE_ENV !== 'production' && process.env.OPEN_PROXY ? '/proxyApi/' : window.SITE_CONFIG.baseUrl) + actionName
  return (process.env.NODE_ENV !== 'production' ? window.SITE_CONFIG['dev' + apiUrl] : window.SITE_CONFIG[apiUrl]) + actionName
}

/**
 * get请求参数处理
 * @param {*} params 参数对象
 * @param {*} openDefultParams 是否开启默认参数?
 */
http.adornParams = (params = {}, openDefultParams = true) => {
  var defaults = {
    't': new Date().getTime()
  }
  return openDefultParams ? merge(defaults, params) : params
}


/**
 * post请求数据处理
 * @param {*} data 数据对象
 * @param {*} openDefultdata 是否开启默认数据?
 * @param {*} contentType 数据格式
 *  json: 'application/json; charset=utf-8'
 *  form: 'application/x-www-form-urlencoded; charset=utf-8'
 */
http.adornData = (data = {}, openDefultdata = true, contentType = 'json') => {
  var defaults = {
    't': new Date().getTime()
  }
  data = openDefultdata ? merge(defaults, data) : data
  return contentType === 'json' ? JSON.stringify(data) : qs.stringify(data)
}

export default http
