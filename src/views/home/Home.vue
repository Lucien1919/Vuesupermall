<template>
  <!-- <h2>首页</h2> -->
  <div>
    <navBar class="homeBar">
      <div slot="mid">购物车</div>
    </navBar>
    <swiper :banners="banners"></swiper>
  </div>
</template>

<script>   
import { getHomeMultidata } from "network/home.js";
import NavBar from "components/common/navBar/NavBar.vue";
import Swiper from "components/common/swiper/Swiper.vue"

export default {
  components: { NavBar,Swiper},
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
