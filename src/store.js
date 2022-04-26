import Vuex from 'vuex'
import Vue from 'vue'
import router from './router'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    authenticated: false,
    token: null
  },
  mutations: {
    login (state, data) {
      var cache = window.cache
      var key = 'auth_data'
      cache.set(key, data, 10)
    },
    logout (state) {
      var cache = window.cache
      var key = 'auth_data'
      cache.remove(key)
    }
  },
  getters: {
    authenticated: state => {
      var cache = window.cache
      var key = 'auth_data'
      var data = cache.get(key)

      return data !== null
    }
  },
  actions: {
    loginAndRedirect (context, data) {
      context.commit('login', data)
      console.log('trying to redirect')
      router.push('/main')
    },
    logoutAndRedirect (context) {
      context.commit('logout')
      router.push('/login')
    }
  }
})

export default store
