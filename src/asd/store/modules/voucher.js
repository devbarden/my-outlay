import codesData from '../../core/mocked-data/codesVoucher.json';

export default {
  namespaced: true,
  state: {
    voucher: {
      inputCodeValue: '',
      isSpinnerActive: false,
      isErrorCode: false,
      isSuccessCode: false,
    },
    collapseItems: [
      {
        collapseItemHeader: 'Who can get WiFi calling?',
        collapseItemPanelId: '1a',
        isInitialCollapsed: true,
      },
      {
        collapseItemHeader: 'How it works',
        collapseItemPanelId: '2a',
        isInitialCollapsed: true,
      },
      {
        collapseItemHeader: 'Got a gift voucher ?',
        collapseItemPanelId: '3a',
        isInitialCollapsed: false,
      },
    ],
  },
  getters: {
    inputCodeValue: ({ voucher }) => voucher.inputCodeValue,
    isSpinnerActive: ({ voucher }) => voucher.isSpinnerActive,
    isErrorCode: ({ voucher }) => voucher.isErrorCode,
    isSuccessCode: ({ voucher }) => voucher.isSuccessCode,
  },
  mutations: {
    updateInputValue({ voucher }, value) {
      voucher.inputCodeValue = value;
    },
    resetConditionsCode({ voucher }) {
      voucher.isErrorCode = false;
      voucher.isSuccessCode = false;
    },
    setErrorCode({ voucher }) {
      voucher.isErrorCode = true;
    },
    setSuccessCode({ voucher }) {
      voucher.isSuccessCode = true;
    },
    switchOffSpinner({ voucher }) {
      voucher.isSpinnerActive = false;
    },
    switchOnSpinner({ voucher }) {
      voucher.isSpinnerActive = true;
    },
  },
  actions: {
    checkCode({ state, commit }) {
      commit('switchOnSpinner');

      const isCorrectCode = codesData.keys.includes(state.voucher.inputCodeValue);

      setTimeout(() => {
        commit('switchOffSpinner');
        commit(isCorrectCode ? 'setSuccessCode' : 'setErrorCode');
      }, 1500);
    },
    resetAndUpdate({ commit }, event) {
      commit('resetConditionsCode');
      commit('updateInputValue', event.target.value);
    },
  },
};
