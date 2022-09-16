<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-text-field
        v-model="listName"
        label="List Name"
        placeholder="Enter..."
      ></v-text-field>
      <v-btn router exact :to="`list/${listName}`" color="primary">Create List</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      listName: ""
    }
  },
  methods: {
    createList () {
      this.$router.push({ name: 'list', params: { id: this.listName } })
    }
  }

}
</script>
