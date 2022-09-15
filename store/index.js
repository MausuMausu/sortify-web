export const state = () => ({
  lists: {},
})

export const getters = {
  getList(state, listName) {
    return state.lists[listName]
  }
}

export const mutations = {
  addList(state, list ) {
    state.lists = { ...state.lists, ...list }
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