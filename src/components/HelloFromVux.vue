<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> </h1>
      <x-icon type="ios-arrow-up" class="icon-red"></x-icon>
    </div>
    <group title="cell demo">
      <cell title="LIST" value="cool" is-link @click.native="$router.push({name:'DemoList'})"></cell>
      <cell title="LISTwo" value="cool" is-link @click.native="$router.push({name:'DemoListTwo'})"></cell>
      <cell title="TEST" value="cool" is-link @click.native="$router.push({name:'DemoTest'})"></cell>
      <cell title="TESTTwo" value="cool" is-link @click.native="$router.push({name:'DemoTestTwo'})"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from "vux";

export default {
  components: {
    Group,
    Cell
  },
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: "Hello World!"
    };
  }
};
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px;
}
</style>
