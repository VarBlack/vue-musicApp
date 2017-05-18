<template>
    <swiper :options="swiperOption" ref="mySwiper">
        <div v-if="!slider.length">加载中</div>
        <swiper-slide v-for="(val,index) in slider" data-swiper-autoplay="3000" :key='index'>
            <a :href="val.linkUrl"><img :src="val.picUrl" class="carousel"></a>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    props:['slider'],
  data(){
    // console.log(swiperSlide)
      return {
          arr:[],
          swiperOption: {//配置轮播图（参数和swiper的一样）
            notNextTick: true,//是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
            autoplay: 3000, //切换的时间间隔
            autoplayDisableOnInteraction:false, //是否禁止autoplay。默认为true：停止。
            direction : 'horizontal', //滑动方向 水平(horizontal)、垂直(vertical)
            grabCursor : true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。（根据浏览器形状有所不同）
            setWrapperSize :true,//Swiper从3.0开始使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
            autoHeight: true,//自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
            pagination : '.swiper-pagination', //分页器容器的css选择器或HTML标签。分页器等组件可以置于container之外，不同Swiper的组件应该有所区分，如#pagination1，#pagination2。
            paginationClickable :true,//此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
            mousewheelControl : true,//是否开启鼠标控制Swiper切换。设置为true时，能使用鼠标滚轮控制slide滑动。
            observeParents:true //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
        }
      }
  },
  components:{
      swiper,
      'swiper-slide':swiperSlide
  },
  mounted(){
    }
}
</script>
<style>
.swiper-pagination .swiper-pagination-bullet{
    width: 1rem;
    height: 1rem;
}
.carousel{
    width: 100%;
}
#app .swiper-container-autoheight{
    height: 21.8rem;
}
</style>
