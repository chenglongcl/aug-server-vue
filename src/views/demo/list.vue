<template>
  <div>
    <x-header>This is the page title.</x-header>
    <MeScroll @up="meUp" @down="meDown" :down="downconfig" :up="upconfig" meid="mescroll_1" @init="meInit" style="top:46px">
      <div id="dataList" style="overflow:auto">
        <flex-horz-list :list="list" @on-click-item="toDetail"></flex-horz-list>
      </div>
    </MeScroll>
  </div>
</template>

<script>
import MeScroll from "@/components/common/mescroll";
import FlexHorzList from "@/components/common/flexhorzlist";
import { mapGetters } from "vuex";
export default {
  components: {
    MeScroll,
    FlexHorzList
  },
  data() {
    return {
      list: [],
      mescroll: {},
      downconfig: {
        use: true,
        auto: false
      },
      upconfig: {
        use: true,
        empty: {
          //配置列表无任何数据的提示
          warpId: "dataList",
          icon: "../../static/mescroll/mescroll-empty.png"
        },
        onScroll: (mescroll, y, isUp) => {
          this.$store.dispatch("app/setListTop", { scrollTop: y });
        }
      }
    };
  },
  created() {},
  mounted() {},
  computed: {
    ...mapGetters(["listTop"])
  },
  methods: {
    meUp(page) {
      this.$http
        .getTestList({
          page: page.num
        })
        .then(({ data }) => {
          if (page.num == 1) {
            this.list = [];
          }
          //this.list = this.list.concat(data.data);
          this.list = [...this.list, ...data.data];
          this.mescroll.endByPage(
            this.list.length,
            data.meta.pagination.total_pages
          );
        });
    },
    meInit(mescroll) {
      this.mescroll = mescroll;
    },
    meDown() {
      this.mescroll.resetUpScroll();
    },
    toDetail(item) {
      const id = item.id;
      this.$router.push({ name: "DemoDetail", params: { id } });
    }
  },
  activated() {
    if (!this.$route.meta.isUseCache) {
      this.list = []; // 清空原有数据
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
</style>