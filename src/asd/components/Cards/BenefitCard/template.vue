<template>
  <Card :card="card" :cardState="cardState">
    <template #right-column>
      <img
        class="plan-item__description-image loading"
        :src="card.imgUrl"
        alt=""
      >
    </template>
    <template #content>
      <BaseList :items="card.features" :icon="'#eei_tick'"/>
    </template>
    <template #footer>
      <CardFooter :card="card" @changeCardState="setCardState"/>
    </template>
  </Card>
</template>

<script type="text/babel" src="./script.js"></script>
