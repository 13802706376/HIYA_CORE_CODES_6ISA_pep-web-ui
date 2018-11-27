import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import configs from '@/utils/config'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 10000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.authorization && config.url !== configs.LOGINAPI) {
        config.headers['authorization'] = getToken(configs.AUTHORIZATION) // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    if(store.getters.rememberMe && config.url !== configs.LOGINAPI){
        config.headers['remember-me'] = getToken(configs.REMEMBER_ME)
    }
    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== configs.STATUS) {
        Message({
            message: res.msg,
            type: 'error',
            duration: 3000
        })

        // store.dispatch('FedLogOut').then(() => {
        //     location.reload() 
        // })

        return Promise.reject('error')
    } else {
        return response
    }
  },
  error => {
    Message({
      message: '连接异常...',
      type: 'error',
      duration: 10 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
