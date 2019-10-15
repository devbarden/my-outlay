const nextStepUrlComputed = {
  computed: {
    nextStepUrl() {
      const path = this.$route.path.replace('/', '');
      const nextStepNumber = this.steps[path].stepNumber + 1;
      const url = `/${Object.entries(this.steps).find(([, step]) => step.stepNumber === nextStepNumber)[0]}`;

      return url;
    },
  },
};

export default nextStepUrlComputed;
