<template>
  <x-dialog v-model="dialogLogin" :hide-on-blur="false" :dialog-style="{'max-width': '100%', width: '100%', height: '70%', 'background-color': 'transparent'}" class="login-dialog">
    <div class="login-wrapper">
      <h1 class="title">
        登录
      </h1>
      <div class="cell">
        <input type="text" placeholder="请输入手机号" v-model="dataForm.mobile" maxlength="11" style="width:63%">
        <time-count-downer class="time-count-btn" ref="timeCountDowner" :mobile="dataForm.mobile" :second="10" text-value="${second}s"></time-count-downer>
      </div>
      <div class="cell">
        <input type="text" placeholder="请输入短信验证码" required v-model="dataForm.captcha" style="width:100%">
        <p v-if="validatorErrMsg!==''">{{validatorErrMsg}}</p>
      </div>
      <div class="cell">
        <button class="submit-btn" @click="onSubmit">登录</button>
      </div>
    </div>
  </x-dialog>
</template>

<script>
import store from "@/store";
import { XDialog, cookie } from "vux";
import { mapState } from "vuex";
import TimeCountDowner from "@/components/common/timeCountDowner";
import AsyncValidator from "async-validator";
export default {
  name: "dialog-login",
  components: {
    XDialog,
    TimeCountDowner
  },
  computed: {
    ...mapState({
      dialogLogin: state => state.login.dialogLogin
    })
  },
  data() {
    return {
      dataForm: {
        mobile: "",
        captcha: "",
        ancestor: ""
      },
      descriptor: {
        mobile(rule, value, callback, source, options) {
          let errors = [];
          if (!/^1(3|4|5|7|8)\d{9}$/.test(value)) {
            errors.push({ message: "请填写正确手机号", field: rule.field });
          }
          return errors;
        },
        captcha: {
          type: "string",
          required: true,
          message: "请填写短信验证码"
        }
      },
      validatorErrMsg: ""
    };
  },
  methods: {
    onSubmit() {
      let validator = new AsyncValidator(this.descriptor);
      validator.validate(this.dataForm, (errors, fields) => {
        if (errors) {
          this.validatorErrMsg = errors[0].message;
          return;
        }
        // validation passed
        this.validatorErrMsg = "";
        this.$http
          .postTbUserLoginWthSMS({
            mobile: this.dataForm.mobile,
            captcha: this.dataForm.captcha,
            ancestor: parseInt(this.$route.query.ancestor),
            from: String(this.$route.query.from)
          })
          .then(({ data }) => {
            if (data.code == 0) {
              cookie.set("token", data.data.token);
              cookie.set(
                "token_valid_time",
                JSON.stringify({
                  expired_at: data.data.expired_at,
                  refresh_expired_at: data.data.refresh_expired_at
                })
              );
              this.$vux.toast.text("登录成功", "top");
              store.commit("login/updateLoginSuccess", true);
              store.commit("login/updateDialogLoginStatus", false);
            } else {
              this.$vux.toast.text(data.message, "top");
            }
          });
      });
    }
  }
};
</script>

<style lang="less">
.login-wrapper {
  position: relative;
  width: 90%;
  margin: 0 auto;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 20px;
  text-align: left;
  box-shadow: 0 3px 20px rgba(255, 255, 255, 0.1);
  .title {
    font-size: 16px;
    margin-bottom: 10px;
  }
  .cell {
    margin-bottom: 20px;
    p {
      font-size: 12px;
      margin-top: 5px;
      color: #ee4b3e;
    }
  }
  ::-webkit-input-placeholder {
    line-height: 30px;
  }
  input {
    outline: none;
    color: #666;
    font-size: 14px;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #e3e3e3;
    -webkit-appearance: none;
    box-sizing: border-box;
  }
  input:hover {
    border: 1px solid #b4a078;
  }
  input:focus {
    border: 1px solid #b4a078;
    box-shadow: 0 0 0 2px rgba(180, 160, 120, 0.2);
  }
  .time-count-btn {
    margin-left: 5px;
  }
  .submit-btn {
    padding: 12px 20px;
    color: #fff;
    transition: 0s;
    border: 0;
    background: #2bd0ff;
    background: linear-gradient(180deg, #2bd0ff 0, #1c95fb);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="$top",endColorstr="$bottom",GradientType=0);
    box-shadow: 0 3px 5px rgba(28, 149, 251, 0.4);
    width: 100%;
    margin-bottom: 10px;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    font-weight: 500;
    font-size: 14px;
    border-radius: 4px;
  }
}
</style>