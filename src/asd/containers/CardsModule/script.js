import CardsList from '../../components/Cards/CardsList';
import CardsListTitle from '../../components/Cards/CardsListTitle';

export default {
  name: 'CardsModule',
  components: {
    CardsList,
    CardsListTitle,
  },
  props: {
    title: {
      type: String,
      required: false,
      validator(value) {
        return value.length > 0;
      },
    },
    subtitle: {
      type: String,
      required: false,
      validator(value) {
        return value.length > 0;
      },
    },
    cardsData: {
      type: Array,
      required: true,
      validator(value) {
        return value.length > 0;
      },
    },
    moduleType: {
      type: String,
      required: false,
      validator(value) {
        return value === 'free' || value === 'chargeable';
      },
    },
  },
};
