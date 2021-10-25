<template>
  <div class="tab-bar-item" @click="isClick()">
    <div v-if="!isActive">
      <slot name="bar-icon"></slot>
    </div>
    <div v-if="isActive">
      <slot name="bar-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="bar-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",

  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },

  computed: {
    isActive() {
      //indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
      // 如果没有找到匹配的字符串则返回 -1。
      return this.$route.path.indexOf(this.path) !== -1;
    },

    activeStyle() {
      if (this.path == this.$route.path) {
        return { color: this.activeColor };
      } else {
        return {};
      }
    },
  },

  data() {
    return {
      //isActive:false
    };
  },
  methods: {
    isClick() {
      this.$router.replace(this.path);
      //this.$route.path = this.path // 不可以
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>