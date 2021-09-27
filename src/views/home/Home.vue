<template>
  <!-- <h2>首页</h2> -->
  <div>
    <nav-bar class="homeBar">
      <div slot="mid">购物车</div>
    </nav-bar>
  </div>
</template>

<script>
import { getHomeMultidata } from "network/home.js";
import NavBar from "components/common/navBar/NavBar.vue";

export default {
  components: { NavBar },
  name: "Home",

  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    //异步操作，只能在里面获取数据
    getHomeMultidata().then((res) => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style scoped>
.homeBar {
  /* background-color: #bfa; */
  background-color: var(--color-tint);
}
</style>
