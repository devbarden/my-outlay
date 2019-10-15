
export default {
  name: 'CollapseItemPanel',
  props: {
    id: {
      type: String,
      required: true,
      validator(value) {
        return value.length > 0;
      },
    },
    isCollapsed: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isTransitioning: false,
    };
  },
  computed: {
    showClass() {
      return !this.isCollapsed && !this.isTransitioning ? 'show' : '';
    },
    collapseClass() {
      return !this.isTransitioning ? 'collapse' : '';
    },
  },
  methods: {
    reflow(el) {
      return el.offsetHeight;
    },
    onEnter(el) {
      el.style.height = 0;
      this.reflow(el);
      el.style.height = `${el.scrollHeight}px`;
      this.isTransitioning = true;
    },
    onAfterEnterLeave(el) {
      el.style.height = null;
      this.isTransitioning = false;
    },
    onLeave(el) {
      el.style.height = 'auto';
      el.style.display = 'block';
      el.style.height = `${el.getBoundingClientRect().height}px`;
      this.reflow(el);
      this.isTransitioning = true;
      el.style.height = 0;
    },
  },
};
