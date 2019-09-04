<template>
  <div class="timer-btn">
    <button @click.prevent="getCaptcha" :class="{'right-mobile': rightMobile,
                   'wrong-mobile-format': wrongMobileFormat}" v-show='!computedTime'>获取验证码</button>
    <button class="compute_time" v-show="computedTime">{{computedMessage}}</button>
  </div>
</template>

<script>
import moment from "moment";
import Secret from "@/utils/other/aes";
export default {
  name: "time-count-downer",
  props: {
    textValue: {
      type: String,
      default: ""
    },
    second: {
      type: Number,
      default: 60
    },
    mobile: {
      type: String
    }
  },
  data() {
    return {
      computedTime: 0,
      wrongMobileFormat: false
    };
  },
  computed: {
    rightMobile: function() {
      let regx = /^1\d{10}$/gi.test(this.mobile);
      if (this.mobile && !regx) {
        this.wrongMobileFormat = true;
      } else {
        this.wrongMobileFormat = false;
      }
      return regx;
    },
    computedMessage: function() {
      return this.textValue.replace(/\$\{second\}/g, this.computedTime);
    }
  },
  methods: {
    async getCaptcha() {
      if (this.rightMobile) {
        this.setTimer();
        let timestamp = moment().unix();
        let secret = new Secret();
        this.$http
          .postSMSCaptcha(
            {
              mobile: this.mobile
            },
            { "Aug-Token": secret.encrypt(timestamp) }
          )
          .then(({ data }) => {
            if (data.code == 0) {
              this.$vux.toast.text("发送成功", "top");
            } else {
              this.computedTime = 0;
              this.$vux.toast.text("发送失败,请重试", "top");
            }
          });
      }
    },
    setTimer() {
      this.computedTime = this.second;
      this.timer = () => {
        if (this.computedTime > 0) {
          this.computedTime--;
          setTimeout(this.timer, 1000);
        }
      };
      this.timer();
    }
  },
  destroyed() {
    // 组件被销毁时调用
  }
};
</script>

<style style="less">
.timer-btn {
  display: inline-block;
}
.timer-btn button {
  padding: 8px 10px;
  border: none;
  border-radius: 3px;
  outline: none;
  color: #fff;
  width: 100px;
}

button {
  background-color: #909399;
}

.right-mobile {
  background-color: #67c23a;
}

.wrong-mobile-format {
  background-color: #f56c6c;
}
</style>
