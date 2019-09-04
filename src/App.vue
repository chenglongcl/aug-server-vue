<template>
  <div id="app">
    <transition mode="out-in" :name="transitionName">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
    </transition>
    <transition mode="out-in" :name="transitionName">
      <router-view v-if="!$route.meta.keepAlive" />
    </transition>
    <!--弹出注册OR登录-->
    <dialog-login></dialog-login>
  </div>
</template>

<script>
import { Loading, XDialog } from "vux";
import { mapState } from "vuex";
import DialogLogin from "@/components/common/dialogLogin";
export default {
  name: "app",
  data() {
    return {
      transitionName: ""
    };
  },
  components: {
    Loading,
    DialogLogin
  },
  computed: {
    ...mapState({
      isLoading: state => state.loading.isLoading
    })
  },
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    }
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";
@import "~vux/src/styles/1px.less";
@import "~vux/src/styles/close.less";
@import url("assets/less/index.less");
//@import url("assets/css/animate.css");
body {
  background-color: #fbf9fe;
}
</style>