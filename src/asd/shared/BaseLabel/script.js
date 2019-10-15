export default {
  name: 'BaseLabel',
  props: {
    color: {
      type: String,
      required: false,
      default: 'yellow',
      validator(value) {
        return value.length > 0;
      },
    },
    classes: {
      type: String,
      required: false,
      validator(value) {
        return value.length > 0;
      },
    },
    title: {
      type: String,
      required: true,
      validator(value) {
        return value.length > 0;
      },
    },
  },
};
