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
  //login
  getRefreshToken: (params = {}) => httpRequest({
    url: httpRequest.adornUrl('/refresh'),
    method: 'get',
    params: httpRequest.adornParams(params)
  }),
  //sms captcha
  postSMSCaptcha: (data = {}, headers = {}) => httpRequest({
    url: httpRequest.adornUrl('/v1/captcha/sendSMS', false),
    method: 'post',
    data: httpRequest.adornData(data),
    headers: headers
  }),
  //tbUSer
  postTbUserLoginWthSMS: (data = {}) => httpRequest({
    url: httpRequest.adornUrl('/v1/loginWithSMS', true),
    method: 'post',
    data: httpRequest.adornData(data),
  }),
  //tbTree
  getTbSubUserNodeCount: (params = {}) => httpRequest({
    url: httpRequest.adornUrl('/v1/userTree/getTbSubUserNodeCount'),
    method: 'get',
    params: httpRequest.adornParams(params)
  }),
  //tbVoteWorks
  getTbVoteWotks: (params = {}) => httpRequest({
    url: httpRequest.adornUrl('/v1/tbVoteWorks/getWithUser'),
    method: 'get',
    params: httpRequest.adornParams(params)
  }),
  postOrPutTbVoteWorks: ((data = {}) => httpRequest({
    url: httpRequest.adornUrl(`/v1/tbVoteWorks/${data.voteWorksID ? "updateFromServer" : "createFromServer"}`),
    method: `${data.voteWorksID ? "put" : "post"}`,
    data: httpRequest.adornData(data)
  })),
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
