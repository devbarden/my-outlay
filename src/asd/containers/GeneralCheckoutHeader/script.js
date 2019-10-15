import { mapState } from 'vuex';
import Stepper from './../../components/Stepper';
import nextStepUrlComputed from '../mixins/nextStepUrlComputed';

export default {
  name: 'GeneralCheckoutHeader',
  components: {
    Stepper,
  },
  mixins: [nextStepUrlComputed],
  computed: {
    ...mapState('stepper', ['steps']),
  },
};
