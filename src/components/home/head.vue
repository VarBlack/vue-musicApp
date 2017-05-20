<template>
  <header>
     <h1>QQ音乐播放器</h1>
     <ul class="top-navs">
        <router-link to="/commend" tag="li" active-class="router-link">推荐</router-link>
        <router-link to="/toplist" tag="li" active-class="router-link">排行榜</router-link>
        <router-link to="/search" tag="li" active-class="router-link">{{msg}}</router-link>
     </ul>
  </header>
  
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  data(){
      return {
          a:1
      }
  },
  computed: {...mapGetters(['msg','isHead'])}
}
</script>
<style>
    header{
        width: 100%;
        height: 12rem;
        background-color: red;
        /*position: absolute;
        left: 0;
        top: 0;*/
    }
    h1,.top-navs{
        width: 100%;
        height: 50%;
        line-height: 6rem;
    }
    header h1{
        text-align: center;
        font-size: 3rem;
    }
    .top-navs{
        display:flex;

    }
    .top-navs li{
        height: 100%;
        width: 33.333%;
        box-sizing: border-box;
        text-align: center;
        font-size: 2.5rem;
    }
    .top-navs .router-link{
        border-bottom: 0.2rem solid #000;
    }
</style>

