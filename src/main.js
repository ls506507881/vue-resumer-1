// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'normalize.css'
import './assets/reset.scss'

import ElementUI from 'element-ui'   //引入饿了吗js
import 'element-ui/lib/theme-chalk/index.css' //引入饿了吗css

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})



