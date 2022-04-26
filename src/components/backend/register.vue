<template>

  <layout id="login-container">

    <div id="auth-container">

      <div id="card-box" class="card-box">
        <div class="panel-heading">
            <h3 class="text-center"> Register account for <strong class="text-custom">app name</strong> </h3>
        </div>


        <div class="panel-body">
        <form class="form-horizontal m-t-20" v-on:submit.prevent="signUp">



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
                  <button class="btn btn-pink btn-block text-uppercase waves-effect waves-light" type="submit">Register</button>
              </div>
          </div>
        </form>

        </div>
        </div>

        <div class="row">
          <div class="col-sm-12 text-center">
              <p>Don't have an account?  <router-link to="/login" class="text-primary m-l-5">Sign in</router-link> </p>
          </div>
        </div>

    </div>

  </layout>


</template>

<script>
import LayoutBackend from '@/components/backend/layout_backend'

export default {
  name: 'register',
  data () {
    return {
      email: 'example@email.com',
      password: '123456',
      error: false,
      error_text: 'N/A',
      success: false,
      success_text: 'N/A'
    }
  },

  methods: {
    signUp: function () {
      let firebase = window.firebase

      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message

        if (errorCode) {

        }

        if (errorMessage == null) {
          this.error = false
          this.success = true
          this.success_text = 'Successfully registered your account with email : ' + this.email
          this.$router.push('/login') // no error, Go to login.
          return
        }

        this.success = false
        this.error = true
        this.error_text = errorMessage
      })
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
  color: #2c3e50; // font color.
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
