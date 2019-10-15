<template>
  <div>
    <CollapseItem
      v-for="(item, index) in collapseItemsData"
      :key="item.id"
      :collapseItemHeader="item.collapseItemHeader"
      :collapseItemPanelId="item.collapseItemPanelId"
      :isInitialCollapsed="item.isInitialCollapsed"
      :index="index"
      :collapseHandler="collapseHandler"
      :isAccordion="true"
    >
      <template #collapseHeaderLabel>
        <slot :name="`collapseHeaderLabel-${index}`"></slot>
      </template>
      <template #collapsePanelContent>
        <slot :name="`collapsePanelContent-${index}`"></slot>
      </template>
    </CollapseItem>
  </div>
</template>

<script type="text/babel" src="./script.js"></script>
