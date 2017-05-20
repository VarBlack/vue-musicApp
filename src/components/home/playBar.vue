<template>
  <div class="play-bar">
    <button>上一首</button>
    <button>播放</button>
    <button>下一首</button>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
.play-bar{
    position: absolute;
    left:0;
    bottom: 0;
    width: 100%;
    height: 14rem;
    background-color: #00bbff;
}
.play-bar button{
    width: 30%;
    height: 30%;
}
</style>

