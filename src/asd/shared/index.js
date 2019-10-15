import Vue from 'vue/dist/vue';
import BaseButton from './BaseButton/template.vue';
import BaseIconLink from './BaseIconLink/template.vue';
import BaseIconButton from './BaseIconButton/template.vue';
import BaseList from './BaseList/template.vue';
import BaseLabel from './BaseLabel/template.vue';
import Tooltip from './Tooltip/template.vue';

// Form
import BlockControl from './Form/BlockControl/template.vue';

import Card from './Card/template.vue';
import DealBonus from './DealBonus/template.vue';

const components = {
  BaseButton,
  BaseIconLink,
  BaseIconButton,
  BaseList,
  BaseLabel,
  BlockControl,
  Card,
  DealBonus,
  Tooltip,
};

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);
});
