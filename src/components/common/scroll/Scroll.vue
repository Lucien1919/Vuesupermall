<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
// import Pullup from '@better-scroll/pull-up';
// BScroll.use(Pullup);

export default {
  name: "Scroll",

  data() {
    return {
      bscroll: null,
    };
  },

  mounted() {
    this.bscroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      click: true,
      // pullUpLoad: true,
    });

    this.bscroll.on("scroll", (position) => {
      // console.log(position);
    });
  },
};
</script>

<style scoped>
</style>