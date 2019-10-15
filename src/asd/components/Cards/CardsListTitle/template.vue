<template>
  <div class="row center-xs text-center margin-bottom-1 margin-bottom-md-3">
    <div class="col-xs-12 col-xl-8">
      <h2 class="h3" :if="title">{{ title }}</h2>
      <p :if="subtitle">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script type="text/babel" src="./script.js"></script>
