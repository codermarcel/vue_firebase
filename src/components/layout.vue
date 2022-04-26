<template>


  <body>

    <!-- <script src="https://www.gstatic.com/firebasejs/3.7.8/firebase.js"></script>
    <script>
      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyDHfpZ09waUiBXp5KmQs8OQnSefh9uJCoQ",
        authDomain: "composite-dream-97222.firebaseapp.com",
        databaseURL: "https://composite-dream-97222.firebaseio.com",
        projectId: "composite-dream-97222",
        storageBucket: "composite-dream-97222.appspot.com",
        messagingSenderId: "504620311846"
      };
      firebase.initializeApp(config);
    </script> -->




<!-- Page Container -->
<div id="page-container">

  <!-- Site Header -->
  <header>
     <div class="container">

        <!-- Site Logo -->
        <a href="/#" class="site-logo">
          <i class="fa fa-cube"></i> Rune <strong> PAY</strong>
        </a>
        <!-- END Site Logo -->

        <!-- Site Navigation -->
        <nav>

           <!-- Menu Toggle -->
           <!-- Toggles menu on small screens -->
          <a>
            <router-link to="/" class="btn btn-default site-menu-toggle visible-xs visible-sm">About</router-link>
          </a>

           <!-- END Menu Toggle -->

           <!-- Main Menu -->
           <ul class="site-nav">
              <li> <router-link to="/">About</router-link>  </li>
              <li> <router-link to="/features">Features</router-link> </li>
              <li> <router-link to="/pricing">Pricing</router-link>  </li>
              <li> <router-link to="/faq">Faq</router-link> </li>
              <li> <router-link to="/login" class="featured" >Client Login <i class="fa fa-arrow-right"></i> </router-link> </li>
           </ul>
           <!-- END Main Menu -->
        </nav>

     </div>
  </header>


  <div class="account-pages"></div>
  <div class="clearfix"></div>
  <div class="wrapper-page">

    <slot></slot>

  </div>



</div>


</body>

</template>



<script>
export default {
  name: 'layout'
}
</script>

<style scoped>
@import '../../static/css/bootstrap.min.css';
@import '../../static/css/plugins.css';
@import '../../static/css/main.css';
@import '../../static/css/themes.css';

/*#page-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}*/
</style>
