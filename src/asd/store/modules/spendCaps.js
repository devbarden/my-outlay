export default {
  namespaced: true,
  state: {
    caps: {
      isAdded: true,
      value: 25,
      currency: '$',
      defaultValue: 'No cap added',
    },
  },
  getters: {
    capValue(state) {
      return `${state.caps.value}${state.caps.currency} cap added`;
    },
  },
};
