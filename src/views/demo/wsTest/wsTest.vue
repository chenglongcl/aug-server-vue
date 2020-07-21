<template>
  <div class="page">
  </div>
</template>
<script>
import { Manager } from "@/net/manager";
import { msg } from "@/net/bundle";
import { Connection } from "@/net/connection";
//引入该页面需处理的消息
import Handlers from "./handlers";
export default {
  components: {},
  data() {
    return {
      conn: null,
      handlers: new Handlers(this) //注册该页面消息回调函数
    };
  },
  created() {
    this.conn = Manager.getInstance()
      .setConnectionMethods(
        () => {
          //ping消息
          this.conn.sendMsg(new msg.CSPing());
        },
        () => {
          //onErr
          console.log("连接已断开...");
        },
        () => {
          //onReconnect
          console.log("重新连接中...");
          this.login();
          this.onMsg();
        },
        () => {
          //onClose
          console.log("连接关闭...");
        }
      )
      .setHeartbeatOpts({ repeatLimit: 15 })
      .openConnection(() => {
        this.login();
        this.onMsg();
      });
  },
  methods: {
    login() {
      let csUserLogin = new msg.CSUserLogin();
      csUserLogin.roomID = 1;
      this.conn.sendMsg(csUserLogin);
    },
    onMsg() {
      this.conn.onMsg(msg.SCResponse, data => {
        console.log(data);
        this.handlers.parseRepData.decodeData(
          data.msgHeaders.msgName,
          data.data.value
        );
      });
    }
  }
};
</script>
<style lang="less">
</style>