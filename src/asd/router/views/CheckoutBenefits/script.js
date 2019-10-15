import BenefitCard from '../../../components/Cards/BenefitCard';
import CardsModule from '../../../containers/CardsModule';

import data from '../../../core/mocked-data/benefitsExtras.json';

export default {
  data() {
    return {
      cardsData: data.data,
      benefitsTitle: ' Choose your Swappable Benefits included with your plan',
      benefitsSubtitle:
      'You can select one Swappable Benefits now or add and change them later',
      chargeableTitle: 'Choose your add-ons',
    };
  },
  components: { BenefitCard, CardsModule },
};
