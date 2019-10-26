import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      meta: {
        title: '登录',
        goBackPath: ''
      },
      component: () => import('@/pages/common/login/index')
    },
    {
      path: '/dynamic',
      name: 'Dynamic',
      meta: {
        title: '登录',
        goBackPath: ''
      },
      title: '动态',
      goBackPath: '',
      component: () => import('@/pages/dynamic/index')
    },
    {
      path: '/message',
      name: 'Message',
      meta: {
        title: '消息',
        goBackPath: '/dynamic'
      },
      component: () => import('@/pages/message/index'),
      children: [
        {
          path: 'chat',
          name: 'Chat',
          meta: {
            title: '聊天消息',
            goBackPath: '/message'
          },
          component: () => import('@/pages/message/chat')
        },
        {
          path: 'chat/detail/:id',
          name: 'ChatDetail',
          meta: {
            title: '',
            goBackPath: '/message/chat'
          },
          component: () => import('@/pages/message/chatDetail')
        },
        {
          path: 'circle',
          name: 'Circle',
          meta: {
            title: '圈子消息',
            goBackPath: '/message'
          },
          component: () => import('@/pages/message/circle')
        },
        {
          path: 'circle/detail/:id',
          name: 'CircleDetail',
          meta: {
            title: '圈子消息',
            goBackPath: '/message/circle'
          },
          component: () => import('@/pages/message/circleDetail')
        },
        {
          path: 'system',
          name: 'System',
          meta: {
            title: '系统消息',
            goBackPath: '/message'
          },
          component: () => import('@/pages/message/system')
        }
      ]
    },
    {
      path: '/wode',
      name: 'Wode',
      meta: {
        title: '',
        goBackPath: ''
      },
      component: () => import('@/pages/wode/index')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/pages/common/errorPage/404')
    },
    {
      path: '/',
      redirect: {name: 'Dynamic'}
    },
    {
      path: '*',
      redirect: {name: '404'}
    }
  ]
})
