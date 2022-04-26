<template>
  <div id="root" class="hello">

    <panel-top></panel-top>




  </div>
</template>

<script>
import PanelTop from '@/components/panel-top'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Hi'
    }
  },

  components: {
    'panel-top': PanelTop
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
