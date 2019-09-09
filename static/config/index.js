/**
 * 开发环境
 */
;
(function () {
  window.SITE_CONFIG = {};

  // api接口请求地址生成环境
  window.SITE_CONFIG['baseUrl'] = 'http://augserverapi.chenglongcl.com';
  window.SITE_CONFIG['goUrl'] = 'http://augserverapi.chenglongcl.com';
  // api接口请求地址开发环境
  window.SITE_CONFIG['devbaseUrl'] = 'http://augservergotest.com';
  window.SITE_CONFIG['devgoUrl'] = 'http://augservergotest.com';
  window.SITE_CONFIG['devProxyGoUrl'] = 'http://chenglongcl.natapp1.cc';


  // cdn地址 = 域名 + 版本号
  window.SITE_CONFIG['domain'] = './'; // 域名
  window.SITE_CONFIG['version'] = ''; // 版本号(年月日时分)
  window.SITE_CONFIG['cdnUrl'] = window.SITE_CONFIG.domain + window.SITE_CONFIG.version;

})();
