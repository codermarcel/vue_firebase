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

  <div>

    <head>
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta name="description" content="Description">
     <meta name="author" content="Author">
     <link rel="shortcut icon" href="static/backend/img/favicon.ico">
     <title> Backend title</title>
    </head>


    <link href="static/backend/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="static/backend/css/pages.css" rel="stylesheet" type="text/css" />
    <link href="static/backend/css/core.css" rel="stylesheet" type="text/css" />
    <link href="static/backend/css/components.css" rel="stylesheet" type="text/css" />
    <link href="static/backend/css/icons.css" rel="stylesheet" type="text/css" />
    <link href="static/backend/css/responsive.css" rel="stylesheet" type="text/css" />


    <!-- Page Container -->
    <div id="page-container">
    		<!-- HTML5 Shiv and Respond.js IE8 support of HTML5 elements and media queries -->
    		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    		<!--[if lt IE 9]>
    		<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    		<script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    		<![endif]-->

    		<div id="app" class="wrapper-page">
    			<slot></slot>
    		</div>
      </div>

  </div>

  </body>

</template>

<script>
export default {
  name: 'layout_backend'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

// @import '../../../static/backend/css/bootstrap.css';
// @import '../../../static/backend/css/pages.css';
//
// @import '../../../static/backend/css/core.css';
// @import '../../../static/backend/css/components.css';
// @import '../../../static/backend/css/icons.css';
// @import '../../../static/backend/css/responsive.css';

/*@import '../../../static/backend/css/bootstrap.css';*/

/*#page-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; // font color.
  margin-top: 0px;
  margin-left: auto;
  margin-right: auto;
  width: 30em
}*/



</style>
