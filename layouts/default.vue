<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-toolbar-title v-text="title" @click="goToHome()" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'WOLF LIST',
    }
  },
  methods: {
    goToHome () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>

/**{*/
/*  background-color: #f8f8f8;*/
/*}*/

#wolf-list {
  height: 70px;
  lenght: 70px;
  padding-left: 10px;
  padding-top: 20px;
}

</style>
