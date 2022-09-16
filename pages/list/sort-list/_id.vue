<template>
  <v-container class="mt-16">
    <v-row no-gutters>
        <p>{{ $store.state.lists[$route.params.id] }}</p>
      <template>
        <v-col @click="squareOne">
          <v-card
            id="squareOne"
            class="pa-10"
            outlined
            tile
            align="center"
          >
            {{ $store.state.pairs }}
          </v-card>
        </v-col>
        <v-responsive width="100%"></v-responsive>
      </template>
    </v-row>
    <v-row no-gutters>
      <template>
        <v-col @click="squareOne">
          <div
            id="vs"
            class="pa-10"
            align="center"
          >
            VS
          </div>
        </v-col>
        <v-responsive width="100%"></v-responsive>
      </template>
    </v-row>
    <v-row no-gutters>
      <template>
        <v-col @click="squareTwo">
          <v-card
            id="squareTwo"
            class="pa-10"
            outlined
            tile
            align="center"
          >
            Column
          </v-card>
        </v-col>
        <v-responsive width="100%"></v-responsive>
      </template>
    </v-row>
  </v-container>
</template>

<script>
export default {
  // data() {
  //   return {
  //     listName: ""
  //   }
  // },
  methods: {
    squareOne() {
      console.log('test 1')
      console.log('pairs: ', this.$store.state.pairs)
    },
    squareTwo() {
      console.log('test 2')
    }
  }

}
</script>

<style>

#container {
  margin: 2%;
}

#squareOne {
  background-color: #4fc733;
  /*width: 50px;*/
  /*height: 200px;*/
}

#vs {
  padding-bottom: 10%;
  color: hotpink;
  font-size: 24px;
  font-weight: 700;
}

#squareTwo {
  background-color: #ff5959;
  /*width: 50px;*/
  /*height: 200px;*/
}

</style>
