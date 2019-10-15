import BenefitCard from '../BenefitCard';

export default {
  name: 'CardsList',
  components: {
    BenefitCard,
  },
  props: {
    cardsData: {
      type: Array,
      required: false,
      validator(value) {
        return value.length > 0;
      },
    },
  },
  mounted() {
    EESG.components.plansPresentation(this.$el);
  },
  updated() {
    EESG.components.plansPresentation('.js-cards-presentation');
  },
};
