<template>
  <button class="btn btn--svg">
    <svg class="icon-svg" focusable="false"><use :xlink:href="icon"/></svg>
    <span class="assistive-text"><slot name="assistiveText"></slot></span>
  </button>
</template>

<script type="text/babel" src="./script.js"></script>
