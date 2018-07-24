import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Sort from '@/pages/Sort'
import Search from '@/pages/Search'
import SbDetail from '@/pages/SbDetail'
import About from '@/pages/About'
import Registered from '@/pages/Registered'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      meta:{
        title:'首页',
        keepAlive: true
      }
    },
    {
    	path:'/Sort',
    	component:Sort,
      meta:{
        title:'分类查询',
        keepAlive: true
      }
    },
    {
      path:'/Search',
      component:Search,
      meta:{
        title: '商标搜索',
        keepAlive: true
      }

    },
    {
      path:'/SbDetail',
      component:SbDetail,
      meta:{
        title:'商标详情'
      }
    },
    {
      path:'/About',
      component:About,
      meta:{
        title:'关于知汇眼',
        keepAlive: true
      }
    },
    {
      path:'/Registered',
      component:Registered,
      meta:{
        title:'注册商标',
        keepAlive: true
      }
    }
  ]
})


