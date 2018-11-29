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
    path: '/userManage/addUser',
    name: 'addUser',
    title: '新增用户',
    component: () => import('@/views/peopleManage/userManage/addUser/index.vue')
  },
  {
    path: '/roleManage',
    name: 'roleManage',
    component: () => import('@/views/peopleManage/powerManage/roleManage/index.vue')
  },
  {
    path: '/roleManage/addRole',
    name: 'addRole',
    title: '新增角色',
    component: () => import('@/views/peopleManage/powerManage/roleManage/addRole/index.vue')
  },
  {
    path: '/classManage',
    name: 'classManage',
    component: () => import('@/views/peopleManage/powerManage/classManage/index.vue'),
    children: [
      {
        path: '/classManage/countryClass',
        name: 'countryClass',
        component: () => import('@/views/peopleManage/powerManage/classManage/countryClass/index.vue')
      },
      {
        path: '/classManage/provinceClass',
        name: 'provinceClass',
        component: () => import('@/views/peopleManage/powerManage/classManage/provinceClass/index.vue')
      },
      {
        path: '/classManage/cityClass',
        name: 'cityClass',
        component: () => import('@/views/peopleManage/powerManage/classManage/cityClass/index.vue')
      },
      {
        path: '/classManage/areaClass',
        name: 'areaClass',
        component: () => import('@/views/peopleManage/powerManage/classManage/areaClass/index.vue')
      }
    ]
  }
]
