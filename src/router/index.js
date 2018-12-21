import Vue from 'vue'
import Router from 'vue-router'
import nprogress from 'nprogress'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/404/index.vue')
    }
  ]
})

let routerList = []
router.beforeEach((to, from, next) => {
  nprogress.start()
  // if ((from.path.indexOf(to.path) > -1) || from.path === to.path) {
  //   console.log('后退', from.path, to.path)
  //   // 后退
  //   to.meta.isKeepAlive = true
  // } else {
  //   if (routerList.indexOf(to.name) === -1) {
  //     routerList.push(to.name)
  //     to.meta.isKeepAlive = true
  //   } else {
  //     // 前进
  //     to.meta.isKeepAlive = false
  //   }
  //   console.log('前进', from.path, to.path, routerList)
  // }
  next()
})

router.afterEach((to, from, next) => {
  nprogress.done()
})

export default router
