import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'home',
      components: {
        main: () => import('../views/Home')
      }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        main: () => import('../views/About')
      }
    },
  ]
})
