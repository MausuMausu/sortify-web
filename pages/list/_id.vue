<template>
  <div>
    <h1>{{ $route.params.id }}</h1>
    <v-divider />
    <!-- <nuxt-child/> -->
    <v-btn 
      @click="dialogActive = true"
      style="position: absolute; bottom: 24px; right: 24px"
      rounded
      fab
      color="primary"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <ul>
      <li :key="index" v-for="(item, index) in items">
        {{ item }}
      </li>
    </ul>

    <v-btn class="mt-4" @click="goToSorting" color="primary">Start Sorting</v-btn>

    <v-dialog
      v-model="dialogActive"
      transition="dialog-transition"
    >
      <v-row justify="end" class="my-4 px-4">
        <v-col cols="12">
          <v-text-field
            v-model="newItem"
            label="Item Name"
          ></v-text-field>
          <!-- <v-btn @click="createList" color="primary">Create List</v-btn> -->
        </v-col>
        <v-col cols="auto">
          <v-btn @click="dialogActive = false" outlined>Cancel</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn @click="addListItem()" color="primary">Confirm</v-btn>
        </v-col>
      </v-row>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogActive: true,
      newItem: "",
      items: []
    }
  },
  methods: {
    addListItem () {
      this.items.push(this.newItem)
      this.newItem = ""
      this.dialogActive = false
    },

    goToSorting () {
      this.$store.commit('addList', { [this.$route.params.id]: this.items })
      this.$router.push({ name: 'sort-list', params: { id: this.listName } })
      // console.log(this.$store.state.lists[this.$route.params.id])
    }
  }
}
</script>