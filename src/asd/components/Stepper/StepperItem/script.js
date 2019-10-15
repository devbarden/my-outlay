export default {
  name: 'StepperItem',
  props: {
    name: {
      type: String,
      required: true,
      validator(value) {
        return value.length > 0;
      },
    },
    value: {
      type: Object,
      required: true,
      validator(step) {
        return Number.isInteger(step.stepNumber) && Array.isArray(step.activeStep);
      },
    },
    numberOfSteps: {
      type: Number,
      required: true,
      validator(value) {
        return value > 0;
      },
    },
  },
  data() {
    return {
      stepName: `${this.name.charAt(0).toUpperCase()}${this.name.slice(1)}`,
      stepNumber: this.value.stepNumber,
      url: `/${this.name.toLowerCase()}`,
    };
  },
  computed: {
    stepStateClass() {
      return this.stepState ? `stepper__item--${this.stepState}` : '';
    },
    stepState() {
      const path = this.$route.path.replace('/', '');
      let state = '';

      if (path === this.name.toLowerCase()) {
        state = 'active';
      }

      if (this.value.activeStep.includes(path)) {
        state = 'visited';
      }

      return state;
    },
  },
};
