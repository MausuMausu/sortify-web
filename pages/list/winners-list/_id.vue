<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <template>
        <v-col>
          <v-card
            id="squareOne"
            class="pa-10"
            outlined
            tile
            align="center"
          >
            <ol>
              <li class="winners-list" v-for="(item) in list" :key="item.score">
                <h2 class="winners-list">
                  {{ item.value }} - {{ item.score }}
                </h2>
              </li>
            </ol>
          </v-card>
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

li {
  font-size: 2em;
}

</style>
