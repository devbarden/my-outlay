<template>
  <div class="card__wrapper">
    <div class="plan-item plan-item--full-height plan-item--no-border theme--white">
      <CardLabel
        v-if="card.labelTop"
        :labelTitle="card.labelTop"
        :labelPosition="'top'"
        :labelColor="'yellow'"
      />
      <div class="plan-item__main">
        <div class="plan-item__description margin-bottom-1">
          <slot name="right-column"></slot>
          <h3 class="h4 margin-bottom-1 colour-coal">{{ card.title }}</h3>
          <p class="plan-item__description--label margin-bottom-2" v-if="card.labelMiddle">
            <BaseLabel
              :color="'fog'"
              :classes="'padding-left-3 padding-right-3'"
              :title="card.labelMiddle"
            />
          </p>
          <slot name="content"></slot>
          <p><a class="icon-link" href="#"><svg focusable="false" class="icon-link__icon">
            <use xlink:href="#eei_information_func" xmlns:xlink="http://www.w3.org/1999/xlink"/>
          </svg>
          <span class="assistive-text">BT Sport HDR</span> See more</a>
          </p>
          <slot name="deal-bonus"></slot>
        </div>
        <div class="plan-item__footer text-center">
          <slot name="footer"></slot>
        </div>
      </div>
      <CardLabel
        v-if="card.labelBottom"
        :labelTitle="card.labelBottom"
        :labelPosition="'bottom'"
        :labelContentWidth="true"
        :labelColor="'yellow'"
      />
    </div>
  </div>
</template>

<script type="text/babel" src="./script.js"></script>
