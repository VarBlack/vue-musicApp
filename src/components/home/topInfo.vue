<template>
  <div>
    <div class="topinfo">

    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
    }
  },
  mounted(){
    let id = this.$route.params.id
    let url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=" + id + "&_=1492910996732";
    this.$http.jsonp(url,{ jsonp: 'jsonpCallback' }).then(d=>{
      console.log(d.body)
    })
  },
  ready(){
    console.log(1)
  }
}
</script>
<style>
.topinfo{
  width: 100%;
  height: 54rem;
  position: relative;
}
</style>
