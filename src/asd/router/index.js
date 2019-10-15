import Vue from 'vue';
import Router from 'vue-router';

import CheckoutBenefits from './views/CheckoutBenefits';
import CheckoutExtras from './views/CheckoutExtras';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/benefits',
    },
    {
      path: '/benefits',
      name: 'checkout-benefits',
      component: CheckoutBenefits,
    },
    {
      path: '/extras',
      name: 'checkout-extras',
      component: CheckoutExtras,
    },
  ],
});
