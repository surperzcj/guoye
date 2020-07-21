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
import home from '@/page/home'
import index from '@/page/index'
import login from '@/page/login'
import register from '@/page/register'
import company from '@/page/company'
import news from '@/page/news'
import performance from '@/page/performance'
import staff from '@/page/staff'
import job from '@/page/job'
import connection from '@/page/connection'
import newsdetail from '@/page/news/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect:'/home',
      component: index,
      children:[
        {
          path:'home',
          component:home
        },
        {
          path:'company',
          component:company
        },
        {
          path:'news',
          component:news
        },
        {
          path:'performance',
          component:performance
        },
        {
          path:'staff',
          component:staff
        },
        {
          path:'job',
          component:job
        },
        {
          path:'connection',
          component:connection
        },{
          path:'newsdetail',
          component:newsdetail
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },

  ]
})
