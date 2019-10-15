const cardData = {
  data() {
    return {
      cardState: '',
    };
  },
};

const cardProps = {
  props: {
    card: {
      type: Object,
      required: true,
      validator(obj) {
        return obj.id && obj.title && obj.title.length;
      },
    },
  },
};

const cardMethods = {
  methods: {
    setCardState(state) {
      this.cardState = state;
    },
  },
};

export { cardData, cardProps, cardMethods };
