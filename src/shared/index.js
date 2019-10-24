import Vue from 'vue'
import BaseButton from './BaseButton'
import BaseIconLink from './BaseIconLink'

const components = {
  BaseButton,
  BaseIconLink,
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);
})
