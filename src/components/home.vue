<template>
  <div class="home">
      <head-vue></head-vue>
      <div class="comment">
         <router-view></router-view>
      </div>
      <PlayBar></PlayBar>
  </div>
  
</template>
<script>
import Head from '@/components/home/head'
import PlayBar from '@/components/home/playBar'
export default {
  components:{
      'head-vue':Head,
      PlayBar
  }
}
</script>
<style>
.home{
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 12rem 0 14rem;
}
.comment{
  height: 100%;
  overflow-y: auto;
  background-color: #ebeff4;
}
</style>
