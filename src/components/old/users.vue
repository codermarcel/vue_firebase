<template>
  <div id="root" class="hello">

    <panel-top></panel-top>

    <div class="content">


      <table>

        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>


        <tbody>
          <tr v-for="user in users">
              <td>{{ user.username }}</td>
              <td>{{ user.email }}</td>
          </tr>
        </tbody>

      </table>


  </div>


  </div>
</template>

<script>
import PanelTop from '@/components/panel-top'
import axios from 'axios'

// Set config defaults when creating the instance
var instance = axios.create({
  baseURL: 'http://localhost:1338'
})

export default {
  name: 'users',
  data () {
    return {
      msg: 'Hi',
      users: null
    }
  },

  created () {
    this.getUsers()
  },

  methods: {
    getUsers: function () {
      instance.get('/users')
        .then((response) => {
          this.users = response.data.payload
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },

  computed: {
    myusers: () => {
      return this.users
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
