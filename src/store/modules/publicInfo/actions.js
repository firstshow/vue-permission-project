/**
 * Created by zc
 */
import * as types from './types'
export const uploadListParams = ({ commit },data ) => {
  commit(types.UPLOAD_LIST_PARAMS, data); // 发送指令，存储数据
}
