<template>
  <div>
    <h1 class="assistive-text">Extras | Checkout | EE</h1>
    <CardsModule
      :title="insuranceTitle"
      :cardsData="cardsData.insuranceCards"
    >
      <template #card-type="{ card }">
        <InsuranceCard :card="card" />
      </template>
    </CardsModule>
  </div>
</template>

<script type="text/babel" src="./script.js"></script>
