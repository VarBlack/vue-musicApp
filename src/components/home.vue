<template>
  <div class="home">
      <div class="comment">
         <head-vue v-show="isHead"></head-vue>
         <router-view></router-view>
      </div>
      <!--<PlayBar></PlayBar>-->
  </div>
  
</template>
<script>
import Head from '@/components/home/head'
import PlayBar from '@/components/home/playBar'
import {mapGetters, mapActions} from 'vuex'
export default {
  data(){
      return {
      }
  },
  components:{
      'head-vue':Head,
      PlayBar
  },
  computed: {...mapGetters(['msg','isHead'])}
}
</script>
<style>
.home{
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  padding-bottom:14rem;
}
.comment{
  height: 82rem;
  overflow-y: auto;
  background-color: #ebeff4;
}
</style>
