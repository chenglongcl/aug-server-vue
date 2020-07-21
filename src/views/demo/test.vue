<template>
  <div class="page">

  </div>
</template>
<script>
import { Manager } from "@/net/manager";
import { msg } from "@/net/bundle";
import { Connection } from "@/net/connection";
export default {
  components: {},
  data() {
    return {
      conn: null
    };
  },
  created() {
    this.conn = Manager.getInstance().openConnection(() => {
      let csUserLogin = new msg.CSUserLogin();
      csUserLogin.roomID = 1
      this.conn.sendMsg(csUserLogin);
      this.conn.onMsg(msg.SCResponse, (data) => {
        console.log(data);
      });
    });
  },
  methods: {}
};
</script>
<style lang="less">
</style>