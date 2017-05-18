<template>
  <div>
    <ul class="toplist">
      <li v-for="val,i in list" :key="val.id">
        <img :src="val.picUrl">
        <div>
          <h3>{{val.topTitle}}</h3>
          <p v-for="(value,index) in val.songList">{{index+1}} <span>{{value.songname}}</span> - {{value.singername}}</p>
        </div>
      </li>
    </ul>
    <div class="commend-bottom">已经到底了！</div>
  </div>
  
</template>
<script>
export default {
  data(){
    return {
      list:[]
    }
  },
  mounted(){
    let url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?format=jsonp&g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1492853417073'
      this.$http.jsonp(url,{jsonp:"jsonpCallback" }).then(res =>{
          console.log(res.body.data.topList)
          this.list = res.body.data.topList;
          
      })
  }
}
</script>
<style>
.toplist{
  padding: 1rem;
}
.toplist li{
  overflow: hidden;
  margin-bottom: 1rem;
  background-color: #fff;
}
.toplist img,.toplist div{
  float: left;
  height: 15rem;
}
.toplist img{
  width: 15rem;
}
.toplist div{
  width: 34rem;
  margin-left: 2rem;
  
}
.toplist h3{
  font-size: 2.5rem;
  line-height: 4rem;
  margin-bottom: 1.5rem;
}
.toplist h3,.toplist p{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: normal;
}
.toplist p{
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: rgba(0,0,0,.5);
}
.toplist p span{
  color: #000;
}
</style>
