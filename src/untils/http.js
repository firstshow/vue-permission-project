// import qs from 'qs'
import nprogress from 'nprogress'
import { Message } from 'element-ui'
import axios from 'axios'

axios.defaults.baseURL = '/api'

let CancelToken = axios.CancelToken
// 请求拦截
axios.interceptors.request.use(config => {
  nprogress.start()
  let requestName = `${config.url}&${config.method}`
  if (requestName) {
    if (axios[requestName] && axios[requestName].cancel) {
      axios[requestName].cancel('同一时间请勿重复请求')
    }
    config.cancelToken = new CancelToken(c => {
      axios[requestName] = {}
      axios[requestName].cancel = c
    })
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 常见错误判断
axios.interceptors.response.use(config => {
  nprogress.done()
  return config.data
}, error => {
  nprogress.done()
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '错误请求'
        break
      case 401:
        error.message = '未授权，请重新登录'
        break
      case 403:
        error.message = '拒绝访问'
        break
      case 404:
        error.message = '请求错误,未找到该资源'
        break
      case 405:
        error.message = '请求方法未允许'
        break
      case 408:
        error.message = '请求超时'
        break
      case 500:
        error.message = '服务器端出错'
        break
      case 501:
        error.message = '网络未实现'
        break
      case 502:
        error.message = '网络错误'
        break
      case 503:
        error.message = '服务不可用'
        break
      case 504:
        error.message = '网络超时'
        break
      case 505:
        error.message = 'http版本不支持该请求'
        break
      default:
        error.message = `连接错误${error.response.status}`
    }
  } else {
    error.message = '连接到服务器失败'
  }
  Message({
    showClose: true,
    message: error.message,
    type: 'error'
  })
  return Promise.reject(error.message)
})

export default axios
