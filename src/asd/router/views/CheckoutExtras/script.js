import InsuranceCard from '../../../components/Cards/InsuranceCard';
import CardsModule from '../../../containers/CardsModule';

import data from '../../../core/mocked-data/benefitsExtras.json';

export default {
  data() {
    return {
      cardsData: data.data,
      insuranceTitle: 'Add insurance',
    };
  },
  components: { InsuranceCard, CardsModule },
};
