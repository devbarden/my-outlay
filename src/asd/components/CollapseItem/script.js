import CollapseItemPanel from '../CollapseItemPanel';

export default {
  name: 'CollapseItem',
  components: {
    CollapseItemPanel,
  },
  props: {
    collapseItemHeader: {
      type: String,
      required: true,
      validator(value) {
        return value.length > 0;
      },
    },
    collapseItemPanelId: {
      type: String,
      required: true,
      validator(value) {
        return value.length > 0;
      },
    },
    isInitialCollapsed: {
      type: Boolean,
      required: true,
    },
    collapseHandler: {
      type: Function,
      required: false,
    },
    collapseItemClasses: {
      type: [String, Array],
      required: false,
    },
    isAccordion: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      isCollapsedItem: this.isInitialCollapsed,
    };
  },
  computed: {
    href() {
      return `#${this.collapseItemPanelId}`;
    },
    hasCollapseHeaderLabel() {
      return !!this.$slots.collapseHeaderLabel;
    },
    isCollapsed() {
      return this.isAccordion ? this.isInitialCollapsed : this.isCollapsedItem;
    },
  },
  methods: {
    clickHandler() {
      if (this.isAccordion) {
        this.collapseHandler(this.collapseItemPanelId);
      } else {
        this.isCollapsedItem = !this.isCollapsedItem;
      }
    },
  },
};
