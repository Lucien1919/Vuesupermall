<template>
  <!-- <h2>首页</h2> -->
  <nav-bar class="homeBar"><div slot="mid">购物车</div></nav-bar>

</template>

<script>
  import {getHomeMultidata} from "network/home.js"
  import NavBar from "components/common/navBar/NavBar.vue"
  export default {
    components: { NavBar },
    name: "Home",
    created(){
      getHomeMultidata().then(res =>{
        console.log(res)
      })
    }
  }


</script>

<style scoped>
.homeBar{
  background-color: #bfa;
}
  
</style>
