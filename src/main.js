import Vue from 'vue'

import app from './app'
import store from './store/index'
import router from './router/router'

import './shared'
import './helpers'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(app)
}).$mount('#app')
