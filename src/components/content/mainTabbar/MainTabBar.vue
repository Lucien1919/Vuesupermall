<template>
<div id="main-tab-bar">
  <tab-bar>
   <tab-bar-item path="/home">
     <img slot="bar-icon" src="@/assets/img/tabbar/home.svg" alt="">
     <img slot="bar-icon-active" src="@/assets/img/tabbar/home_active.svg" alt="">
     <div slot="bar-text">主页</div>
   </tab-bar-item>

   <tab-bar-item path="/category">
     <img slot="bar-icon" src="@/assets/img/tabbar/category.svg" alt="">
     <img slot="bar-icon-active" src="@/assets/img/tabbar/category_active.svg" alt="">
     <div slot="bar-text">分类</div>
   </tab-bar-item>

   <tab-bar-item path="/cart">
     <img slot="bar-icon" src="@/assets/img/tabbar/shopcart.svg" alt="">
     <img slot="bar-icon-active" src="@/assets/img/tabbar/shopcart_active.svg" alt="">
     <div slot="bar-text">购物车</div>
   </tab-bar-item>

   <tab-bar-item path="/profile">
     <img slot="bar-icon" src="@/assets/img/tabbar/profile.svg" alt="">
     <img slot="bar-icon-active" src="@/assets/img/tabbar/profile_active.svg" alt="">
     <div slot="bar-text">我的</div>
   </tab-bar-item>
  </tab-bar>
</div>
  
</template>

<script>
import TabBar from "../tabBar/TabBar.vue";
import TabBarItem from '../tabBar/TabBarItem.vue';
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
</style>