<template>
  <div id="root" class="hello">

    <layout>

      <!-- Intro -->
      <section class="site-section site-section-top site-section-light themed-background-dark">
          <div class="container">
              <h1 class="text-center animation-fadeInQuickInv"><strong>All your questions answered.</strong></h1>
          </div>
      </section>
      <!-- END Intro -->


      <two color="social" icon="fa fa-fw fa-paypal">
        <template slot="topic"> My title</template>

        <template slot="content">
          <one>
            <template slot="title"> My title</template>
            <template slot="body"> My body</template>
          </one>

          <one>
            <template slot="title">Something</template>
            <template slot="body">Content</template>
          </one>
        </template>
      </two>



      <two color="danger" icon="fa fa-fw fa-paypal">
        <template slot="topic"> My title</template>

        <template slot="content">
          <one>
            <template slot="title"> My title</template>
            <template slot="body"> My body</template>
          </one>

          <one>
            <template slot="title">Something</template>
            <template slot="body">Content</template>
          </one>
        </template>
      </two>


      <two color="success" icon="fa fa-fw fa-paypal">
        <template slot="topic"> My title</template>

        <template slot="content">
          <one>
            <template slot="title"> My title</template>
            <template slot="body"> My body</template>
          </one>

          <one>
            <template slot="title">Something</template>
            <template slot="body">Content</template>
          </one>
        </template>
      </two>


      <two color="amethyst" icon="fa fa-fw fa-code">
        <template slot="topic"> My title</template>

        <template slot="content">
          <one>
            <template slot="title"> My title</template>
            <template slot="body"> My body</template>
          </one>

          <one>
            <template slot="title">Something</template>
            <template slot="body">Content</template>
          </one>
        </template>
      </two>



    </layout>

  </div>
</template>

<script>
import Layout from '@/components/layout'
import One from '@/components/one'
import Two from '@/components/two'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Hi'
    }
  },

  components: {
    'layout': Layout,
    'one': One,
    'two': Two
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#test {
  text-align: center;
}

</style>
