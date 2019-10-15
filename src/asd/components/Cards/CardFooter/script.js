import { cardProps } from '../mixins';


export default {
  name: 'CardFooter',
  mixins: [cardProps],
  methods: {
    changeCardState(state) {
      this.$emit('changeCardState', state);
    },
  },
  computed: {
    controlType() {
      return (this.card.multiple) ? 'checkbox' : 'radio';
    },
    customOutline() {
      return this.card.type === 'CHARGEABLE';
    },
  },
};
