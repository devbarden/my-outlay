<template>
  <a :href="url" class="icon-link">
    <svg focusable="false" class="icon-link__icon"><use :xlink:href="icon"/></svg>
    <slot name="content"></slot>
  </a>
</template>

<script type="text/babel" src="./script.js"></script>
