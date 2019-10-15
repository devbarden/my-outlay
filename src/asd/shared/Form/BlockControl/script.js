export default {
  name: 'BlockControl',
  data() {
    return {
      state: '',
    };
  },
  props: {
    label: {
      type: String,
      required: false,
      default: 'Default label',
    },
    id: {
      type: String,
      required: true,
      validator(str) {
        return str.length > 0;
      },
    },
    column: {
      type: Boolean,
      required: false,
      default: true,
    },
    customOutline: {
      type: Boolean,
      required: false,
      default: false,
    },
    controlType: {
      type: String,
      required: true,
      validator(type) {
        return ['radio', 'checkbox'].indexOf(type) !== -1;
      },
    },
    controlName: {
      type: String,
      required: false,
    },
  },
  methods: {
    emitState(e) {
      this.$emit('change', e.target.checked);
    },
  },
};
