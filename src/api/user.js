import http from '@/untils/http'

export function getUserList (reqData) {
  return http.get('https://www.easy-mock.com/mock/5981c8dba1d30433d851132c/example/getUserList', reqData)
}
