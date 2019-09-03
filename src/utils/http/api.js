import httpRequest from '@/utils/http/httpRequest'

const api = {
  getTestList: (params = {}) => httpRequest({
    url: httpRequest.adornUrl('/f/goods', false),
    method: 'get',
    params: httpRequest.adornParams(params)
  }),
  getGoWxSignatureproduction: (params = {}) => httpRequest({
    url: httpRequest.adornUrl('/v1/wechat/jssdk/sign', false),
    method: 'get',
    params: httpRequest.adornParams(params)
  }),
  getGoWxSignaturedevelopment: (params = {}) => httpRequest({
    url: httpRequest.adornUrl('/v1/wechat/jssdk/sign', false),
    method: 'get',
    params: httpRequest.adornParams(params)
  }),
  postMallOrder: (data = {}) => httpRequest({
    url: httpRequest.adornUrl('/v1/mall/order', true),
    method: 'post',
    data: httpRequest.adornData(data)
  }),
}

// export default api
export default { //作为组件库(install)
  install: function (Vue, name = "$http") {
    Object.defineProperty(Vue.prototype, name, {
      value: api
    }); //将组件库挂载在原型对象上
    Vue.http = api;
  }
}
