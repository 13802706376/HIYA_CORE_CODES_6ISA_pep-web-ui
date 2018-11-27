import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index')},
  { path: '*', redirect: '/404', hidden: true },

  { 
    path: '/404', 
    component: Layout,
    redirect: '/404/page',
    children: [{
      path: '/404/page',
      component: () => import('@/views/errorPage/404')
    }]
  },

  { 
    path: '/401', 
    component: Layout,
    redirect: '/401/page',
    children: [{
      path: '/401/page',
      component: () => import('@/views/errorPage/401')
    }]
  },

  {
    path: '/',
    component: Layout,
    redirect: '/political/grade',
    name: 'Dashboard',
    children: [{
      path: 'political/grade',
      component: () => import('@/views/political/index')
    }]
  },

  {
    path: '/political',
    component: Layout,
    redirect: '/political/grade',
    name: '政委工作',
    meta: { title: '政委工作'},
    children: [
      {
        path: 'grade',
        name: '政委评分',
        component: () => import('@/views/political/index'),
        meta: { title: '政委评分',roles:['grade']}
      }
    ]
  },

  {
    path: '/system',
    component: Layout,
    redirect: '/system/role',
    name: '系统管理',
    meta: { title: '系统管理'},
    children: [
      {
        path: 'role',
        name: '角色管理',
        component: () => import('@/views/system/roles/index'),
        meta: { title: '角色管理',roles:['manager']}
      },{
        path: 'roleMemManger',
        component: () => import('@/views/system/roles/RoleMemberManager'),
        name: '角色成员管理',
        meta: { title: '角色成员管理', noCache: true },
        hidden: true
      },{
        path: 'menu',
        name: '菜单管理',
        component: () => import('@/views/system/menu/index'),
        meta: { title: '角色管理',roles:['manager']}
      }
    ]
  },

  {
    path: '/organization',
    component: Layout,
    redirect: '/organization/structure',
    name: '组织架构',
    meta: { title: '组织架构'},
    children: [
      {
        path: 'structure',
        name: '组织架构',
        component: () => import('@/views/organization/index'),
        meta: { title: '组织架构',roles:['structure']}
      }
    ]
  },
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
