export default {
  namespaced: true,
  state: {
    header: 'Hello Vue App',
  },
  getters: {
    GET_HEADER: state => state.header,
  },
  mutations: {
    CHANGE_HEADER (state, value) {
      state.header = value
    },
  },
  actions: {
    HEADER_EVENT ({ commit }, value) {
      commit('CHANGE_HEADER', value)
    },
  }
}
