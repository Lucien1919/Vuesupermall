<template>
  <div class="GoodsList">
    <div v-for='(item,index) in goods'>
      <goods-list-item :goodsItem="item"></goods-list-item>
    </div>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";

export default {
  name: "GoodsList",
  props: {
    goods: [],
  },
  components: {
    GoodsListItem,
  },
};
</script>

<style scoped>
.GoodsList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}

.GoodsList>div{
  width: 48%;
}
</style>