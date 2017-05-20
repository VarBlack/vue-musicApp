// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' //导入路由配置文件
Vue.config.productionTip = false
import VueResource from 'vue-resource'  //导入数据交互模块
Vue.use(VueResource);

import '@/assets/css/reset.css'//导入全局reset
import store from './store/index';//全局挂载状态管理
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})
