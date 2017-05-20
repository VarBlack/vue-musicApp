<template>
  <div id="app">
      <router-view></router-view>
      <PlayBar></PlayBar>
  </div>
</template>

<script>
import PlayBar from '@/components/home/playBar'
export default {
  name: 'app',
  components:{
      PlayBar
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
