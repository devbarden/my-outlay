<template>
  <div class="plan-item__card-label" :class="planItemClasses">
    <strong class="colour-coal text-truncate text-truncate--tooltip">{{ labelTitle }}</strong>
    <Tooltip :text="labelTitle" />
  </div>
</template>

<script type="text/babel" src="./script.js"></script>
