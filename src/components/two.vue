<template>
  <div>

      <!-- Payments Title -->

      <section slot="color" :class="className + color">

          <div class="container">
              <h2 class="site-heading h3 site-block">
                  <i :class="icon"></i> <strong> <slot name="topic"></slot> </strong>
              </h2>
          </div>
      </section>
      <!-- END Payments Title -->

      <!-- Payments FAQ -->
      <section class="site-content site-section">
          <div class="container">
              <div class="row site-block">
                  <div class="col-md-8 col-md-offset-2">
                      <div id="faq" class="panel-group">

                          <slot name="content"></slot>

                      </div>
                  </div>
              </div>
          </div>
      </section>
      <!-- END Payments FAQ -->


  </div>
</template>

<script>
import Layout from '@/components/layout'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Hi',
      className: 'site-content site-section-mini site-section-light themed-background-'
    }
  },

  props: ['color', 'icon'],

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
