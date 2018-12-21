import * as actions from './actions'
import * as getters from './getters'
import * as types from './types'

const publicInfo = JSON.parse(sessionStorage.getItem('publicInfo'))
const state = Object.assign({
  reqDataList: {}
}, publicInfo);

const mutations = {
  [types.UPLOAD_LIST_PARAMS](state, data) {
    try {
      if (data.reqData) {
        state.reqDataList[data.routeName] = data.reqData
      } else {
        delete state.reqDataList[data.routeName]
      }

      // 更新后的数据存储到本地
      sessionStorage.setItem('publicInfo', JSON.stringify(state));
    } catch (err) {
      console.log("存储错误：" + err)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
