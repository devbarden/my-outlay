export default {
  namespaced: true,
  state: {
    arr: [1, 1, 1, 1, 1],
  },
  getters: { // equals to computed in components
    arrLength(state) {
      return state.arr.length;
    },
  },
  mutations: { // for changes of properties of the state. Synchronously
    ADD_ITEM(state, item) {
      state.arr.push(item);
    },
    ADD_DATA(state, data) {
      console.log(data);
    },
  },
  actions: { // for REST requests. Asynchronously
    LOAD_DATA(context) { // Make request, then call mutation
      return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => context.commit('ADD_DATA', data));
    },
  },
};
