import Vue from 'vue'

import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' 

import '@/assets/plugins/font-awesome/css/font-awesome.css'

import '@/assets/styles/index.scss'

import App from './App'
import router from './router'
import store from './store'

import '@/permission'

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
