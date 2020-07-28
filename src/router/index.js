/*
 * @Author: your name
 * @Date: 2020-07-06 10:07:46
 * @LastEditTime: 2020-07-06 10:12:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bbb\guoye\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'

//集成到vue
Vue.use(Router)
const home = () => import('../page/home')
const index = () => import('../page/index')
const login = () => import('../page/login')
const register = () => import('../page/register')
const company = () => import('../page/company')
const news = () => import('../page/news')
const performance = () => import('../page/performance')
const performancedetail = () => import('../page/performance/detail')
const staff = () => import('../page/staff')
const staffdetail = () => import('../page/staff/detail')
const job = () => import('../page/job')
const jobdetail = () => import('../page/job/detail')
const connection = () => import('../page/connection')
const newsdetail = () => import('../page/news/detail')

const router = new Router({
  routes: [{
      path: '/',
      name: 'index',
      redirect: '/home',
      component: index,
    },
    {
      path: '/home',
      name: 'home',
      component: home,
    },
    {
      path: '/company',
      name: 'company',
      component: company,
    },
    {
      path: '/news',
      name: 'news',
      component: news,
    },
    {
      path: '/performance',
      name: 'performance',
      component: performance,
    },
    {
      path: '/performancedetail',
      name: 'performancedetail',
      component: performancedetail,
    },
    {
      path: '/staff',
      name: 'staff',
      component: staff,
      meta: {
        isLogin: true
      }
    },
    {
      path: '/staffdetail',
      name: 'staffdetail',
      component: staffdetail,
    },
    {
      path: '/job',
      name: 'job',
      component: job,
    },
    {
      path: '/jobdetail',
      name: 'jobdetail',
      component: jobdetail,
    },
    {
      path: '/connection',
      name: 'connection',
      component: connection,
    },
    {
      path: '/newsdetail',
      name: 'newsdetail',
      component: newsdetail,
    },
    {
      path: '//login',
      name: 'login',
      component: login
    },
    {
      path: '//register',
      name: 'register',
      component: register
    },

  ],
})
router.beforeEach((to, from, next) => {
  //判断从index页面进入，将list的isBack设置为true
  //这样就可以请求数据了
  if (to.meta.isLogin) { //判断是否需要登录
    if (store.getters.token) {
      next()
    } else {
      router.replace({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    }
  }
})
export default router
