//存放vuex的核心处理函数
export default {
   ishead({commit},show){
        commit({type:'ishead',show:show})
   }
}
