<template>
  <transition
    enter-active-class="collapsing"
    leave-active-class="collapsing"
    v-on:enter="this.onEnter"
    v-on:afterEnter="this.onAfterEnterLeave"
    v-on:leave="this.onLeave"
    v-on:afterLeave="this.onAfterEnterLeave"
  >
    <article
      class="accordion-item__panel"
      :id="id"
      :class="[showClass, collapseClass]"
      v-show="!isCollapsed"
    >
      <div class="accordion-item__body">
        <slot name="collapsePanelContent"></slot>
      </div>
    </article>
  </transition>
</template>

<script type="text/babel" src="./script.js"></script>
