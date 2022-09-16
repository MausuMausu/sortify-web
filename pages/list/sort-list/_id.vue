<template>
  <v-container class="mt-16">
        <ul>
          <li v-for="(item, index) in list" :key="index">
            {{ item.value }} - {{ item.score }}
          </li>
        </ul>
    <v-row no-gutters>
        <!-- <p>{{ pairs[currentPair] }}</p> -->
        <!-- <p>{{ list }}</p> -->
      <template>
        <v-col @click="squareOne">
          <v-card
            id="squareOne"
            class="pa-10"
            outlined
            tile
            align="center"
          >
            {{ item1.value }} -- {{ this.list.find(item => item.value === this.item1.value)?.score }}
          </v-card>
        </v-col>
        <v-responsive width="100%"></v-responsive>
      </template>
    </v-row>
    <v-row no-gutters>
      <template>
        <v-col>
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
            {{ item2.value }} -- {{ this.list.find(item => item.value === this.item2.value)?.score }}
          </v-card>
        </v-col>
        <v-responsive width="100%"></v-responsive>
      </template>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      currentPair: 0,
      pairs: [],
      list: []
    }
  },
  computed: {
    item1 () {
      return this.pairs[this.currentPair]?.item1 || {}
    },
    item2 () {
      return this.pairs[this.currentPair]?.item2 || {}
    },
  },
  created () {
    this.pairs = JSON.parse(JSON.stringify(this.$store.state.pairs[this.$route.params.id]))
    this.list = JSON.parse(JSON.stringify(this.$store.state.lists[this.$route.params.id]))
  },
  methods: {
    squareOne() {
      this.list.find(item => item.value === this.item1.value).score += (1 + this.list.find(item => item.value === this.item2.value).score)
      this.currentPair++
      if (this.currentPair > this.pairs.length - 1) {
        this.$store.commit('addList', { [this.$route.params.id]: this.list })
      }
    },
    squareTwo() {
      this.list.find(item => item.value === this.item2.value).score += (1 + this.list.find(item => item.value === this.item1.value).score)
      this.currentPair++
      if (this.currentPair > this.pairs.length - 1) {
        this.$store.commit('addList', { [this.$route.params.id]: this.list })
      }
    }
  },

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
