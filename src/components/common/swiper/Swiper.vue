<template>
  <div id="swiper">
    <Carousel v-model="value1" loop>
      <div v-for="item in imgList">
        <CarouselItem>
          <div class="demo-carousel">
            <img :src=item.imgUrl alt="">
          </div>
        </CarouselItem>
      </div>

    </Carousel>
  </div>

</template>

<script>
export default {
  name: "Swiper",
  data() {
    return {
      value1: 0,
      imgList: [
        {
          id: 0,
          imgUrl: require("@/assets/img/testSwiper/001.jpg"),
        },
        {
          id: 1,
          imgUrl: require("@/assets/img/testSwiper/002.png"),
        },
        {
          id: 2,
          imgUrl: require("@/assets/img/testSwiper/003.jpg"),
        },
        {
          id: 3,
          imgUrl: require("@/assets/img/testSwiper/004.jpg"),
        },
      ],
    };
  },
};
</script>

<style>
#swiper {
  width: 100%;
}

img {
  width: 100%;
}
</style>