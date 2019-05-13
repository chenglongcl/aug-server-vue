export default {
  namespaced: true,
  state: {
    listTop: false
  },
  mutations: {
    setListTop: (state, payload) => {
      state.listTop = payload.scrollTop
    }
  },
  actions: {
    setListTop({
      commit
    }, listTop) {
      commit('setListTop', listTop)
    }
  }
}
