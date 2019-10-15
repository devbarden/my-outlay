import CardLabel from '../../components/Cards/CardLabel';

export default {
  name: 'Card',
  components: {
    CardLabel,
  },
  props: {
    card: {
      type: Object,
      required: true,
      validator(obj) {
        return obj.id && obj.title && obj.title.length;
      },
    },
    cardState: {
      type: Boolean,
      required: true,
    },
  },
};
