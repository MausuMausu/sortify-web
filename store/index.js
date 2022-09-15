export const state = () => ({
  lists: {},
  pairs: {}
})

export const getters = {
  getList(state, listName) {
    return state.lists[listName]
  }
}

export const mutations = {
  addList(state, list) {
    state.lists = { ...state.lists, ...list }
  },
  addListPair(state, pairs) {
    console.log({ ...state.pairs, ...pairs })
    state.pairs = { ...state.pairs, ...pairs }
  }
}

export const actions = {
  // async fetchCounter({ state }) {
  //   // make request
  //   const res = { data: 10 };
  //   state.counter = res.data;
  //   return res.data;
  // }
}
