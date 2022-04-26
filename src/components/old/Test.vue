<template>
    <div id="cont" class="tabs is-centered is-large">
      <ul>



        <li :class="{ 'is-active' : $route.name == 'test.index'}"><a>Test</a></li>

      </ul>
    </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      test: this.$route.path,
      className: 'is-active',
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cont {
  margin-top: 10px;
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
