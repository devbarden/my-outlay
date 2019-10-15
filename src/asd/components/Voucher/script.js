import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Voucher',
  computed: {
    ...mapGetters('voucher', [
      'inputCodeValue',
      'isSpinnerActive',
      'isErrorCode',
      'isSuccessCode',
    ]),
  },
  methods: {
    ...mapActions('voucher', ['checkCode', 'resetAndUpdate']),
  },
};
