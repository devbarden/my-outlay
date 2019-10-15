import Vue from 'vue/dist/vue';
import Vuex from 'vuex';

import test from './modules/test';
import array from './modules/array';
import stepper from './modules/stepper';
import voucher from './modules/voucher';
import spendCaps from './modules/spendCaps';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    test,
    array,
    stepper,
    voucher,
    spendCaps,
  },
});
