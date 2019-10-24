import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/common/login/index')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/pages/common/home/index')
    },
    {
      path: '/message',
      name: 'Message',
      component: () => import('@/pages/common/message/index')
    },
    {
      path: '/wode',
      name: 'Wode',
      component: () => import('@/pages/common/wode/index')
    },
    {
      path: '/404',
      component: () => import('@/pages/common/errorPage/404')
    },
    {
      path: '*',
      redirect: {name: 'Home'}
    }
  ]
})
