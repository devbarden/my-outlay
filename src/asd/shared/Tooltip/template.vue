<template>
  <a
    href="#"
    class="js-tooltip-cta icon-link"
    :data-tooltip-text="text"
    :data-tooltip-id="id"
    :data-tooltip-prefix-class="prefixClass"
    :data-tooltip-close-icon="closeIcon"
    aria-label="helpful tooltip"
  >
    <svg focusable="false" class="icon-link__icon form__label-icon">
      <use xlink:href="#eei_question_func"/>
    </svg>
  </a>
</template>

<script type="text/babel" src="./script.js"></script>
