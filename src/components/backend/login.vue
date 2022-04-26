<template>

  <layout id="login-container">

    <div id="auth-container">

      <div id="card-box" class="card-box">
        <div class="panel-heading">
            <h3 class="text-center"> Sign In to <strong class="text-custom">app name</strong> </h3>
        </div>

        <h5 class="text-center" v-show="userEmail != null"> Singned In with email:  {{ userEmail }}</h5>


        <div class="panel-body">
        <form class="form-horizontal m-t-20" v-on:submit.prevent="signIn">



        <div v-if="error" class="alert alert-danger alert-dismissable">
          <button type="button" class="close" aria-hidden="true" v-on:click="error = false">
            ×
          </button>
          {{ error_text }}
        </div>


        <div v-if="success" class="alert alert-success alert-dismissable">
          <button type="button" class="close" aria-hidden="true" v-on:click="success = false">
            ×
          </button>
          {{ success_text }}
        </div>


          <div class="form-group">
              <div class="col-xs-12">
                  <input class="form-control" value="" name="email" type="email" v-bind:value="email" required="" placeholder="Email Address">
              </div>
          </div>

          <div class="form-group">
              <div class="col-xs-12">
                  <input class="form-control" name="password" type="password" v-bind:value="password" required="" placeholder="Password">
              </div>
          </div>



          <div class="form-group text-center m-t-40">
              <div class="col-xs-12">
                  <button class="btn btn-pink btn-block text-uppercase waves-effect waves-light" type="submit">Log In</button>
              </div>
          </div>

          <div class="form-group m-t-30 m-b-0">
              <div class="col-sm-12">
                <router-link to="/recover" class="text-dark"><i class="fa fa-lock m-r-5"></i> Forgot your password?</router-link>
              </div>
          </div>
        </form>

        </div>
        </div>

        <div class="row">
          <div class="col-sm-12 text-center">
            <p>Don't have an account?  <router-link to="/register" class="text-primary m-l-5">Sign up</router-link> </p>
          </div>
        </div>

    </div>

  </layout>


</template>

<script>
import LayoutBackend from '@/components/backend/layout_backend'

export default {
  name: 'login',
  data () {
    return {
      email: 'aa@email.com',
      userEmail: null,
      password: '123456',
      error: false,
      error_text: 'N/A',
      success: false,
      success_text: 'N/A'
    }
  },

  methods: {
    fetchEmail: function () {
      this.userEmail = window.auth.getEmail()
    },
    signIn: function () {
      this.axios.post('/auth/login', {
        email: this.email,
        password: this.password
      })
      .then((response) => {
        let code = response.data.code
        let status = response.data.status
        let message = response.data.message

        if (status === 'success') {
          let token = response.data.data.token
          let csrf = response.data.data.csrf
          // this.$store.commit('login', {token: token, csrf: csrf})
          this.$store.dispatch('loginAndRedirect', {token: token, csrf: csrf})

          // this.$router.push('/main')

          return
        }

        this.error = true
        this.error_text = 'Code: ' + code + 'Message: ' + message
      })
      .catch((error) => {
        if (error) {

        }
        this.error = true
        this.error_text = 'Could not connect to server'
      })
    }
  },

  computed: {
    authenticated () {
      return this.$store.getters.authenticated
    }
  },

  components: {
    'layout': LayoutBackend
  }
}

</script>

<style scoped>

#login-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  width: 30em
}

/*.text-center {
  color: aqua;
}

.col-sm-12 {
  text-decoration-color: red;
  color: red;
}*/

</style>
