import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  computed: {
    ...mapState('test', ['header']),
    ...mapGetters('test', ['GET_HEADER']),
  },
  methods: {
    ...mapMutations('test', ['CHANGE_HEADER']),
    ...mapActions('test', ['HEADER_EVENT']),
  },
}
