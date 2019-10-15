<template>
  <main id="main" class="general-checkout-page background-fog">
    <div class="container container--fullwidth-xs">
      <div class="row">
        <div
          class="general-checkout-page__content col-xl-9 col-lg-8 col-md-6 col-xs-12 background-fog padding-top-4 padding-bottom-4 padding-right-xl-2 padding-left-xl-2"
        >
          <div class="general-checkout-page__inner">
            <router-view />

            <div class="text-center margin-bottom-4 margin-bottom-lg-3">
              <h2>You can manage your choosen extras or add new ones from full range in My EE</h2>
            </div>
            <Accordion :collapseItems="collapseItems">
              <template #collapseHeaderLabel-0>
                <svg class="icon-svg fill-coal">
                  <use xlink:href="#eei_information_func" />
                </svg>
                <strong v-if="!caps.isAdded">{{caps.defaultValue}}</strong>
                <strong v-if="caps.isAdded">{{capValue}}</strong>
              </template>
              <template #collapsePanelContent-0>
                <div>
                  <strong>Pay monthly and small business</strong>
                  <p>New and existing customers on EE pay monthly plans and existing small business
                  customers can get WiFi Calling if you have a compatible device. It's not available
                  on pay as you go right now.
                  </p>
                </div>
              </template>
              <template #collapsePanelContent-1>
                <div>
                  <strong>Pay monthly and small business</strong>
                  <p>
                    New and existing customers on EE pay monthly plans and existing small business
                    customers can get WiFi Calling
                  </p>
                  <a href="#">if you have</a> a compatible device. It's not available on pay as you
                  go right now.
                </div>
                <p>
                  <strong>Corporate</strong>
                  WiFi calling is available to all corporate customers on a 4GEE plan with a
                  compatible device.
                </p>
                <p>WiFi Calling will not work if you are a user of Voice VPN, Freedom or Mobile
                Voice Recording and it is not available on T-Mobile plans. Corporate 3G users
                can easily upgrade to 4G to use WiFi calling - contact your account manager to
                find out more.</p>
              </template>
              <template #collapsePanelContent-2>
                <Voucher />
              </template>
            </Accordion>
            <div class="text-right margin-bottom-xs-3 padding-top-4">
              <BaseButton :url="nextStepUrl">
                <template #content>Next</template>
              </BaseButton>
            </div>
          </div>
        </div>

        <div class="col col-xl-3 col-lg-4 col-md-6 padding-top-4 padding-bottom-4 sticky-cart-cell">
          <h1>sticky-basket</h1>
        </div>
      </div>
    </div>
  </main>
</template>

<script type="text/babel" src="./script.js"></script>
