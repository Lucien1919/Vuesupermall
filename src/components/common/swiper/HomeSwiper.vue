<template>
  <div id="home-swiper">
    <swiper :options="swiperOptions">
    <swiper-slide>
      <img src="assets/img/testSwiper/001.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="assets/img/testSwiper/002.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="assets/img/testSwiper/003.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="assets/img/testSwiper/004.jpg" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name:'HomeSwiper',
  data() {
    return {
      swiperOptions:{}
    }
  },
}
</script>

<style>

</style>