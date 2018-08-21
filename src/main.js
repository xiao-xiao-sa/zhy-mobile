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
const host = process.env.NODE_ENV === "development" ? "" : "http://www.hzbiaodian.com";
const instance = axios.create({
  baseURL: host
})
Vue.prototype.axios = instance;

//定义全局价格过滤器，保留两位小数
Vue.filter('priceType', function (value) {
    value=value-0;
  	value = value.toFixed(2);
  	return value;
})

router.beforeEach((to, from, next) => {
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


//get请求，类似如下操作
// this.axios.get(url,{params:{a:1,b:2}})
//  .then(res=> {
//     console.log(res);
//  })
//  .catch(err=> {
//     console.log(err);
//  });
//post请求，类似如下操作
// this.axios({
//    url:'/api/xxxxx/xxxx.xxx',
//    method:'post',
//    data:Qs.stringify({       //需要引入qs插件，方便后台读取参数
//          a:1,
//          b:2
//    }),
//    headers: {
//      'Content-Type': 'application/x-www-form-urlencoded' //请求头需要设置，axios默认 'application/json'
//    }
// }).then(res=>{
//  console.log(res);
// }).catch(err=>{
//  console.log(err);
// })
