import * as actions from './actions'
import * as getters from './getters'
import * as types from './types'
import routerMap from '@/router/routerMap'
import router from '@/router/index'

const userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
let state = Object.assign({
  token: '',
  opened: true,
  permissionRouterObj: {}, // 有权限路由或功能对象，只要在内的，都表示有权限访问的
  metaBoj: {}, // 每一层下面所有的权限信息
  routers: []
}, userInfo)

const mutations = {
  /**
   * 初始化有权限的路由列表
   * @param state {Object} state状态树
   * @param list {Array} 接口获取的路由权限列表
   */
  [types.INIT_ROUTERS]: (state, list) => {
    state.routers = list || state.routers

    // 当没有list，并且本地也不存在路由列表，则不做处理;添加错误页面重定向404
    if (!list && state.routers.length === 0) {
      router.addRoutes([{
        path: '*',
        redirect: '/404'
      }])
      return
    }

    recursionArray(state.routers)

    let authRouters = routerMap[0]
    routerMap.map((d) => {
      if (state.permissionRouterObj[d.name]) {
        Object.assign(d.meta, state.metaBoj[d.name])
        authRouters.children.push(d)
      }
    })
    router.addRoutes([authRouters].concat([{
      path: '*',
      redirect: '/404'
    }]))

    sessionStorage.setItem('userInfo', JSON.stringify(state))
  },
  /**
   * 初始化state的状态值，只在退出登录时候清除
   * @param state
   * @param list
   */
  [types.INIT_STATE]: (state) => {
    sessionStorage.removeItem('userInfo')
  }
}

/**
 * 递归查询有哪些权限，拥有的权限，都存到permissionRouterObj
 * @author zc
 * @param array 需要递归的数组
 */
function recursionArray (array) {
  if (Object.prototype.toString.call(array) === '[object Array]' && array.length) {
    array.map((d, i) => {
      state.permissionRouterObj[d.name] = 1

      // 当不是菜单时候，将菜单下一集的权限都放到meta信息中
      let obj = {}
      d.children && d.children.map((sd) => {
        obj[sd.name] = 1
      })
      state.metaBoj[d.name] = obj

      if (d.children && d.children.length) {
        recursionArray(d.children)
      }
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
