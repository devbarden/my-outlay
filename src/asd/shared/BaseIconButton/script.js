export default {
  name: 'BaseIconButton',
  props: {
    icon: {
      type: String,
      default: '#eei_cross',
      required: false,
      validator(value) {
        return value.length > 0;
      },
    },
  },
};
