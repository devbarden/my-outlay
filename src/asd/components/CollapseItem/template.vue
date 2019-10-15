<template>
  <section class="accordion-item">
    <a
      class="h4 accordion-item__header"
      role="button"
      :class="collapseItemClasses"
      :href="href"
      :aria-expanded="!isCollapsed"
      :aria-controls="collapseItemPanelId"
      @click.prevent="clickHandler"
    >
      <span class="accordion-item__header-text">
        <span class="accordion-item__header-heading">{{collapseItemHeader}}</span>
        <span v-if="hasCollapseHeaderLabel" class="accordion-item__header-label">
          <slot name="collapseHeaderLabel"></slot>
        </span>
      </span>
      <svg focusable="false" class="icon-svg accordion-item__icon">
        <use v-show="isCollapsed" xlink:href="#eei_add" />
        <use v-show="!isCollapsed" xlink:href="#eei_minimise" />
      </svg>
    </a>
    <CollapseItemPanel :id="collapseItemPanelId" :isCollapsed="isCollapsed">
      <template #collapsePanelContent>
        <slot name="collapsePanelContent"></slot>
      </template>
    </CollapseItemPanel>
  </section>
</template>

<script type="text/babel" src="./script.js"></script>
