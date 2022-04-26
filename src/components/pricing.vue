<template>
  <div id="root" class="hello">

    <layout>


      <!-- Intro -->
      <section class="site-section site-section-top site-section-light themed-background-dark">
         <div class="container">
            <div class="push text-center">
               <h1 class="animation-fadeInQuick2Inv"><strong>Affordable plans for everyone.</strong> </h1>

               <h3 class="text-muted"><em>* Some text</em> </h3>

            </div>
         </div>
      </section>
      <!-- END Intro -->
      <!-- Plans -->
      <section class="site-content site-section">
         <div class="container">
            <div class="site-block">
               <div class="row">
                  <div class="col-sm-4">
                     <table class="table table-bordered table-pricing table-featured">
                        <thead>
                           <tr>
                              <th>Bronze</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr class="active">
                              <td>
                                 <h1>$<strong>9</strong><small>.99</small><br><small>2$/Credit</small></h1>
                              </td>
                           </tr>
                           <tr>
                              <td><strong>You receive</strong> 5 Credits</td>
                           </tr>
                           <tr>
                              <td><strong>Free</strong> Support</td>
                           </tr>
                           <tr class="active">
                              <td>
                                 <a href="javascript:void(0)" class="btn btn-effect-ripple  btn-info"><i class="fa fa-arrow-right"></i>Register</a>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="col-sm-4">
                     <table class="table table-bordered table-pricing table-featured">
                        <thead>
                           <tr>
                              <th>Silver</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr class="active">
                              <td>
                                 <h1>$<strong>19</strong><small>.99</small><br><small>1,3$/Credit</small></h1>
                              </td>
                           </tr>
                           <tr>
                              <td><strong>You receive</strong> 15 Credits</td>
                           </tr>
                           <tr>
                              <td><strong>Free</strong> Support</td>
                           </tr>
                           <tr class="active">
                              <td>
                                 <a href="javascript:void(0)" class="btn btn-effect-ripple  btn-info"><i class="fa fa-arrow-right"></i>Register</a>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="col-sm-4">
                     <table class="table table-bordered table-pricing table-featured">
                        <thead>
                           <tr>
                              <th>Bronze</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr class="active">
                              <td>
                                 <h1>$<strong>29</strong><small>.99</small><br><small>1,2$/Credit</small></h1>
                              </td>
                           </tr>
                           <tr>
                              <td><strong>You receive </strong> 25 Credits</td>
                           </tr>
                           <tr>
                              <td><strong>Free</strong> Support</td>
                           </tr>
                           <tr class="active">
                              <td>
                                 <a href="javascript:void(0)" class="btn btn-effect-ripple  btn-info"><i class="fa fa-arrow-right"></i>Register</a>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- END Plans -->


    </layout>

  </div>
</template>

<script>
import Layout from '@/components/layout'

export default {
  name: 'hello',
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
#test {
  text-align: center;
}

</style>
