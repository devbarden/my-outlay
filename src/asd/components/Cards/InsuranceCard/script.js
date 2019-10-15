import CardFooter from '../CardFooter';
import { cardProps, cardData, cardMethods } from '../mixins';


export default {
  name: 'InsuranceCard',
  components: {
    CardFooter,
  },
  mixins: [cardProps, cardData, cardMethods],
};
