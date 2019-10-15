<template>
  <router-link
    v-if="url"
    :to="url"
    class="btn"
  >
    <slot name="content"></slot>
  </router-link>

  <button
    v-else
    class="btn"
    @click.prevent="emitState"
  >
    <slot name="content"></slot>
  </button>
</template>

<script type="text/babel" src="./script.js"></script>
