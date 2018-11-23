import http from '@/untils/http'

export function loginByUsername (username, password) {
  const data = {
    username,
    password
  }
  return http.post('/login', data)
}

export function logout () {
  return http.post('/login/logout')
}
