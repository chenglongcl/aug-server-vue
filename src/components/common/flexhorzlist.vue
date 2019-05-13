<template>
    <div>
        <flexbox align="initial" v-for="(item,index) in list" class="list-row" :key="item.id" @click.native="onItemClick(item)">
            <flexbox-item :span="4">
                <div>
                    <img :src="item.pic_url" alt="" />
                </div>
            </flexbox-item>
            <flexbox-item class="list-row-right">
                <div class="title">{{item.title}}</div>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
import { Flexbox, FlexboxItem } from "vux";
export default {
  name: "flex-horz-list",
  props: {
    list: Array
  },
  components: {
    Flexbox,
    FlexboxItem
  },
  methods: {
    onItemClick(item) {
      this.$emit("on-click-item", item);
    }
  }
};
</script>

<style lang="less">
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
