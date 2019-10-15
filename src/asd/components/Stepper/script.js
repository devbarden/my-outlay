import StepperItem from './StepperItem';

export default {
  name: 'Stepper',
  components: {
    StepperItem,
  },
  props: {
    steps: {
      type: Object,
      required: true,
      validator(obj) {
        return Object.values(obj).every(step =>
          Number.isInteger(step.stepNumber) && Array.isArray(step.activeStep));
      },
    },
  },
  computed: {
    numberOfSteps() {
      return Object.keys(this.steps).length;
    },
  },
};
