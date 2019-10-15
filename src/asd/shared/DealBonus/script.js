export default {
  name: 'DealBonus',
  props: {
    dealBonusImg: {
      type: String,
      required: false,
      validator(value) {
        return value.length > 0;
      },
    },
    dealBonusText: {
      type: String,
      required: true,
      validator(value) {
        return value.length > 0;
      },
    },
    isFullWidth: {
      type: Boolean,
      required: false,
    },
  },
};
