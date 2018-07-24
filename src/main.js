// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import 'lib-flexible/flexible'
import './assets/iconfont/iconfont1/iconfont.css'
import './assets/iconfont/iconfont2/iconfont.css'
import './assets/style/common.css'


Vue.config.productionTip = false

Vue.prototype.axios = axios

//定义全局价格过滤器，保留两位小数
Vue.filter('priceType', function (value) {
  if(!isNaN(value)){
  	value = value.toFixed(2);
  	return value;
  }
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
