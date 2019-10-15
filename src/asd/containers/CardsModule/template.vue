<template>
  <section :class="`margin-bottom-4 margin-bottom-lg-6 js-${moduleType}-section`">
    <CardsListTitle :title="title" :subtitle="subtitle" />
    <CardsList :cardsData="cardsData">
      <template #card-type="{ card }">
        <slot name="card-type" :card="card"></slot>
      </template>
    </CardsList>
  </section>
</template>

<script type="text/babel" src="./script.js"></script>
