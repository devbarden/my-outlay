<template>
  <li class="stepper__item" :class="stepStateClass">
    <router-link
      v-if="stepState === 'visited'"
      :to="url"
      class="stepper__step"
    >
      {{stepName}}
      <span class="assistive-text">Completed step {{stepNumber}} of {{numberOfSteps}}</span>
    </router-link>
    <template v-else>
        <span class="stepper__step">{{stepName}}</span>
        <span class="assistive-text">Completed step {{stepNumber}} of {{numberOfSteps}}</span>
    </template>
  </li>
</template>

<script type="text/babel" src="./script.js"></script>
