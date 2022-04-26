<template>
  <li class="{{ active ? 'is-active' : ''}}"><a><slot></slot></a></li>
</template>

<script>
export default {
  name: 'tab',
  data () {
    return {
      active: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
