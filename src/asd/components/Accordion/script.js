import CollapseItem from '../CollapseItem';

export default {
  name: 'Accordion',
  components: {
    CollapseItem,
  },
  props: {
    collapseItems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      collapseItemsData: this.collapseItems,
    };
  },
  methods: {
    collapseHandler(currentItemId) {
      this.collapseItemsData.forEach((item) => {
        if (item.collapseItemPanelId === currentItemId) {
          item.isInitialCollapsed = !item.isInitialCollapsed;
        } else {
          item.isInitialCollapsed = true;
        }
      });
    },
  },
};
