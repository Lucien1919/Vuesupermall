<template>
  <div class="GoodsListItem">
    <img :src="goodsItem.showLarge.img" alt="">
    <div>{{goodsItem.title}}</div>
    <span>{{goodsItem.price}}</span>
    <span>{{goodsItem.cfav}}</span>  
  </div>
</template>

<script>
export default {
  name:"GoodsListItem",
  props:{
    goodsItem:{}
  }
}
</script>

<style>
/* .GoodsListItem{
  width: 48%;
} */
</style>