export default {
  name: 'BaseButton',
  props: {
    url: {
      type: String,
      required: false,
      validator(value) {
        return value.length > 0;
      },
    },
  },
  methods: {
    emitState(e) {
      this.$emit('click', e.currentTarget);
    },
  },
};
