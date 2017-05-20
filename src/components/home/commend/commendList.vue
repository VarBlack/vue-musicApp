<template>
  <ul class="commend-list">
      <li  v-for="(val,index) in songList" :key='val.id' @click="ishead(!isHead)">
        <div class="list_media">
            <img :src="val.picUrl" :alt="val.songListDesc">
            <span class="listen_count">
                <i></i>
                {{playnum(val.accessnum)}}
            </span>
            <span class="icon_play"></span>
        </div>
        <div class="list-info">
            <p class="songName">{{val.songListDesc}}</p>
            <p class="singer">{{val.songListAuthor}} {{msg}}</p>
        </div>
    </li>
  </ul>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  props:['songList'],
  mounted(){
      console.log(this.songList)
  },
  methods:{
      playnum(n){ //判断播放数大于1W吗
          if(n>10000){

              n = ~~(n/1000)
              n = n/10 + '万'
          }
          return n
      },
      sendMusic(id){
          console.log(id)
      },
      ...mapActions(['ishead'])
  },
  computed: {...mapGetters(['isHead','msg'])},
//   methods: {...mapActions(['ighead'])}
}
</script>

<style>
.commend-list{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.commend-list li{
     margin-bottom: 2rem;
     width: 45%;
     background-color: #fff;
}
.list_media{
    position: relative;
}
.list_media img{
    width: 100%;
}
.list_media .listen_count{
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    color: #fff;
    font-size: 1.8rem;
    padding-left: 2.5rem;
    line-height: 2rem;
}
.list_media .listen_count i{
    position: absolute;
    left: 0;
    top:0.25rem;
    width: 1.5rem;
    height: 1.5rem;
    background: url(../../../assets/img/playnum.png) no-repeat;
    background-size: 100%;
}
.list_media .icon_play{
    position: absolute;
    right: 1rem;
    bottom: 0.5rem;
    width: 4rem;
    height: 4rem;
    background: url(../../../assets/img/play.png) no-repeat;
    background-size: 100%;
}
.list-info{
    padding: 0 7px 5px;
}
.songName{
    color: #666;
    font-size: 1.2rem;
    margin: 5px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: normal;
    font-size: 2.3rem;
}
.singer{
    color: #00e09e;
    font-size: 2rem;
}
.goToSeniority{
    margin-top: 20px;
    display: block;
    text-align: center;
    color: #999;
}
</style>
