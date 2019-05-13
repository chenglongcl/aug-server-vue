export default class {
  constructor() {}
  init(vue, type) {
    let urlPrefix
    if (type == "go") {
      urlPrefix = 'getGoWxSignature'
    } else {
      urlPrefix = 'getWxSignature'
    }
    vue.http[urlPrefix + process.env.NODE_ENV]({
      url: window.location.href,
      wechat: "jtyy_wechat"
    }).then(({
      data
    }) => {
      vue.wechat.config({
        debug: false,
        appId: data.data.appId,
        timestamp: data.data.timestamp,
        nonceStr: data.data.nonceStr,
        signature: data.data.signature,
        jsApiList: [
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'hideOptionMenu',
          'chooseWXPay'
        ]
      })
    }).catch(() => {
      console.log("获取jssdk签名失败");
    });
  }
}
