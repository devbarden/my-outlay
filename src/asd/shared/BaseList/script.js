export default {
  name: 'List',
  props: {
    items: {
      type: Array,
      required: true,
      validator(value) {
        return value.length > 0;
      },
    },
    icon: {
      type: String,
      required: false,
      validator(value) {
        return value.indexOf('#eei_') !== -1;
      },
    },
  },
};
