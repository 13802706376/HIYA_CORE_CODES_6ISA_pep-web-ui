import request from '@/utils/request'
import qs from 'qs'

export function login(userInfo) {
    return request({
        method: 'post',
        url: '/login',
        data:qs.stringify(userInfo),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}
