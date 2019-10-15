<template>
  <div class="row js-cards-presentation">
    <div
      class="col-xl-4 col-lg-6 col-md-12 col-sm-6 col-xs-12 padding-1 padding-xl-2 js-card-col"
      v-for="card in cardsData"
      :key="$uuid()"
    >
      <slot name="card-type" :card="card"></slot>
    </div>
  </div>
</template>

<script type="text/babel" src="./script.js"></script>
