// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'lib-flexible'
Vue.config.productionTip = false
import http from './http'
import './utils/flexible'
Vue.prototype.$http = http;
Vue.prototype.$api = http;
Vue.use(VueAxios, axios);
// import '@/assets/index.scss'
// import 'iview/dist/styles/iview.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
