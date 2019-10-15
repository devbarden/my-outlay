<template>
  <div
    class="deal-bonus theme--fog"
    :class="{'deal-bonus--fullwidth': isFullWidth}"
  >
    <figure class="deal-bonus__figure">
      <img
        :src="dealBonusImg"
        alt=""
        class="deal-bonus__image"
      >
    </figure>
    <div class="deal-bonus__content">
      <small>{{dealBonusText}}</small>
    </div>
  </div>
</template>

<script type="text/babel" src="./script.js"></script>
