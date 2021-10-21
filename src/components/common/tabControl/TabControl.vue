<template>
  <div class="TabControl">
    <div class="TabControlItem" v-for="(item,index) in titles" @click="tabActive(index)">
      <span :class="{active:ActiveNum == index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",

  data() {
    return {
      ActiveNum: 0,
    };
  },
  props: {
    titles: [],
  },

  methods: {
    tabActive(index) {
      this.ActiveNum = index;
      this.$emit("tabClick", index)
    },
  },
};
</script>

<style scoped>
.TabControl {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  z-index: 9;
}

.TabControlItem {
  flex: 1;
  text-align: center;
}

.active {
  border-bottom: var(--color-tint) solid 3px;
  padding: 3px;
}
</style>