<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-btn 
        to="new-list"
        router
        exact
        rounded
        fab
        color="primary"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    // createNewList () {
    //   this.
    // }
  }
}
</script>
