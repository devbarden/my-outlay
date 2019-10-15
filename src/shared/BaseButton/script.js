export default {
  name: 'BaseButton',
  data() {
    return {
      text: 'BUTTON'
    }
  },
  methods: {
    emitState(e) {
      this.$emit('click', e.currentTarget);
    },
  },
}
