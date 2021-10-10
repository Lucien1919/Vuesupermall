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
      ActiveNum:0
    }
  },
  props: {
    titles: [],
  },

  methods: {
    tabActive(index) {
      this.ActiveNum = index;
    },
  },
};
</script>

<style scope>
.TabControl {
  display: flex;
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