<template>
  <div class="vote-index-page">
    <div class="header">
      <img src="https://aisyweixinpic.oss-cn-shanghai.aliyuncs.com/20171223/index-header.jpg" alt="">
    </div>
    <div class="nav-wrapper">
      <flexbox :gutter="0">
        <flexbox-item :span="10">
          <div class="left-block">
            <tab :bar-active-color="'#F37A89'" :active-color="'#F37A89'">
              <tab-item selected @on-item-click="onNavItemClick(0)">活动介绍</tab-item>
              <tab-item @on-item-click="onNavItemClick(1)">奖励机制</tab-item>
              <tab-item @on-item-click="onNavItemClick(2)">人气评选</tab-item>
              <tab-item @on-item-click="onNavItemClick(3)">抽奖</tab-item>
            </tab>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="right-block" @click="subscribe">
            <span>关注</span>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="main">
      <div class="content" v-html="tbVote.content" v-if="this.currNavIndex === 0">
      </div>
      <div class="reward-rules" v-html="tbVote.rewardRules" v-if="this.currNavIndex === 1">
      </div>
      <div class="vote-wrapper" v-show="this.currNavIndex === 2">
        <div class="search-panel">
          <flexbox :gutter="0">
            <flexbox-item :span="10">
              <input type="text" v-model="keyword" placeholder="请输入姓名或编号">
            </flexbox-item>
            <flexbox-item>
              <div class="search-block" @click="search">
                <span>
                  <icon-svg name="search" class="svg"></icon-svg>
                </span>
              </div>
            </flexbox-item>
          </flexbox>
        </div>
        <div class="statis-panel">
          <flexbox :gutter="0">
            <flexbox-item :span="6">
              <div class="left-block vux-1px-r">
                <p>参赛人数</p>
                <p class="b">{{statis.voteWorksCount}}</p>
              </div>
            </flexbox-item>
            <flexbox-item :span="6">
              <div class="right-block">
                <p>累计人气</p>
                <p class="b">{{statis.voteWorksVotesSum}}</p>
              </div>
            </flexbox-item>
          </flexbox>
        </div>
        <div class="btn-tabs">
          <flexbox>
            <flexbox-item>
              <x-button type="default" :class='{"active":currBtnTabsIndex===0}' @click.native="onBtnTabsItemClick(0)">全部参赛</x-button>
            </flexbox-item>
            <flexbox-item>
              <x-button type="default" :class='{"active":currBtnTabsIndex===1}' @click.native="onBtnTabsItemClick(1)">排名</x-button>
            </flexbox-item>
            <flexbox-item>
              <x-button type="default" :class='{"active":currBtnTabsIndex===2}' @click.native="onBtnTabsItemClick(2)">活动规则</x-button>
            </flexbox-item>
          </flexbox>
        </div>
        <!--btn-tabs--content-->
        <div class="works-list" v-show="this.currBtnTabsIndex === 0">
          <mescroll-vue ref="mescroll" :up="mescrollUp" @init="mescrollInit">
            <div id="dataList" class="data-list">
              <flexbox :gutter="0" class="row" v-for="(item,index) in dataList" :key="item.id">
                <flexbox-item :span="2">
                  <div class="info">
                    <p>{{item.noID}}</p>
                    <p>{{item.title}}</p>
                  </div>
                </flexbox-item>
                <flexbox-item>
                  <div class="words-block">
                    <p class="words">{{item.words}}</p>
                  </div>
                </flexbox-item>
                <flexbox-item :span="3">
                  <div class="num" @click="onSubmitVotes(item)">
                    <p class="a">人气:{{item.votes}}</p>
                    <p class="b">为TA点赞</p>
                  </div>
                </flexbox-item>
              </flexbox>
            </div>
          </mescroll-vue>
        </div>
        <div class="rank-table" v-if="this.currBtnTabsIndex === 1">
          <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
            <thead>
              <tr style="background-color: #F7F7F7">
                <th>名次</th>
                <th style="width:220px;">广告语</th>
                <th>点赞数</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in rank" :key="index">
                <td>{{item.rank}}</td>
                <td>
                  <p class="name">{{item.words}}</p>
                </td>
                <td>{{item.votes}}</td>
              </tr>
            </tbody>
          </x-table>
        </div>
        <div class="vote-rule" v-if="this.currBtnTabsIndex === 2" v-html="tbVote.voteRules">
        </div>
      </div>
    </div>
    <x-dialog v-model="showDialogSubscribe" :hide-on-blur="false" :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}" dialog-transition="fade-own" class="subscribe-dialog">
      <p class="tip">
        长按二维码关注我们!
      </p>
      <p class="subscribe-qrcode">
        <img src="https://aisyweixinpic.oss-cn-shanghai.aliyuncs.com/20171223/testqcord.png" alt="">
      </p>
      <p class="close" @click="showDialogSubscribe = false">
        <x-icon type="ios-close-outline" style="fill:#fff;"></x-icon>
      </p>
    </x-dialog>
  </div>
</template>
<script>
import store from "@/store";
import { mapState } from "vuex";
import MescrollVue from "mescroll.js/mescroll.vue";
import {
  Flexbox,
  FlexboxItem,
  Tab,
  TabItem,
  XButton,
  XTable,
  XDialog,
  cookie
} from "vux";
export default {
  components: {
    Flexbox,
    FlexboxItem,
    Tab,
    TabItem,
    XButton,
    XTable,
    XDialog,
    MescrollVue
  },
  data() {
    let mescrollUp = {
      callback: this.upCallback,
      page: {
        num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
        size: 20 // 每页数据的数量
      },
      noMoreSize: 5, // 如果列表已无数据,可设置列表的总数量要大于等于5条才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
      toTop: {
        src: "./static/mescroll/mescroll-totop.png" // 回到顶部按钮的图片路径,支持网络图
      },
      empty: {
        warpId: "dataList", // 父布局的id;
        icon: "./static/mescroll/mescroll-empty.png", // 图标,支持网络图
        tip: "暂无相关数据~", // 提示
        btntext: "", // 按钮,默认""
        btnClick: null
      },
      lazyLoad: {
        use: false, // 是否开启懒加载,默认false
        attr: "imgurl", // 网络地址的属性名 (图片加载成功会移除该属性): <img imgurl='网络图  src='占位图''/>
        showClass: "mescroll-lazy-in", // 图片加载成功的显示动画: 渐变显示,参见mescroll.css
        delay: 500, // 列表滚动的过程中每500ms检查一次图片是否在可视区域,如果在可视区域则加载图片
        offset: 200 // 超出可视区域200px的图片仍可触发懒加载,目的是提前加载部分图片
      },
      onScroll: (mescroll, y, isUp) => {}
    };
    return {
      voteID: this.$route.query.voteID,
      tbVote: {},
      statis: {},
      keyword: "",
      rank: [],
      mescroll: null, // mescroll实例对象
      mescrollUp: mescrollUp,
      dataList: [],
      currNavIndex: 0,
      currBtnTabsIndex: 0,
      showDialogSubscribe: false
    };
  },
  created() {
    this.getTbVote();
    this.getTbVoteStatis();
    this.getTbvoteWorksRank();
  },
  mounted() {},
  computed: {
    ...mapState({
      loginSuccess: state => state.login.loginSuccess
    })
  },
  methods: {
    getTbVote() {
      this.$http
        .getTbVote({
          id: this.voteID
        })
        .then(({ data }) => {
          if (data.code == 0) {
            document.title = data.data.title;
            this.tbVote = data.data;
          }
        });
    },
    getTbVoteStatis() {
      this.$http
        .getTbVoteStatis({
          voteID: this.voteID
        })
        .then(({ data }) => {
          if (data.code == 0) {
            this.statis = data.data;
          }
        });
    },
    getTbvoteWorksRank() {
      this.$http
        .getTbvoteWorksRank({ voteID: this.voteID })
        .then(({ data }) => {
          if (data.code == 0) {
            this.rank = data.data;
          }
        });
    },
    onSubmitVotes(item) {
      if (!cookie.get("token")) {
        store.commit("login/updateDialogLoginStatus", true);
        return;
      }
      this.$http
        .getTbVoteWorksVotes({
          voteWorksID: item.voteWorksID,
          voteID: this.voteID
        })
        .then(({ data }) => {
          if (data.code == 0) {
            item.votes++;
            this.statis.voteWorksVotesSum++;
            this.$vux.alert.show({
              title: "消息",
              content: "点赞成功",
              dialogTransition: "fade-own"
            });
          } else {
            this.$vux.alert.show({
              title: "消息",
              content: data.message,
              dialogTransition: "fade-own"
            });
          }
        });
    },
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit(mescroll) {
      this.mescroll = mescroll;
    },
    // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    upCallback(page, mescroll) {
      this.$http
        .getTbVoteWotksList({
          voteID: parseInt(this.voteID),
          page: page.num,
          keyword: this.keyword
        })
        .then(({ data }) => {
          if (page.num == 1) {
            this.dataList = [];
          }
          this.dataList = [...this.dataList, ...data.data.list];
          this.mescroll.endByPage(this.dataList.length, data.data.totalPage);
          this.$vux.loading.hide();
        });
    },
    search() {
      this.$vux.loading.show({
        text: "请稍候..."
      });
      this.mescroll.resetUpScroll();
    },
    onNavItemClick(index) {
      this.currNavIndex = index;
    },
    onBtnTabsItemClick(index) {
      this.currBtnTabsIndex = index;
    },
    subscribe() {
      this.showDialogSubscribe = true;
    }
  }
};
</script>

<style lang="less">
.fade-own-enter-active,
.fade-own-leave-active {
  transition: opacity 0.5s;
}
.vote-index-page {
  position: relative;
  background-color: #f7f7f7;
  min-height: 100vh;
  .header {
    width: 100%;
    height: 210px;
  }
  .nav-wrapper {
    .right-block {
      background-color: #f37a89;
      padding: 9px 0;
      text-align: center;
      color: #ffffff;
    }
  }
  .main {
    .content,
    .reward-rules {
      background-color: #ffffff;
      position: relative;
      padding: 20px;
      color: #333333;
      font-size: 14px;
      text-align: justify;
      min-height: 530px;
      p {
        line-height: 2;
      }
    }
    .vote-wrapper {
      position: relative;
      .search-panel {
        padding: 10px 20px;
        ::-webkit-input-placeholder {
          line-height: 20px;
        }
        input {
          outline: none;
          color: #666;
          font-size: 14px;
          padding: 5px;
          border-radius: 3px 0 0 3px;
          border: 1px solid #f37a89;
          -webkit-appearance: none;
          height: 40px;
          box-sizing: border-box;
          width: 100%;
        }
        input:hover {
          border: 1px solid #f37a89;
        }
        input:focus {
          border: 1px solid #f37a89;
          box-shadow: 0 0 0 2px rgba(180, 160, 120, 0.2);
        }
        .search-block {
          background-color: #f37a89;
          height: 40px;
          border-left: none;
          border-radius: 0 3px 3px 0;
          text-align: center;
          font-size: 30px;
          .svg {
            fill: #ffffff;
          }
        }
      }
      .statis-panel {
        background-color: #ffffff;
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
        padding: 5px 0;
        .left-block,
        .right-block {
          text-align: center;
          color: #333333;
          font-size: 14px;
          .b {
            color: #f37a89;
          }
        }
      }
      .btn-tabs {
        padding: 10px 10px;
        button {
          font-size: 14px;
          color: #333333;
          ::after {
            border: 1px solid #e5e5e5;
          }
        }
        .active {
          background-color: #f37a89;
          color: #ffffff;
        }
      }
      .works-list {
        position: relative;
        padding: 10px 0;
        .mescroll {
          position: fixed;
          top: 435px;
          bottom: 0;
          height: auto;
        }
        .row {
          margin-bottom: 10px;
          box-shadow: 0 3px 20px rgba(0, 0, 0, 0.1);
          .info {
            background-color: #fde9e2;
            text-align: center;
            font-size: 14px;
            color: #333333;
            p {
              height: 28px;
              line-height: 28px;
              overflow: hidden;
            }
          }
          .words-block {
            height: 56px;
            background-color: #ffffff;
            overflow: hidden;
            background-color: #fffffd;
            background-image: url("https://aisyweixinpic.oss-cn-shanghai.aliyuncs.com/20171223/paper.png");
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27),
              0 0 40px rgba(0, 0, 0, 0.06) inset;
            .words {
              position: relative;
              top: 53%;
              transform: translateY(-50%);
              font-size: 14px;
              color: #333333;
              padding: 8px;
              text-align: justify;
              display: -webkit-box;
              word-break: break-all;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2; //需要显示的行数
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          .num {
            font-size: 14px;
            text-align: center;
            color: #ffffff;
            p {
              height: 28px;
              line-height: 28px;
            }
            .a {
              background-color: #a7a7a7;
            }
            .b {
              background-color: #f37a89;
            }
          }
        }
      }
      .rank-table {
        font-size: 14px;
        .name {
          width: 220px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: block;
        }
      }
      .vote-rule {
        background-color: #ffffff;
        font-size: 14px;
        color: #333333;
        margin: 0 20px;
        padding: 20px;
        box-shadow: 0 3px 20px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        p {
          line-height: 2;
        }
      }
    }
  }
  .subscribe-dialog {
    .tip {
      color: #ffcccc;
      font-size: 18px;
      margin-bottom: 10px;
      font-weight: bold;
    }
    .subscribe-qrcode {
      width: 70%;
      margin: 0 auto;
      box-shadow: 0 3px 20px rgba(255, 255, 255, 0.1);
    }
    .close {
      color: #fff;
      text-align: center;
      margin-top: 20px;
    }
  }
}
</style>