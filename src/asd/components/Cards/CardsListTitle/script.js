export default {
  name: 'CardsListTitle',
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
  },
};
