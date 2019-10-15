import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'StoreExampleComponent',
  computed: {
    ...mapState('array', ['arr']),
    ...mapGetters('array', ['arrLength']),
  },
  methods: {
    ...mapMutations('array', ['ADD_ITEM']),
    ...mapActions('array', ['LOAD_DATA']),
    handleClick() {
      this.ADD_ITEM(2);
      this.LOAD_DATA();
    },
  },
};
