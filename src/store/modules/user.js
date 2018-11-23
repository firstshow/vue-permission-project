import { loginByUsername, logout } from '@/api/login'
const user = {
  state: {
    token: '',
    opened: true
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    TOGGLE_SIDEBAR: (state) => {
      state.opened = !state.opened
    }
  },

  actions: {
    LoginByUsername ({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password).then(response => {
          commit('SET_TOKEN', response.token)
          // setToken(response.data.token)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    ToggleSideBar ({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    LogOut () {
      return new Promise(resolve => {
        logout().then(res => {
          resolve(res)
        })
      })
    }
  }
}

export default user
