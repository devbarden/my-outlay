<template>
  <div class="stepper">
    <nav class="stepper__nav dragscroll">
      <ul class="stepper__list">
        <StepperItem
          v-for="(value, name) in steps"
          :value="value"
          :name="name"
          :key="$uuid()"
          :numberOfSteps="numberOfSteps"
        />
      </ul>
    </nav>
  </div>
</template>

<script type="text/babel" src="./script.js"></script>
