<template>


  <!-- Page Container -->
  <div id="page-container">

    <meta charset="utf-8">

    <title>Title</title>

    <meta name="description" content="description">
    <meta name="author" content="author">
    <meta name="robots" content="robots">

    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1.0">

    <!-- Icons -->
    <!-- The following icons can be replaced with your own, they are used by desktop and mobile browsers -->
    <link rel="shortcut icon" href="img/favicon.png">
    <link rel="apple-touch-icon" href="img/icon57.png" sizes="57x57">
    <link rel="apple-touch-icon" href="img/icon72.png" sizes="72x72">
    <link rel="apple-touch-icon" href="img/icon76.png" sizes="76x76">
    <link rel="apple-touch-icon" href="img/icon114.png" sizes="114x114">
    <link rel="apple-touch-icon" href="img/icon120.png" sizes="120x120">
    <link rel="apple-touch-icon" href="img/icon144.png" sizes="144x144">
    <link rel="apple-touch-icon" href="img/icon152.png" sizes="152x152">
    <link rel="apple-touch-icon" href="img/icon180.png" sizes="180x180">


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
                              <a href="/#/users" class="btn btn-default site-menu-toggle visible-xs visible-sm">
                                  Menu
                              </a>
                              <!-- END Menu Toggle -->

                              <!-- Main Menu -->
                                              <ul class="site-nav">
                                                <li> <router-link to="/foo">XX</router-link> </li>
                                                <li> <router-link to="/yy">YY</router-link> </li>
                                                <li> <router-link to="/users">Users</router-link> </li>
                                                <li> <router-link to="/foo">XX</router-link> </li>
                                                <li> <router-link to="/main" class="featured" >Client Login <i class="fa fa-arrow-right"></i> </router-link> </li>
                                              </ul>
                                              <!-- END Main Menu -->
                          </nav>

                          </div>

          </header>







      </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
