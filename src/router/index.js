import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import store from '../store'
// import VueRouter from '@websanova/vue-auth/drivers/router/vue-router.2.x.js'
// import Auth from '../auth'
import Lscache from 'lscache'
// import Firebase from 'firebase'

window.cache = Lscache

Vue.use(Router)
Vue.use(VueAxios, Axios)

const router = new Router({
  hashbang: false,
  linkActiveClass: 'active',
  mode: 'history',
  base: __dirname,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.authenticated) {
    console.log('redirecting to login')
    next({
      path: '/login'
    })
  }

  if (to.meta.requiresGuest && store.getters.authenticated) {
    console.log('redirecting to main')
    next({
      path: '/main'
    })
  }

  next()
})

Vue.router = router
Vue.axios.defaults.baseURL = 'http://localhost:1338'

export default router
