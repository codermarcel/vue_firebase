<template>

  <div class="panel panel-default">
      <div class="panel-heading">
          <div class="panel-title">
              <i class="fa fa-angle-right"></i> <a class="accordion-toggle" data-toggle="collapse" @click="isActive = !isActive" data-parent="#faq3"><strong>   <slot name="title"></slot>   </strong></a>
          </div>
      </div>
      <div id="faq3_q1" v-bind:class="isActive ? extend : collapse">
          <div class="panel-body"> <slot name="body"></slot>  </div>
      </div>
  </div>

</template>

<script>
import Layout from '@/components/layout'

export default {
  name: 'hello',
  data () {
    return {
      collapse: 'panel-collapse collapse',
      extend: 'panel-collapse extend',
      isActive: false
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
