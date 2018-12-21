import userManage from '@/views/peopleManage/userManage/index.vue'
export default [
  {
    path: '/',
    name: 'root',
    title: '根页面',
    redirect: '/home',
    meta: {
      isKeepAlive: false
    },
    component: () => import('@/views/Root.vue'),
    children: []
  },
  {
    path: '/home',
    name: 'home',
    title: '首页',
    meta: {
      isKeepAlive: false
    },
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/aboutProject',
    name: 'aboutProject',
    title: '关于项目',
    meta: {
      isKeepAlive: false
    },
    component: () => import('@/views/about/aboutProject/index.vue')
  },
  {
    path: '/aboutTeam',
    name: 'aboutTeam',
    title: '关于团队',
    meta: {
      isKeepAlive: false
    },
    component: () => import('@/views/about/aboutTeam/index.vue')
  },
  {
    path: '/userManage',
    name: 'userManage',
    title: '人员管理',
    meta: {
      isKeepAlive: true
    },
    component: () => import('@/views/peopleManage/userManage/index.vue'),
  },
  {
    path: '/userManage/addUser',
    name: 'addUser',
    title: '新增用户',
    meta: {
      isKeepAlive: false
    },
    component: () => import('@/views/peopleManage/userManage/addUser/index.vue')
  },
  {
    path: '/roleManage/roleDetail',
    name: 'roleDetail',
    title: '角色详情',
    meta: {
      isKeepAlive: true
    },
    component: () => import('@/views/peopleManage/powerManage/roleManage/roleDetail/index.vue')
  },
  {
    path: '/roleManage/roleDetail/roleEdit',
    name: 'roleEdit',
    title: '角色编辑',
    meta: {
      isKeepAlive: false
    },
    component: () => import('@/views/peopleManage/powerManage/roleManage/roleDetail/roleEdit/index.vue')
  },
  {
    path: '/roleManage',
    name: 'roleManage',
    meta: {
      isKeepAlive: true
    },
    component: () => import('@/views/peopleManage/powerManage/roleManage/index.vue')
  },
  {
    path: '/roleManage/addRole',
    name: 'addRole',
    title: '新增角色',
    meta: {
      isKeepAlive: false
    },
    component: () => import('@/views/peopleManage/powerManage/roleManage/addRole/index.vue')
  },
  {
    path: '/classManage',
    name: 'classManage',
    meta: {
      isKeepAlive: false
    },
    component: () => import('@/views/peopleManage/powerManage/classManage/index.vue'),
    children: [
      {
        path: '/classManage/countryClass',
        name: 'countryClass',
        meta: {
          isKeepAlive: false
        },
        component: () => import('@/views/peopleManage/powerManage/classManage/countryClass/index.vue')
      },
      {
        path: '/classManage/provinceClass',
        name: 'provinceClass',
        meta: {
          isKeepAlive: false
        },
        component: () => import('@/views/peopleManage/powerManage/classManage/provinceClass/index.vue')
      },
      {
        path: '/classManage/cityClass',
        name: 'cityClass',
        meta: {
          isKeepAlive: false
        },
        component: () => import('@/views/peopleManage/powerManage/classManage/cityClass/index.vue')
      },
      {
        path: '/classManage/areaClass',
        name: 'areaClass',
        meta: {
          isKeepAlive: false
        },
        component: () => import('@/views/peopleManage/powerManage/classManage/areaClass/index.vue')
      }
    ]
  }
]
