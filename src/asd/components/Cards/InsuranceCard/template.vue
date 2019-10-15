<template>
  <Card :card="card" :cardState="cardState">
    <template #right-column>
      <div class="plan-item__featured-text padding-top-2" v-if="parseInt(card.price.value)">
        <small
          v-if="card.wasPrice"
          class="plan-item__data-label plan-item__price-detail colour-coal"
        >
          Was
          <span class="text-line-through">{{ card.wasPrice }}</span>
        </small>
        <p class="h4 plan-item__data-now plan-item__price-text colour-coal">
          <strong><span class="currency-symbol"></span>{{ card.price.formatedValue }}</strong>
        </p>
        <small class="plan-item__data-label plan-item__price-detail colour-coal">a month</small>
      </div>
    </template>
    <template #content>
      <p><small>{{ card.description }}</small></p>
    </template>
    <template #deal-bonus v-if="card.dealBonus">
      <DealBonus
        :dealBonusImg="card.dealBonus.img"
        :dealBonusText="card.dealBonus.text"
        :isFullWidth="true"
      />
    </template>
    <template #footer>
      <CardFooter :card="card" @changeCardState="setCardState"/>
    </template>
  </Card>
</template>

<script type="text/babel" src="./script.js"></script>
