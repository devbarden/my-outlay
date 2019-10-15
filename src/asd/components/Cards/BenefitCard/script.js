import CardFooter from '../CardFooter';
import { cardProps, cardData, cardMethods } from '../mixins';


export default {
  name: 'BenefitCard',
  components: {
    CardFooter,
  },
  mixins: [cardProps, cardData, cardMethods],
};
