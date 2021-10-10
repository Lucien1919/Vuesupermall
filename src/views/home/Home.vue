<template>
  <!-- <h2>首页</h2> -->
  <div class="home">
    <navBar class="homeBar">
      <div slot="mid">购物车</div>
    </navBar>
    <swiper :banners="banners"></swiper>
    <recom-view :recommends="recommends"></recom-view>
    <feature-view></feature-view>
    <tab-control class="tabControl" :titles="titles"></tab-control>
  </div>
</template>

<script>
import { getHomeMultidata } from "network/home.js";
import NavBar from "components/common/navBar/NavBar.vue";
import Swiper from "components/common/swiper/Swiper.vue";
import RecomView from "components/common/recomView/RecomView.vue";
import FeatureView from "./FeatureView.vue";
import TabControl from 'components/common/tabControl/TabControl.vue';

export default {
  components: { NavBar, Swiper, RecomView, FeatureView, TabControl },
  name: "Home",

  data() {
    return {
      banners: [],
      recommends: [],
      titles:["流行","新款","精选"]
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
.home{
  padding-top: 44px;
  padding-bottom: 1000px;
}
.homeBar{
  position:fixed;
  top: 0;
  left: 0;
  z-index: 9;
}

.tabControl{
  position: sticky;
  top: 44px;
}
</style>
