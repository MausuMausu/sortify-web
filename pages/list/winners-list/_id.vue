<template>
  <v-row justify="center" align="center">
  <h1 align="center">{{ $route.params.id }}</h1>
    <v-col cols="12" sm="8" md="6">
      <template>
        <v-col>
          <v-card
            id="winners"
            class="pa-10 rounded-xl"
            outlined
            tile
            align="center"
          >
            <h1 class="winners-list" align="center">Results: </h1>
            <ol>
              <li class="winners-list" v-for="(item) in list" :key="item.score">
                <h3 class="winners-list">
                  {{ item.value }}
                </h3>
              </li>
            </ol>
          </v-card>
        </v-col>
        <v-col align="center">
          <v-btn>Share</v-btn>
        </v-col>
        <v-responsive width="100%"></v-responsive>
      </template>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      listName: "",
      list: []
    }
  },
  methods: {},
  created() {
    this.list = JSON.parse(JSON.stringify(this.$store.state.lists[this.$route.params.id]))
    this.list.sort((a, b) => (a.score < b.score) ? 1 : -1)
  }
}
</script>

<style>

.winners-list {
  color: black;
}

#winners {
  background-color: aliceblue;
}

li {
  font-size: 2em;
}

</style>
