<template>
  <div>
    <x-header>This is the page title.</x-header>
    <mescroll-vue ref="mescroll" :up="mescrollUp" @init="mescrollInit">
      <div id="dataList" class="data-list">
        <flexbox align="initial" class="list-row" v-for="(item,index) in dataList" :key="item.id" @click.native="toDetail(item)">
          <flexbox-item :span="4">
            <div>
              <img src="https://fakeimg.pl/300/" alt="" :imgurl="item.pic_url" />
            </div>
          </flexbox-item>
          <flexbox-item class="list-row-right">
            <div class="title">{{item.title}}</div>
          </flexbox-item>
        </flexbox>
      </div>
    </mescroll-vue>
  </div>
</template>

<script>
import MescrollVue from "mescroll.js/mescroll.vue";
import { Flexbox, FlexboxItem } from "vux";
import { mapGetters } from "vuex";
export default {
  components: {
    MescrollVue,
    Flexbox,
    FlexboxItem
  },
  data() {
    return {
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
          btntext: "去逛逛 >", // 按钮,默认""
          btnClick() {
            // 点击按钮的回调,默认null
            alert("点击了按钮,具体逻辑自行实现");
          }
        },
        lazyLoad: {
          use: true, // 是否开启懒加载,默认false
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
  computed: {
    ...mapGetters(["listTop"])
  },
  methods: {
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit(mescroll) {
      this.mescroll = mescroll;
    },
    // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    upCallback(page, mescroll) {
      this.$http
        .getTestList({
          page: page.num
        })
        .then(({ data }) => {
          if (page.num == 1) {
            this.dataList = [];
          }
          //this.list = this.list.concat(data.data);
          this.dataList = [...this.dataList, ...data.data];
          this.mescroll.endByPage(
            this.dataList.length,
            data.meta.pagination.total_pages
          );
        });
    },
    toDetail(item) {
      const id = item.id;
      this.$router.push({ name: "DemoDetail", params: { id } });
    }
  },
  activated() {
    if (!this.$route.meta.isUseCache) {
      this.dataList = []; // 清空原有数据
      this.$store.commit("app/setListTop", 0);
      this.mescroll.resetUpScroll();
    }
    this.$route.meta.isUseCache = false;
    this.mescroll.scrollTo(this.listTop, 0);
  },
  beforeRouteLeave(to, from, next) {
    next();
  }
};
</script>

<style lang="less">
/*以fixed的方式固定mescroll的高度*/
.mescroll {
  position: fixed;
  top: 46px;
  bottom: 0;
  height: auto;
}
.list-row {
  margin: 10px 0;
  background-color: #fff;
  .list-row-right {
    .title {
      font-size: 14px;
    }
  }
}
</style>
