<template>
  <div id="root" class="hello">

    <layout>


      Hey there.. Not found.

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

</style>
