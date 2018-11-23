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
      component: () => import('@/views/login/index')
    }, {
      path: '/',
      component: () => import('@/views/Root'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/home/')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@/views/about/')
        }, {
          path: '*',
          redirect: '/'
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  nprogress.start()
  next()
})

router.afterEach((to, from, next) => {
  nprogress.done()
})

export default router
