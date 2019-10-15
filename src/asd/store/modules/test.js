export default {
  state: {
    test: 1,
  },
  mutations: {
    CHANGE_TEST(state, value) {
      state.test = value;
    },
  },
};
