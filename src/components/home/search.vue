<template>
  <div id="search-wrap">
      <form id="search">
        <input class="search_input" type="text"  placeholder="搜索歌曲、歌单、专辑" v-model="text">
        <input class="search-btn" type='button'  @click='hotSearch(text)'>
      </form>
      <ul class="hot" v-if="date" v-show="!searchList.length">
          <li class="hot">
            <a :href="date.special_url">{{date.special_key}}</a>
          </li>
          <li v-for="val,i in date.hotkey" v-if="i < 9"  @click='hotSearch(val.k)'>{{val.k}}</li>
      </ul>
      <!--搜索列表-->
      <ul class="search-list"  v-show="searchList.length">
        <li v-for="val,i in searchList">
            <div><img :src="val.img" alt=""></div>
            <div class="search-list-info">
              <h3>{{val.name}}</h3>
              <p>{{val.singer}}</p>
            </div>
        </li>
      </ul>
      <div class="prev" v-show="searchList.length" @click='prev'>上一级</div>
  </div>
</template>
<script>
export default {
  data(){
      return {
        date:null,
        text:'',
        searchList:[]
      }
  },
  mounted(){
    let url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?format=jsonp'
    this.$http.jsonp(url,{jsonp:"jsonpCallback"}).then(res => {
      this.date = res.body.data
    })
  },
  methods:{
    hotSearch(key){
      this.searchList = [];
      let url = `https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?format=jsonp&n=20&w=${key}`
      // console.log(url)
       this.$http.jsonp("https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?format=jsonp&n=20&w="+key+"",{jsonp:"jsonpCallback"}).then(res => {
         console.log(res.body.data.song.list)
          res.body.data.song.list.forEach(val => {
              this.searchList.push({name:val.songname,
                  img:"https://y.gtimg.cn/music/photo_new/T002R150x150M000"+val.albummid+".jpg?max_age=2592000",
                  songid:val.songid,
                  singer:val.singer[0].name})
          });
      })
      this.text = key
    },
    prev(){
      this.searchList = [];
      this.text = '';
    }
  }
}
</script>
<style>
#search-wrap{
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: #fff;
}
#search{
  width: 100%;
  height: 8rem;
  box-sizing: border-box;
  padding: 1.5rem; 
  background-color: #ebeff4;
  position: relative
}
.search_input{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border:  none;
  font: 2.5rem/1 arial;
  border-radius: 0.5rem;
  padding: 0 5rem 0 3rem;
}
.search-btn{
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  width: 3rem;
  height: 3rem;
  background: url(../../assets/img/search.png) no-repeat;
  background-size:100%; 
  border:none;
}
ul.hot{
  overflow: hidden;
  padding: 1.5rem;
}
ul.hot li{
  height: 3rem;
  font: 2rem/3rem arial;
  float: left;
  border: 1px solid #000; 
  border-radius: 1.5rem;
  padding: 0 1rem;
  margin: 1rem;
}
ul.hot li.hot{
  border-color: red;
  
}
ul.hot li.hot a{
  color: red; 
}
.search-list{
  width: 80%;
  margin: 0 auto;
}
.search-list li{
  border-bottom: 1px solid #000;
  overflow: hidden;
  padding: 0.5rem 0;
  
}
.search-list div{
  float: left;
}
.search-list img{
  width: 8rem;
  height: 8rem;
}
.search-list h3{
  height: 5rem;
  line-height: 5rem;
  font-size: 2.5rem;
}
.search-list p{
  height: 3rem;
  line-height: 3rem;
  font-size: 2rem;
}
.search-list-info{
  margin-left: 1.5rem
}
.prev{
  position: fixed;
  left: 1rem;
  top: 23rem;
  width: 3rem;
  height: 3rem;
  background-color: red;
}
</style>
