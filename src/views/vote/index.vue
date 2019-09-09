<template>
  <div class="vote-index-page">
    <div class="header">
      <img src="https://aisyweixinpic.oss-cn-shanghai.aliyuncs.com/20171223/augadmin/fake.png" alt="">
    </div>
    <div class="nav-wrapper">
      <flexbox :gutter="0">
        <flexbox-item :span="10">
          <div class="left-block">
            <tab :bar-active-color="'#F37A89'" :active-color="'#F37A89'">
              <tab-item @on-item-click="onNavItemClick(0)">活动介绍</tab-item>
              <tab-item @on-item-click="onNavItemClick(1)">奖励机制</tab-item>
              <tab-item selected @on-item-click="onNavItemClick(2)">人气评选</tab-item>
              <tab-item @on-item-click="onNavItemClick(3)">抽奖</tab-item>
            </tab>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="right-block">
            <span>关注</span>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="main">
      <div class="content" v-if="this.currNavIndex === 0">
        <p>1、打开“xxxxx”微信公众号或“xxxxx”新闻客户端 点击“xxxxx”进入活动页面,按提示进行投票。</p>
        <p>2、每个微信用户每天可投3票，每个客户端用户每天可投5票，投票对象不限。</p>
        <p>3、网络投票前十名入围决赛。决赛阶段网民网络投票得分占比20%,专家评委评分占比80%。</p>
        <p>4、严禁刷票行为，一经发现立即取消该作品参选资格。</p>
        <p>5、网络投票结果将于投票结束后3天内通过xxxx公众号和xxxx客户端公布。</p>
        <p>6、本活动最终解释权归xxxx产业发展中心所有。</p>
      </div>
      <div class="reward-rules" v-if="this.currNavIndex === 1">
        <p>1. 活动时间从北京时间8月11日05:00开始，到北京时间8月15日24:00截止。在此期间，用户可使用XXX账户邀请码邀请好友注册。</p>
        <p>2. 发出邀请用户从活动开始时间至北京时间2018年8月18日24:00期间，账户余额的资产总价值需时刻保持0.5 ETH以上。</p>
        <p>3. 受邀用户在活动期间于XXXX平台成功开户，并在活动截止之前，账户充值额度需大于0.5ETH。</p>
        <p>4. 受邀用户在活动截止时间至北京时间2018年8月18号24: 00期间，账户余额的资产总价值需时刻保持大于0.5ETH。</p>
        <p><br /></p>
      </div>
      <div class="vote-wrapper" v-show="this.currNavIndex === 2">
        <div class="search-panel">
          <flexbox :gutter="0">
            <flexbox-item :span="10">
              <input type="text" placeholder="请输入姓名或编号">
            </flexbox-item>
            <flexbox-item>
              <div class="search-block">
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
                <p class="b">155</p>
              </div>
            </flexbox-item>
            <flexbox-item :span="6">
              <div class="right-block">
                <p>累计人气</p>
                <p class="b">1555555</p>
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
                  <div class="num">
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
                <th>姓名</th>
                <th>点赞数</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>小明</td>
                <td>150000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>小红</td>
                <td>500</td>
              </tr>
              <tr>
                <td>1</td>
                <td>小明</td>
                <td>150000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>小红</td>
                <td>500</td>
              </tr>
              <tr>
                <td>1</td>
                <td>小明</td>
                <td>150000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>小红</td>
                <td>500</td>
              </tr>
              <tr>
                <td>1</td>
                <td>小明</td>
                <td>150000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>小红</td>
                <td>500</td>
              </tr>
              <tr>
                <td>1</td>
                <td>小明</td>
                <td>150000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>小红</td>
                <td>500</td>
              </tr>
              <tr>
                <td>1</td>
                <td>小明</td>
                <td>150000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>小红</td>
                <td>500</td>
              </tr>
              <tr>
                <td>1</td>
                <td>小明</td>
                <td>150000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>小红</td>
                <td>500</td>
              </tr>
              <tr>
                <td>1</td>
                <td>小明</td>
                <td>150000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>小红</td>
                <td>500</td>
              </tr>
            </tbody>
          </x-table>
        </div>
        <div class="vote-rule" v-if="this.currBtnTabsIndex === 2">
          <p><span style="color: rgb(255, 192, 0);">投票时间：</span></p>
          <p>2018年9月20日至2018年10月20日凌晨0点。</p>
          <p><span style="color: rgb(255, 192, 0);">投票方法：</span></p>
          <p>网友选中候选人，直接投票。</p>
          <p><span style="color: rgb(255, 192, 0);">投票次数限制</span>：</p>
          <p>每天每个IP同一个候选人只能投1票。</p>
          <p>禁止刷票，后台发现刷票，立即取消被推荐人的评选资格。</p>
          <p><br /></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MescrollVue from "mescroll.js/mescroll.vue";
import { Flexbox, FlexboxItem, Tab, TabItem, XButton, XTable } from "vux";
export default {
  components: {
    Flexbox,
    FlexboxItem,
    Tab,
    TabItem,
    XButton,
    XTable,
    MescrollVue
  },
  data() {
    return {
      currNavIndex: 2,
      currBtnTabsIndex: 0,
      mescroll: null, // mescroll实例对象
      mescrollUp: {
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
          btnClick() {}
        },
        lazyLoad: {
          use: false, // 是否开启懒加载,默认false
          attr: "imgurl", // 网络地址的属性名 (图片加载成功会移除该属性): <img imgurl='网络图  src='占位图''/>
          showClass: "mescroll-lazy-in", // 图片加载成功的显示动画: 渐变显示,参见mescroll.css
          delay: 500, // 列表滚动的过程中每500ms检查一次图片是否在可视区域,如果在可视区域则加载图片
          offset: 200 // 超出可视区域200px的图片仍可触发懒加载,目的是提前加载部分图片
        },
        onScroll: (mescroll, y, isUp) => {
          this.$store.dispatch("app/setListTop", { scrollTop: y });
        }
      },
      dataList: [] // 列表数据
    };
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    onNavItemClick(index) {
      this.currNavIndex = index;
    },
    onBtnTabsItemClick(index) {
      this.currBtnTabsIndex = index;
    },
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit(mescroll) {
      this.mescroll = mescroll;
    },
    // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    upCallback(page, mescroll) {
      this.$http
        .getTbVoteWotksList({
          voteID: 79,
          page: page.num
        })
        .then(({ data }) => {
          if (page.num == 1) {
            this.dataList = [];
          }
          this.dataList = [...this.dataList, ...data.data.list];
          this.mescroll.endByPage(this.dataList.length, data.data.totalPage);
        });
    }
  }
};
</script>

<style lang="less">
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
          line-height: 40px;
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
        padding: 10px 0;
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
}
</style>