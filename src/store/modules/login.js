export default {
  namespaced: true,
  state: {
    dialogLogin: false,
    loginSuccess: false
  },
  mutations: {
    updateDialogLoginStatus(state, payload) {
      state.dialogLogin = payload
    },
    updateLoginSuccess(state, payload) {
      state.loginSuccess = payload
    },
  }
}
