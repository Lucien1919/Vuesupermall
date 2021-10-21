<template>
  <div id="swiper">
    <Carousel v-model="value1" loop>
      <!-- <div v-for="item in banners" @mousedown='mouseDown($event)' @mousemove='mouseMove' @mouseup='mouseUp'> -->
        <div v-for="item in banners">
        <CarouselItem class="cItem">
          <div class="demo-carousel">
            <img :src=item.image alt="">
          </div>
        </CarouselItem>
      </div>

    </Carousel>
  </div>

</template>

<script>
export default {
  name: "Swiper",
  props: {
    banners: [],
  },
  data() {
    return {
      value1: 0,
      imgChage: {
        mouseD: false,
        mouseM: false,
        mouseU: false,
      },
    };
  },

// Vue事件绑定对函数调用做了封装，加与不加括号的区别在于事件对象参数 event 的处理。

// （1）不加括号时，函数第一个参数为 event；

// （2）加了括号后，需要手动传入 $event 才能获得事件对象。
  // methods: {
  //   mouseDown(event) {
  //     this.imgChage.mouseD = true;
  //     console.log(event);
  //   },
  //   mouseMove(event) {
  //     if (this.imgChage.mouseD == true) {
  //       console.log(event);
  //     }
      
  //   },
  //   mouseUp(event) {
  //     this.imgChage.mouseD = true;
  //     console.log(event);
  //   },
  // },
};
</script>

<style scoped>
#swiper {
  width: 100%;
}

.demo-carousel img {
  width: 100%;
}
</style>