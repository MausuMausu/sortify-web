<template>
  <v-container class="mt-16">
    <h1 align="center" class="pb-8">{{ $route.params.id }}</h1>
    <v-row no-gutters>
      <template>
        <v-col @click="squareOne">
          <v-card
            id="squareOne"
            class="pa-10 rounded-lg"
            outlined
            tile
            align="center"
          >
            <h1 class="text">
              {{ item1.value }}
            </h1>
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
            OR
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
            class="pa-10 rounded-lg"
            outlined
            tile
            align="center"
          >
            <h1 class="text">
              {{ item2.value }}
            </h1>
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
        console.log('test 1: ')
        this.$store.commit('addList', { [this.$route.params.id]: this.list })
        this.$router.push({ path: `/list/winners-list/${this.$route.params.id}` })
      }
    },
    squareTwo() {
      this.list.find(item => item.value === this.item2.value).score += (1 + this.list.find(item => item.value === this.item1.value).score)
      this.currentPair++
      if (this.currentPair > this.pairs.length - 1) {
        console.log('test 2: ')
        this.$store.commit('addList', { [this.$route.params.id]: this.list })
        this.$router.push({ path: `/list/winners-list/${this.$route.params.id}` })
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
  background-color: aliceblue;
  border-radius: 50px;
}

/*#squareOne:hover {*/
/*  background-color: hotpink;*/
/*}*/

#text {
  color: black;
}

#or {
  padding-bottom: 10%;
  color: aliceblue;
  font-size: 24px;
  font-weight: 700;
}

#squareTwo {
  background-color: aliceblue;
  border-radius: 30px;
}

.text {
  color: black;
}

</style>
