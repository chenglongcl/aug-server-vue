<template>
  <div>
    <x-header>This is the page detail.</x-header>
    {{id}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: ""
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
  beforeRouteLeave(to, from, next) {
    const KEEP_LIST = ["DemoList", "DemoListTwo"];
    if (KEEP_LIST.includes(to.name)) {
      to.meta.isUseCache = true;
    }
    next();
  }
};
</script>

<style lang="less">
</style>
