<template>
  <!-- <h2>首页</h2> -->
  <div class="home">
    <navBar class="homeBar">
      <div slot="mid">购物车</div>
    </navBar>
    <swiper :banners="banners"></swiper>
    <recom-view :recommends="recommends"></recom-view>
    <feature-view></feature-view>
    <tab-control class="tabControl" :titles="titles" @tabClick="tabClick"></tab-control>
    <goods-list :goods="goods[indexType].list"></goods-list>
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from "network/home.js";
import NavBar from "components/common/navBar/NavBar.vue";
import Swiper from "components/common/swiper/Swiper.vue";
import RecomView from "components/common/recomView/RecomView.vue";
import FeatureView from "./FeatureView.vue";
import TabControl from "components/common/tabControl/TabControl.vue";
import GoodsList from "components/common/goods/GoodsList.vue";

export default {
  components: { NavBar, Swiper, RecomView, FeatureView, TabControl, GoodsList },
  name: "Home",

  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },

      indexType:'pop'
    };
  }, 
  created() {
    //异步操作，只能在里面获取数据
    this.getHomeMultidata();
    this.getHomeGoods(this.indexType);
  },

  methods: {
    tabClick(index) {
      
      switch(index){
        case 0:
          this.indexType = 'pop'; break
        case 1:
          this.indexType = 'new'; break
        case 2:
          this.indexType = 'sell'; break
      }
      this.getHomeGoods(this.indexType);
    },

    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style scoped>
.homeBar {
  /* background-color: #bfa; */
  background-color: var(--color-tint);
}
.home {
  padding-top: 44px;
  padding-bottom: 1000px;
}
.homeBar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
}

.tabControl {
  position: sticky;
  top: 44px;
}
</style>
