<template>
  <div class="vote-my-page">
    <div class="header-img">
      <img src="https://aisyweixinpic.oss-cn-shanghai.aliyuncs.com/20171223/augadmin/fake.png" alt="">
    </div>
    <div class="arc-panel">
      <div class="works-info">
        <flexbox>
          <flexbox-item :span="8">
            <div class="number">
              推广人数: <span>{{userInfo.subUserCount}}</span>
            </div>
            <div class="tip">生成海报,分享推广赢取奖励</div>
          </flexbox-item>
          <flexbox-item :span="4">
            <span class="share-btn" @click="createPoster">
              立即分享
            </span>
          </flexbox-item>
        </flexbox>
      </div>
    </div>
    <div class="vote-works-wrapper">
      <div class="tips">
        <p>征集时间</p>
        <p class="secondary">{{tbVote.signUpStartTime}}至{{tbVote.signUpEndTime}}</p>
      </div>
      <div class="form-wrapper">
        <flexbox :gutter="10" class="form-row">
          <flexbox-item :span="2" class="cell-title">
            <span>姓名</span>
          </flexbox-item>
          <flexbox-item>
            <input type="text" v-model="dataForm.title">
          </flexbox-item>
        </flexbox>
        <flexbox :gutter="10" class="form-row">
          <flexbox-item :span="2" class="cell-title">
            <span>广告语</span>
          </flexbox-item>
          <flexbox-item>
            <textarea v-model="dataForm.words" maxlength="30"></textarea>
          </flexbox-item>
        </flexbox>
        <p v-if="validatorErrMsg!==''">{{validatorErrMsg}}</p>
        <button class="submit-btn" @click="onSubmit">立即提交</button>
      </div>
    </div>
    <div class="vote-rules">
      <div class="title">活动说明 :</div>
      <div class="content" v-html="tbVote.content">
      </div>
    </div>
    <!--other-->
    <!--海报DOM-->
    <div class="poster" ref="poster">
      <div class="wrapper">
        <div class="qrcode">
          <img :src="qrocdeSrc" alt="">
        </div>
        <div class="bg">
          <img src="https://aisyweixinpic.oss-cn-shanghai.aliyuncs.com/20171223/20190831poster.jpg" alt="">
        </div>
      </div>
    </div>
    <!--生成结果-->
    <x-dialog v-model="showPosterDialog" :hide-on-blur="false" :dialog-style="{'max-width': '100%', width: '100%', height: '70%', 'background-color': 'transparent'}" class="poster-dialog">
      <div class="tip">
        长按图片可以保存呦!
      </div>
      <div class="image">
        <img :src="posterSrc" alt="">
      </div>
      <x-icon type="ios-close-outline" style="fill:#fff;" @click="showPosterDialog = false"></x-icon>
    </x-dialog>
    <!--生成前过渡遮罩-->
    <div class="white-mask" ref="whiteMask"></div>
    <loading :show="loadingShow" text="海报生成中"></loading>
    <!--无效活动url-->
    <x-dialog v-model="showErrUrl" :hide-on-blur="false" :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}">
      <p style="color:#fff;text-align:center;">
        <span style="font-size:30px;">无效报名链接</span>
        <br />
        <span style="font-size:30px;">请重新扫码进入</span>
      </p>
    </x-dialog>
  </div>
</template>

<script>
import store from "@/store";
import { mapState } from "vuex";
import { Flexbox, FlexboxItem, XDialog, Loading, cookie } from "vux";
import Html2canvas from "html2canvas";
import QRCode from "qrcode";
import AsyncValidator from "async-validator";
import qs from "querystringify";
import { parseURL } from "@/utils/common";
import { setTimeout } from "timers";
export default {
  components: {
    Flexbox,
    FlexboxItem,
    XDialog
  },
  data() {
    return {
      showPosterDialog: false,
      loadingShow: false,
      posterSrc: "",
      qrocdeSrc: "",
      showErrUrl: false,
      dataForm: {
        voteID: this.$route.query.voteID,
        voteWorksID: 0,
        title: "",
        words: "",
        from: this.$route.query.from,
        ancestor: this.$route.query.ancestor
      },
      tbVote: {
        signUpStartTime: "--",
        signUpEndTime: "--",
        content: ""
      },
      userInfo: {
        subUserCount: "-",
        userID: ""
      },
      descriptor: {
        title: {
          type: "string",
          required: true,
          message: "请填写姓名"
        },
        words: [
          {
            type: "string",
            required: true,
            message: "请填写广告语"
          },
          {
            min: 1,
            max: 30,
            message: "广告语长度1-30个字符"
          }
        ]
      },
      validatorErrMsg: ""
    };
  },
  created() {
    if (
      !this.dataForm.voteID ||
      !this.dataForm.from ||
      !this.dataForm.ancestor
    ) {
      this.showErrUrl = true;
      return;
    }
    this.getTbVote();
    if (!cookie.get("token")) {
      store.commit("login/updateDialogLoginStatus", true);
      return;
    }
    this.getData();
  },
  mounted() {},
  computed: {
    ...mapState({
      loginSuccess: state => state.login.loginSuccess
    })
  },
  methods: {
    async getData() {
      await this.getTbSubUserNodeCount();
      await this.getTbVoteWorks();
    },
    getTbVote() {
      this.$http
        .getTbVote({
          id: this.dataForm.voteID
        })
        .then(({ data }) => {
          if (data.code == 0) {
            document.title = data.data.title;
            this.tbVote.signUpStartTime = data.data.signUpStartTime;
            this.tbVote.signUpEndTime = data.data.signUpEndTime;
            this.tbVote.content = data.data.content;
          }
        });
    },
    async getTbSubUserNodeCount() {
      await this.$http.getTbSubUserNodeCount().then(({ data }) => {
        if (data.code == 0) {
          this.userInfo.subUserCount = data.data.count;
          this.userInfo.userID = data.data.userID;
          this.$nextTick(() => {
            let urlSource = parseURL(window.location.href);
            let createUrlParams = qs.stringify(
              {
                voteID: this.dataForm.voteID,
                ancestor: this.userInfo.userID,
                from: "signUp"
              },
              true
            );
            let url = `${urlSource.protocol}://${urlSource.host}/#${this.$route.path}${createUrlParams}`;
            QRCode.toDataURL(url, {
              width: 100,
              margin: 2
            })
              .then(url => {
                this.qrocdeSrc = url;
              })
              .catch(err => {
                console.error(err);
              });
          });
        }
      });
    },
    async getTbVoteWorks() {
      await this.$http
        .getTbVoteWotks({
          voteID: this.dataForm.voteID
        })
        .then(({ data }) => {
          if (data.code == 0) {
            this.dataForm.voteWorksID = data.data.voteWorksId;
            this.dataForm.title = data.data.title;
            this.dataForm.words = data.data.words;
          }
        });
    },
    createPoster() {
      this.loadingShow = true;
      this.$refs["whiteMask"].style.display = "block";
      this.$refs["poster"].style.display = "block";
      Html2canvas(this.$refs.poster, { allowTaint: false, useCORS: true }).then(
        canvas => {
          this.posterSrc = canvas.toDataURL("image/png");
          this.showPosterDialog = true;
          this.loadingShow = false;
          this.$refs["poster"].style.display = "none";
          this.$refs["whiteMask"].style.display = "none";
        }
      );
    },
    onSubmit() {
      let validator = new AsyncValidator(this.descriptor);
      validator.validate(this.dataForm, (errors, fields) => {
        if (errors) {
          this.validatorErrMsg = errors[0].message;
          return;
        }
        this.$http
          .postOrPutTbVoteWorks({
            voteID: parseInt(this.dataForm.voteID),
            voteWorksID: this.dataForm.voteWorksID,
            title: this.dataForm.title,
            words: this.dataForm.words
          })
          .then(({ data }) => {
            if (data.code == 0) {
              let statusStr = this.dataForm.voteWorksID ? "修改" : "报名";
              this.$vux.alert.show({
                title: "消息",
                content: `${statusStr}成功,请等待审核`,
                onShow() {},
                onHide() {}
              });
            } else {
              this.$vux.toast.text(data.message, "top");
            }
          });
      });
    }
  },
  watch: {
    loginSuccess(newValue, oldValue) {
      if (newValue) {
        this.getData();
      }
    }
  }
};
</script>
<style lang="less">
.body {
  background-color: #f7f7f7;
}
.weui-mask {
  background: rgba(0, 0, 0, 0.9);
}
.vote-my-page {
  position: relative;
  min-height: 100vh;
  .header-img {
    height: 210px;
  }
  .arc-panel {
    width: 100%;
    height: 130px;
    position: relative;
    overflow: hidden;
    &:after {
      content: "";
      width: 110%;
      height: 95px;
      position: absolute;
      left: -5%;
      top: 0;
      z-index: -1;
      border-radius: 0 0 50% 50%;
      background: #4abdac;
    }
    .works-info {
      position: absolute;
      width: 90%;
      height: 100px;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      box-shadow: 0 3px 20px rgba(0, 0, 0, 0.1);
      background-color: #ffffff;
      border-radius: 8px;
      padding: 20px;
      box-sizing: border-box;
      color: #333333;
      .number span {
        color: #ee4b3e;
        font-size: 20px;
      }
      .tip {
        color: #909399;
        font-size: 12px;
      }
      .share-btn {
        width: 70px;
        height: 30px;
        color: #fff;
        transition: 0s;
        border: 0;
        background-color: #ff6dc3;
        background: linear-gradient(180deg, #ff6dc3 0, #ff2e61);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="$top",endColorstr="$bottom",GradientType=0);
        box-shadow: 0 10px 24px rgba(255, 72, 129, 0.4);
        display: -ms-flexbox;
        display: -moz-flex;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-left: 20px;
        border-radius: 12px;
        font-size: 14px;
      }
    }
  }
  .vote-works-wrapper {
    position: relative;
    padding: 20px;
    margin: 0 20px;
    box-sizing: border-box;
    box-shadow: 0 3px 20px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    border-radius: 8px;
    .tips {
      text-align: center;
      font-size: 16px;
      color: #333333;
      margin-bottom: 10px;
      .secondary {
        color: #909399;
        font-size: 14px;
      }
    }
    .form-wrapper {
      p {
        font-size: 12px;
        color: #ee4b3e;
      }
      .form-row {
        margin-bottom: 20px;
        .cell-title {
          font-size: 16px;
          color: #333333;
          span {
            position: relative;
            width: 100%;
            text-align: justify;
            float: left;
            font-size: 16px;
            font-weight: 700;
            color: #333333;
            height: 30px;
            line-height: 30px;
          }
          span::after {
            content: "";
            display: inline-block;
            width: 100%;
          }
        }
        ::-webkit-input-placeholder {
          line-height: 1.5;
        }
        input {
          outline: none;
          color: #666;
          font-size: 14px;
          padding: 6px;
          border-radius: 3px;
          border: 1px solid #e3e3e3;
          -webkit-appearance: none;
          width: 100%;
          box-sizing: border-box;
        }
        input:hover {
          border: 1px solid #ff8a85;
        }
        input:focus {
          border: 1px solid #ff8a85;
          box-shadow: 0 0 0 2px rgba(255, 97, 142, 0.2);
        }
        textarea {
          outline: none;
          color: #666;
          font-size: 16px;
          padding: 6px;
          border-radius: 3px;
          border: 1px solid #e3e3e3;
          -webkit-appearance: none;
          width: 100%;
          box-sizing: border-box;
          height: 100px;
        }
        textarea:hover {
          border: 1px solid #ff8a85;
        }
        textarea:focus {
          border: 1px solid #ff8a85;
          box-shadow: 0 0 0 2px rgba(255, 97, 142, 0.2);
        }
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
  }
  .vote-rules {
    position: relative;
    padding: 20px;
    box-sizing: border-box;
    .title {
      color: #606266;
      font-size: 14px;
    }
    .content {
      font-size: 14px;
      color: #606266;
      text-align: justify;
    }
  }

  .poster {
    position: absolute;
    top: 0;
    display: none;
    .wrapper {
      position: relative;
      width: 100%;
      height: 590px;
      .qrcode {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100px;
        height: 100px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .poster-dialog {
    .tip {
      color: #ffcccc;
      font-size: 18px;
      margin-bottom: 10px;
      font-weight: bold;
    }
    .image {
      width: 80%;
      margin: 0 auto 10px auto;
    }
  }
  .login-dialog {
  }
  .white-mask {
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 1);
    display: none;
  }
}
</style>