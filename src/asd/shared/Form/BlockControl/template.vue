<template>
  <div class="block-radio-button display-inline-block">
    <input
      class="block-radio-button__input assistive-text"
      :type="controlType"
      :name="controlName"
      :id="id"
      :value="id"
      v-model="state"
      @change="emitState"
    >
    <label
      class="block-radio-button__label"
      :class="{
        'block-radio-button__label--row': column,
        'block-radio-button__label--no-outline' : customOutline }"
      :for="id"
    >
      <slot name="label-content">
        <strong>{{label}}</strong>
        <svg focusable="false" class="icon-svg icon-svg--large">
          <use xlink:href="#eei_tick"/>
        </svg>
      </slot>
    </label>
    <slot name="addition"></slot>
  </div>
</template>

<script type="text/babel" src="./script.js"></script>
