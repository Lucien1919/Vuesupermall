import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {request} from "./network/request"
//import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res)
}).catch(err => {
  // console.log(err);
})