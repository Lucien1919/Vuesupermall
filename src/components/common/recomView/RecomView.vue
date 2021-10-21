<template>
  <div class="RecomView">
    <div v-for="item in recommends" class="RecomViewItem">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
      
    </div>

  </div>
</template>

<script>
export default {
  name: "RecomView",
  props: {
    recommends: [],
  },
};
</script>

<style scoped>
.RecomView {
  display: flex;
  justify-content: space-around;
  font-size: 12px;

  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}

.RecomViewItem {
  width: 65px;
}

.RecomViewItem img {
  width: 100%;
}
</style>