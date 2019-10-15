export default {
  name: 'BaseIconLink',
  props: {
    url: {
      type: String,
      required: true,
      validator(value) {
        return value.length > 0;
      },
    },
    icon: {
      type: String,
      required: true,
      validator(value) {
        return value.indexOf('#eei_') !== -1;
      },
    },
  },
};
