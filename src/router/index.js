import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Commend from '@/components/home/commend'
import Toplist from '@/components/home/toplist'
import Search from '@/components/home/search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Home,
      children:[
        {
          path:'/commend',
          component:Commend
        },
        {
          path:'/',
          component:Commend
        },
        {
          path:'/toplist',
          component:Toplist
        },
        {
          path:'/search',
          component:Search
        }
      ]
    }
  ]
})
