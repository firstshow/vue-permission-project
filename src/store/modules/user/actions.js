/**
 * Created by zc
 */
import * as types from './types'
import { loginByUsername, getPermissionList } from '@/api/login'
/**
 * 保存菜单的默认index
 * @param commit
 * @param data
 */
export const getPermissionListServer = ({ commit }) => {
  return new Promise((resolve, reject) => {
    getPermissionList().then(res => {
      if (res.code === 200) {
        commit(types.INIT_ROUTERS, res.data.list)
      }
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

/**
 * 登陆
 * @param dispatch
 * @param commit
 * @param userInfo
 * @returns {Promise}
 * @constructor
 */
export const LoginServer = ({ dispatch, commit }) => {
  return new Promise((resolve, reject) => {
    loginByUsername().then(res => {
      dispatch('getPermissionListServer').then(() => {
        resolve(res)
      })
    }).catch(error => {
      reject(error)
    })
  })
}

/**
 * 退出登陆
 * @param commit
 */
export const logonOutServer = ({ commit }) => {
  commit(types.INIT_STATE)
}

/**
 * 初始化权限路由
 * @param commit
 */
export const initRouter = ({ commit }) => {
  commit(types.INIT_ROUTERS)
}
