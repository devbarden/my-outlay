import { mapState, mapGetters } from 'vuex';
import CollapseItem from '../../components/CollapseItem';
import Accordion from '../../components/Accordion';
import Voucher from '../../components/Voucher';
import nextStepUrlComputed from '../mixins/nextStepUrlComputed';

export default {
  name: 'GeneralCheckoutBody',
  components: {
    Accordion,
    CollapseItem,
    Voucher,
  },
  mixins: [nextStepUrlComputed],
  computed: {
    ...mapState('stepper', ['steps']),
    ...mapState('voucher', ['collapseItems']),
    ...mapState('spendCaps', ['caps']),
    ...mapGetters('spendCaps', ['capValue']),
  },
};
