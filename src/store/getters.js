//工具接口为了方便构建全局state自定义方法
// export const msg = state => state.msg;
export default {
    msg(state){
        return state.msg
    },
    isHead(state){
        return state.isHead
    },
    musicList(state){
        return state.musicList
    }
}