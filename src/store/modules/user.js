import { login, logout, getInfo,getUserInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import config from '@/utils/config'
import { Local } from '@/utils'

const user = {
  state: {
    authorization: getToken(config.AUTHORIZATION),
    rememberMe: getToken(config.REMEMBER_ME),
    name: '',
    roles: []
  },

  mutations: {
    SET_AUTHORIZATION: (state, authorization) => {
      state.authorization = authorization
    },
    SET_REMEMBER_ME: (state, rememberMe) => {
        state.rememberMe = rememberMe
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
          setToken(config.AUTHORIZATION,response.headers.authorization)
          setToken(config.REMEMBER_ME,response.headers['remember-me'])
          commit('SET_AUTHORIZATION', response.headers.authorization)
          commit('SET_REMEMBER_ME', response.headers['remember-me'])
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          const data = response.data
          if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.roles)
          } else {
            reject('getInfo: roles must be a non-null array !')
          }
          commit('SET_NAME', data.name)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_AUTHORIZATION', '')
          commit('SET_REMEMBER_ME', '')
          
          commit('SET_ROLES', [])
          removeToken(config.AUTHORIZATION)
          removeToken(config.REMEMBER_ME)
          Local.remove(config.LOGININFOS)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_AUTHORIZATION', '')
        commit('SET_REMEMBER_ME', '')
        removeToken(config.AUTHORIZATION)
        removeToken(config.REMEMBER_ME)
        resolve()
      })
    }
  }
}

export default user
