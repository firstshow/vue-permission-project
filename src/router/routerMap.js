export default [
  {
    path: '/',
    name: 'root',
    title: '根页面',
    redirect: '/home',
    component: () => import('@/views/Root.vue'),
    children: []
  },
  {
    path: '/home',
    name: 'home',
    title: '首页',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/aboutProject',
    name: 'aboutProject',
    title: '关于项目',
    component: () => import('@/views/about/aboutProject/index.vue')
  },
  {
    path: '/aboutTeam',
    name: 'aboutTeam',
    title: '关于团队',
    component: () => import('@/views/about/aboutTeam/index.vue')
  },
  {
    path: '/userManage',
    name: 'userManage',
    title: '人员管理',
    component: () => import('@/views/peopleManage/userManage/index.vue')
  },
  {
    path: '/powerManage',
    name: 'powerManage',
    title: '权限管理',
    component: () => import('@/views/peopleManage/powerManage/index.vue'),
    children: [
      {
        path: '/powerManage/userManage1',
        name: 'userManage1',
        title: '用户管理1',
        component: () => import('@/views/peopleManage/powerManage/userManage1/index.vue')
      },
      {
        path: '/powerManage/powerManage1',
        name: 'powerManage1',
        title: '权限管理1',
        component: () => import('@/views/peopleManage/powerManage/powerManage1/index.vue')
      }
    ]
  }
]
