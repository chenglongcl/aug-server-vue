import {
  Connection
} from "./connection";
let Manager = /** @class */ (() => {
  class Manager {
    constructor() {
      //connection
      this.conn = null;
      // dest host
      this.destURL = null;
      // init all properties
      this.conn = new Connection();
      this.destURL = "ws://127.0.0.1:3553";
    }
    // 实例化单例
    static getInstance() {
      if (this.sgingleton != null) {
        return this.sgingleton;
      } else {
        return this.sgingleton = new Manager();
      }
    }
    /**
     * 设置连接各种参数
     * @param {function()} ping 发送ping函数
     * @param {function()} onErr 连接错误回调参数
     * @param {function()} onReconnect 重新连接回调函数
     * @param {function()} onClose 连接关闭回调参数
     */
    setConnectionMethods(ping, onErr, onReconnect, onClose, ) {
      this.conn.ping = ping
      this.conn.onReconnect = onReconnect
      this.conn.onErr = onErr
      this.conn.onClose = onClose
      return this
    }
    /**
     *设置心跳参数
     * @param {Object} param0  心跳参数
     */
    setHeartbeatOpts({
      pingTimeout = 15000,
      pongTimeout = 10000,
      reconnectTimeout = 2000,
      repeatLimit = null
    }) {
      this.conn.opts = {
        pingTimeout: pingTimeout,
        pongTimeout: pongTimeout,
        reconnectTimeout: reconnectTimeout,
        repeatLimit: repeatLimit
      }
      return this
    }
    /**
     * 打开连接
     * @param onConnected 连接打开回调函数
     */
    openConnection(onConnected) {
      this.conn.onOpen = onConnected;
      this.conn.connect(this.destURL);
      return this.conn;
    }
  }
  //sgingleton
  Manager.sgingleton = null;
  return Manager;
})();
export {
  Manager
};
