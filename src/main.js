// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import { request } from './utils/request'
import common from './utils/common'
import './assets/scss/index.scss'
import globalComponents from './components'
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
// 原型上注册通用请求方法
Vue.prototype.$axios = request
// 原型上注册全局对象
Vue.prototype.$common = common
Vue.config.productionTip = false
/* eslint-disable no-new */
// 全局组件
Object.keys(globalComponents).forEach(key => {
  Vue.component(key, globalComponents[key])
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
