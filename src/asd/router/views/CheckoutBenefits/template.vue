<template>
  <div>
    <h1 class="assistive-text">Benefits | Checkout | EE</h1>
    <CardsModule
      :title="benefitsTitle"
      :subtitle="benefitsSubtitle"
      :cardsData="cardsData.benefitsCards"
      moduleType="free"
    >
      <template #card-type="{ card }">
        <BenefitCard :card="card" />
      </template>
    </CardsModule>
    <CardsModule
      :title="chargeableTitle"
      :cardsData="cardsData.chargeableCards"
      moduleType="chargeable"
    >
      <template #card-type="{ card }">
        <BenefitCard :card="card" />
      </template>
    </CardsModule>
  </div>
</template>

<script type="text/babel" src="./script.js"></script>
