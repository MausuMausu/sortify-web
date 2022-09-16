<template>
  <div>
    <h1>{{ $route.params.id }}</h1>
    <v-divider />
    <!-- <nuxt-child/> -->
    <v-btn
      style="position: absolute; bottom: 24px; right: 24px"
      rounded
      fab
      color="primary"
      @click="dialogActive = true"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item.value }}
      </li>
    </ul>

    <v-btn class="mt-4" color="primary" @click="goToSorting">Start Sorting</v-btn>

    <v-dialog
      v-model="dialogActive"
      transition="dialog-transition"
    >
      <v-row justify="end" class="my-4 px-4" id="modal">
        <v-col cols="12">
          <v-text-field
            v-model="newItem"
            label="Item Name"
          ></v-text-field>
        </v-col>
        <v-col cols="auto">
          <v-btn outlined @click="dialogActive = false">Done</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="primary" @click="addItem()">Add</v-btn>
        </v-col>
      </v-row>
    </v-dialog>
  </div>
</template>

<script>

import {Item, Pair} from "~/model/comparison";


export default {
  data () {
    return {
      dialogActive: false,
      newItem: "",
      items: [],
      pairs: [],
      listName: null
    }
  },
  computed: {
    sortedItems() {
      return Array.from(this.items).sort((a, b) => b.score - a.score);
    },
    notVotedPairs() {
      return this.pairs.filter(pair => !pair.voted);
    }
  },
  methods: {
    addItem() {
      if (!this.newItem) {
        return;
      }
      const newItem = new Item(this.newItem);
      for (const item of this.items) {
        this.pairs.push(new Pair(item, newItem));
      }
      this.items.push(newItem);
      console.log('items: ', this.pairs)
      this.newItem = '';
    },
    goToSorting () {
      this.$store.commit('addList', { [this.$route.params.id]: this.items })
      this.$store.commit('addListPair', { [this.$route.params.id]: this.pairs })
      this.$router.push({ path: `/list/sort-list/${this.$route.params.id}` })
    }
  }
}
</script>

<style>

#modal {
  background-color: #212121;
}

</style>
