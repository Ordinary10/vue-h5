import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
/*
meta.title为topBar的默认标题，
meta.goBackPath为默认跳转路由，
如果想覆盖这个默认设置，可在为topBar设置config对象的title和goBackPath。
*/
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      meta: {
        title: '登录',
        goBackPath: ''
      },
      component: () => import('@/pages/common/login/index'),
      children: [
        {
          path: 'smsLogin',
          name: 'SmsLogin',
          meta: {
            title: '',
            goBackPath: '/login'
          },
          component: () => import('@/pages/common/login/smsLogin/index')
        },
        {
          path: 'codeLogin',
          name: 'CodeLogin',
          meta: {
            title: '',
            goBackPath: '/login/smsLogin'
          },
          component: () => import('@/pages/common/login/codeLogin/index')
        }
      ]
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
      component: () => import('@/pages/wode/index'),
      children: [
        {
          path: 'businessOpportunities',
          name: 'BusinessOpportunities',
          meta: {
            title: '我的商机',
            goBackPath: '/wode'
          },
          component: () => import('@/pages/wode/business-opportunities/index')
        },
        {
          path: 'change-password',
          name: 'ChangePassword',
          meta: {
            title: '交易密码',
            goBackPath: '/wode'
          },
          component: () => import('@/pages/wode/change-password/index')
        },
        {
          path: 'collection',
          name: 'Collection',
          meta: {
            title: '我的收藏',
            goBackPath: '/wode'
          },
          component: () => import('@/pages/wode/collection/index')
        },
        {
          path: 'contacts',
          name: 'Contacts',
          meta: {
            title: '我的人脉',
            goBackPath: '/wode'
          },
          component: () => import('@/pages/wode/contacts/index')
        },
        {
          path: 'real-name',
          name: 'RealName',
          meta: {
            title: '实名认证',
            goBackPath: '/wode'
          },
          component: () => import('@/pages/wode/real-name/index')
        },
        {
          path: 'residual',
          name: 'Residual',
          meta: {
            title: '提现',
            goBackPath: '/wode'
          },
          component: () => import('@/pages/wode/residual/index')
        },
        {
          path: 'set-up',
          name: 'setUp',
          meta: {
            title: '设置',
            goBackPath: '/wode'
          },
          component: () => import('@/pages/wode/set-up/index')
        },
        {
          path: 'topic',
          name: 'Topic',
          meta: {
            title: '我的话题',
            goBackPath: '/wode'
          },
          component: () => import('@/pages/wode/topic/index')
        }
      ]
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
