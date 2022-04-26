<template>

<div>
    hey there.

    <button @click="logout()">Logout</button>
</div>


</template>

<script>
  import LayoutBackend from '@/components/backend/layout_backend'

  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Hi'
      }
    },

    methods: {
      logout: function () {
        console.log('trying to logout')
        this.$store.dispatch('logoutAndRedirect')
      }
    },

    components: {
      'layout': LayoutBackend
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
