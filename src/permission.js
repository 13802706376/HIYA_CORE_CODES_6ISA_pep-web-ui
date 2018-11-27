import router from './router'
import store from './store'
import NProgress from 'nprogress' 
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import config from '@/utils/config'

function hasPermission(roles, permissionRoles) {
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login']

const testPer = ['grade','manager','structure']

router.beforeEach((to, from, next) => {
  NProgress.start() 
  if (getToken(config.AUTHORIZATION)) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done() 
    } else {
      if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
        // store.dispatch('GetInfo').then(res => {
        //     next()
        // }).catch((err) => {
        //   store.dispatch('FedLogOut').then(() => {
        //     next({ path: '/' })
        //   })
        // })
        next()
      } else {
        //没有动态改变权限的需求可直接next() 删除下方权限判断 
        // next()
        // if (hasPermission(store.getters.roles, to.meta.roles)) {
        if (hasPermission(testPer, to.meta.roles)) {
          next()
        } else {
          next({ path: '/401', replace: true, query: { noGoBack: true }})
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/login') // 否则全部重定向到登录页
      NProgress.done() 
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
