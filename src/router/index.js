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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
