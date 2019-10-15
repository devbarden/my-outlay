<template>
  <form>
    <div class="row flex-justify-start align-items-center margin-0 margin-top-3 margin-bottom-xxs-0 margin-bottom-xs-0 margin-bottom-md-3">
      <span
        class="form__group-element col-xs-12 col-md-6 padding-0 margin-right-md-3"
        :class="{'form__group-element--error': isErrorCode}"
      >
        <input
          type="text"
          name="voucherInput"
          class="form__control theme--white"
          placeholder="Enter your code here"
          minlength="3"
          maxlength="60"
          :value="inputCodeValue"
          @input="resetAndUpdate"
        />

        <svg
          v-if="isErrorCode || isSuccessCode"
          focusable="false"
          class="icon-svg form__icon"
          :class="{'form__icon--error': isErrorCode, 'form__icon--valid': isSuccessCode}"
        >
          <use v-if="isErrorCode" xlink:href="#eei_alert_func"></use>
          <use v-if="isSuccessCode" xlink:href="#eei_validate_func"></use>
        </svg>
      </span>

      <BaseButton
        class="btn--expandable width-xs-100-perc width-md-auto"
        :class="{'btn--expanded': isSpinnerActive}"
        :disabled="!inputCodeValue || isSuccessCode"
        @click="checkCode"
      >
        <template #content>
          Apply
          <svg v-if="isSpinnerActive" focusable="false" class="btn__spinner" viewBox="0 0 50 50"><circle class="btn__spinner-path" r="20" cy="25" cx="25"></circle></svg>
        </template>
      </BaseButton>

      <span v-if="isErrorCode" class="ee-form-message-wrapper form__error-text position-static padding-0">Sorry, that voucher’s not valid</span>
    </div>
  </form>
</template>

<script type="text/babel" src="./script.js"></script>
