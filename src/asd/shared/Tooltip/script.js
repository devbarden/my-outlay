export default {
  name: 'Tooltip',
  props: {
    text: {
      type: String,
      required: false,
      validator(value) {
        return value.length > 0;
      },
    },
    id: {
      type: String,
      required: false,
      validator(value) {
        return value.length > 0;
      },
    },
    prefixClass: {
      type: String,
      required: false,
      validator(value) {
        return value.length > 0;
      },
    },
    closeIcon: {
      type: String,
      required: false,
      validator(value) {
        return value.indexOf('#eei_') !== -1;
      },
    },
  },
};
