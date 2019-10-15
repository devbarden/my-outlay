export default {
  name: 'CardLabel',
  props: {
    labelPosition: {
      type: String,
      required: true,
      validator(value) {
        return value.length > 0;
      },
    },
    labelContentWidth: {
      type: Boolean,
      required: false,
    },
    labelColor: {
      type: String,
      required: true,
      default: 'yellow',
      validator(value) {
        return value.length > 0;
      },
    },
    labelTitle: {
      type: String,
      required: true,
      validator(value) {
        return value.length > 0;
      },
    },
  },
  computed: {
    planItemClasses() {
      const prefix = this.labelContentWidth ? '-content-width' : '';
      return `${this.labelContentWidth ? `plan-item__card-label${prefix}` : ''} plan-item__card-label${prefix}--${this.labelPosition} theme--${this.labelColor}`;
    },
  },
};
