<template>
  <div class="background-white">
    <div class="container container--fullwidth-xs">
      <div class="row">
        <div class="col-md-9 col-xs-12">
          <Stepper :steps="steps" />
        </div>
        <div class="hide-md col-md-3 align-self-center text-right">
          <BaseButton :url="nextStepUrl">
            <template #content>
              Next
            </template>
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel" src="./script.js"></script>
