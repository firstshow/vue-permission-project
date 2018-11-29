import http from '@/untils/http'

export function loginByUsername (username, password) {
  const data = {
    username,
    password
  }
  return http.get('/login', data)
}

export function getPermissionList (username, password) {
  const data = {
    username,
    password
  }
  return http.get('https://www.easy-mock.com/mock/5981c8dba1d30433d851132c/example/getPermissionLIst', data)
}

export function logout () {
  return http.post('/login/logout')
}
