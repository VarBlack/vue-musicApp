<template>
  <div class="commend">
      <Carousel :slider='slider'></Carousel>
      <div class="homeTitle">
          <p>热门歌单</p>
      </div>
      <CommendList :songList='songList'></CommendList>
      <div class="commend-bottom">底下没有啦，快去排行榜看看吧</div>
  </div>
</template>
<script>
import Carousel from '@/components/home/commend/carousel'
import CommendList from '@/components/home/commend/commendList'
export default {
  data(){
   
      return {
         slider:[],
         songList:[]
      }
  },
  components:{
     Carousel,
     CommendList
  },
  mounted(){
    let url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1492177982521'
     this.$http.jsonp(url,{jsonp:'jsonpCallback'}).then(d =>{
                this.slider = d.body.data.slider;
                this.songList = d.body.data.songList;
                console.log(d.body.data)
            })
    }
  
}
</script>
<style>
.homeTitle{
    margin: 0.8rem 0;
    height: 3.5rem;
}
.homeTitle p{
    padding: 0 1.5rem;
    font-size: 2.2rem;
    line-height: 3.5rem;
    background-color: #3de1ad;
    color: #fff;
    float: left;
    border-radius: 0 2vh 2vh 0;
}

.commend-bottom {
    text-align: center;
    margin-top: 2rem;
    font-size: 2.5rem;
}
</style>
