import Vue from 'vue';
import BaseButton from './BaseButton';

const components = {
  BaseButton,
};

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);
});
