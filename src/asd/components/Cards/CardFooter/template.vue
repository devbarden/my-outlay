<template>
  <block-control
    :id="card.id"
    :column="true"
    :controlType="controlType"
    :controlName="card.name"
    :customOutline="customOutline"
    @change="changeCardState"
  >
    <template #label-content>
      <span class="assistive-text">{{card.title}}</span>

      <template v-if="card.type === 'CHARGEABLE'">
        <div class="block-radio-button__label--row block-radio-button__label--checked-flex">
          <span><strong>Remove</strong></span>
          <svg focusable="false" class="icon-svg">
            <use xlink:href="#eei_tick"/>
          </svg>
        </div>
        <div class="block-radio-button__label--default position-relative">
          <span class="plan-item__footer-btn btn display-inline-block">
            {{card.freePeriod ? card.freePeriod: `${card.price.formatedValue} a month` }}
          </span>
          <span class="plan-item__footer-text text-truncate" v-if="card.freePeriod">
            <strong>{{card.price.formatedValue}}</strong>
            a month after
          </span>
        </div>
      </template>

      <template v-else>
        <span class="block-radio-button__label--default"><strong>Select</strong></span>
        <span class="block-radio-button__label--checked">
          <strong>
            {{card.productGroupType === 'INSURANCE' ? 'Selected' : 'Remove'}}
          </strong>
        </span>
        <svg focusable="false" class="icon-svg">
          <use xlink:href="#eei_tick"/>
        </svg>
      </template>

    </template>
    <template #addition>
      <span class="plan-item__back"></span>
    </template>
  </block-control>
</template>

<script type="text/babel" src="./script.js"></script>
