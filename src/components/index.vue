<template>
  <div id="app" class="app">

    <layout>

      <!-- Intro + Action -->
      <section class="site-section site-section-top site-section-light themed-background-dark">
          <div class="container">
              <div class="push text-center">
                  <h1 class="animation-fadeInQuick2Inv"><strong>Runepay</strong></h1>
                  <h2 class="text-light-op animation-fadeInQuickInv push-bit"><strong>The new and simple payment solution.</strong></h2>
                  <a href="#/register"> <button class="btn btn-lg btn-info">Register now</button> </a>
              </div>
              <div class="site-promo-img visibility-none" data-toggle="animation-appear" data-animation-class="animation-slideUpQuick" data-element-offset="0">
                  <!-- <img src="img/placeholders/screenshots/promo_welcome.png" alt=""> -->
              </div>
          </div>
      </section>
      <!-- END Intro + Action -->


      <!-- Promo #1 -->
      <section class="site-section site-content border-bottom overflow-hidden">
          <div class="container">
              <div class="row">
                  <div class="col-sm-6 push">
                      <h2 class="site-heading"><strong>Various settings</strong></h2>
                      <p class="feature-text text-muted push"><strong>Every CRYPT</strong> offers plenty of different crypt settings and options that you can play around with!</p>
                      <h2 class="site-heading"><strong>Instant payment</strong></h2>
                      <p class="feature-text text-muted"><strong>AppUI</strong> will play nice with all modern browsers such as Chrome, Firefox, Safari, Opera and the latest versions of Internet Explorer (IE9 and up).</p>
                  </div>
                  <div class="col-sm-6 clearfix push">
                      <!-- <img src="img/placeholders/screenshots/promo_1.png" alt="" class="img-responsive pull-right visibility-none" data-toggle="animation-appear" data-animation-class="animation-fadeInLeft" data-element-offset="-200" style="max-width: 450px; margin-right: -130px;"> -->
                  </div>
              </div>
          </div>
      </section>
      <!-- END Promo #1 -->


      <!-- Promo #2 -->
      <section class="site-section site-content border-bottom overflow-hidden">
          <div class="container">
              <div class="row">
                  <div class="col-sm-6 col-sm-push-6 push">
                      <h2 class="site-heading"><strong>Flexible Layout</strong></h2>
                      <p class="feature-text text-muted push">Create the layout you want for your project in seconds. Would you like a static layout? A fixed header and sidebars? A fixed footer? An alternative sidebar? You can have it!</p>
                      <h2 class="site-heading"><strong>Fully Responsive</strong></h2>
                      <p class="feature-text text-muted">The User Interface will adjust to any screen size. It will look great on mobile devices and on desktops at the same time. No need to worry about the UI, just stay focused on the development.</p>
                  </div>
                  <div class="col-sm-6 col-sm-pull-6 clearfix push">
                      <!-- <img src="img/placeholders/screenshots/promo_2.png" alt="" class="img-responsive pull-left visibility-none" data-toggle="animation-appear" data-animation-class="animation-fadeInRight" data-element-offset="-200" style="max-width: 450px; margin-left: -130px;"> -->
                  </div>
              </div>
          </div>
      </section>
      <!-- END Promo #2 -->



      <!-- Promo #3 -->
      <section class="site-section site-content border-bottom overflow-hidden">
          <div class="container">
              <div class="row">
                  <div class="col-sm-6 push">
                      <h2 class="site-heading"><strong>Saves you time</strong></h2>
                      <p class="feature-text text-muted push">Time is of vital importance. <strong>AppUI</strong> will save you hundreds of hours of extra development. Start right away coding your functionality and see your project come to life months sooner.</p>
                      <h2 class="site-heading"><strong>Ready Designed Pages</strong></h2>
                      <p class="feature-text text-muted">15+ ready to use pages. The UI is ready, create the functionality. Dashboard, Login, Register, Social Net, Email Center, Media Box, Invoice, FAQ, Search Results and even more. Check them all out at the live preview.</p>
                  </div>
                  <div class="col-sm-6 clearfix push">
                      <!-- <img src="img/placeholders/screenshots/promo_3.png" alt="" class="img-responsive pull-right visibility-none" data-toggle="animation-appear" data-animation-class="animation-fadeInLeft" data-element-offset="-200" style="max-width: 450px; margin-right: -130px;"> -->
                  </div>
              </div>
          </div>
      </section>
      <!-- END Promo #3 -->



    </layout>

  </div>
</template>

<script>
import Layout from '@/components/layout'

export default {
  name: 'index',
  data () {
    return {
      msg: 'Hi'
    }
  },

  components: {
    'layout': Layout
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#root {

}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
