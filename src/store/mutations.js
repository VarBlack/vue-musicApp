//改变store中各种状态的地方
export default{
    ishead(state,payload){
        // state.isHead = !state.isHead
        state.isHead=payload.show
        console.log(payload.show,state.isHead)
    }
}