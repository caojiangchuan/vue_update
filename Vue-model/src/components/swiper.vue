<template>
  <div>
    <div class="h">
      <swiper :options="swiperCard" class="card-swiper">
        <swiper-slide class="card-slide" v-for="(item, index) in scrollBars" :key="index"><div class="ge">{{item}}+{{index}}</div></swiper-slide>
      </swiper>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "carrousel",
  data() {
    return {
      num:0,
      swiperCard: {
          slidesPerView: 2,
          slidePrevClass : 'my-slide-prev',
          slideNextClass : 'my-slide-next',
          slideActiveClass : 'swiper-slide-active',
        on: {
          slideChangeTransitionStart: function() {
            console.log(this.activeIndex);
            this.num=this.activeIndex
          }
        },
        autoplay: {
          delay: 1000
        }, // 切换速度（过程）
        loop: true,
        speed: 1000, // 切换间隙停留时间
        direction: "vertical",
        spaceBetween: 0
      },
      scrollBars: ['a', 'b', 'c', 'd', 'e'],
    };
  },
  mounted(){
 setTimeout(()=>{
     this.num=2
 })
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    //   this.swiper.slideTo(3, 1000, false)
  }
};
</script> 
<style scoped>
.h {
  height: 200px;
  /* margin-top: 100px; */
  text-align: center;
  overflow: hidden;
  /* background: red; */
  line-height: 200px;
  position: relative;
  /* background: greenyellow; */
  /* border: 1px solid red; */

}
.card-swiper {
  overflow: visible;
  height: 100%;
  line-height:100px;
  text-align: center;
}
.card-slide{
    height: 100px;
}
.swiper-slide-active{
      background: black;
    opacity: 0.3;

}
.my-slide-prev{
    background: black;
    opacity: 0;

}
.my-slide-next{
     background: black;
}
.ge{
    width: 200px;
    height: 20px;
   background: red;
   margin-top: 40px;
}
</style>