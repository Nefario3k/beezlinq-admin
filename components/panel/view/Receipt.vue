<template>
  <div>
    <v-navigation-drawer
      style="z-index: 100"
      overlay-color="var(--scrim)"
      :overlay-opacity="1"
      v-model="showDrawer"
      :right="true"
      :width="width"
      temporary
      :permanent="permanent"
      fixed
      class="panel__container"
    >
      <PanelClose
        title="Payment"
        :elevation="elevation"
        @closeDrawer="closeDrawer"
      />

      <div class="main_content_area">
        <div class="panel__content relative">
          <!-- main content  -->
          <div ref="main__content" @scroll="handleScroll" class="main__content">
            <!--========================== header  ==========================-->
            <header class="main__content__header">
              <h2 class="">Payment Details</h2>
            </header>
            <!--====================== Payment Details  ======================-->
            <div class="card__wrapper payment__card">
              <div class="user__card">
                <div class="img_context">
                  <div class="img_container">
                    <img src="/images/temp/user.jpg" alt="" />
                  </div>
                  <div>
                    <p class="capital">Adam Kosher</p>
                    <p class="link">
                      <a href="mailto:adamkosher@gmail.com"
                        >adamkosher@gmail.com</a
                      >
                    </p>
                  </div>
                </div>
                <div class="flex__table">
                  <!-- invoice plan  -->
                  <div>
                    <p>invoice plan</p>
                    <p>{{ invoice.plan }}</p>
                  </div>
                  <!-- Duration -->
                  <div>
                    <p>Duration</p>
                    <p>{{ invoice.duration }}</p>
                  </div>
                  <!-- Status -->
                  <div>
                    <p>Status</p>
                    <p
                      class="tag"
                      :style="{
                        color:
                          invoice.status === 'Successful'
                            ? 'var(--green3)'
                            : invoice.status === 'failed'
                            ? 'var(--chip-text2)'
                            : 'var(--primary-dark-color)',
                      }"
                    >
                      <span>{{ invoice.status }}</span>
                    </p>
                  </div>
                  <!-- Amount -->
                  <div>
                    <p>Amount</p>
                    <p>{{ $formatNairaCurrency(invoice.amount) }}</p>
                  </div>
                  <!-- Payment Type -->
                  <div>
                    <p>Payment Type</p>
                    <p>{{ invoice.type }}</p>
                  </div>
                  <!-- Payment Gateway -->
                  <div>
                    <p>Payment Gateway</p>
                    <p>{{ invoice.gateway }}</p>
                  </div>
                  <!-- Payment Method -->
                  <div>
                    <p>Payment Method</p>
                    <p>{{ invoice.method }}</p>
                  </div>
                  <!-- Transaction ID -->
                  <div>
                    <p>Transaction ID</p>
                    <p>{{ invoice.invoice }}</p>
                  </div>
                  <!-- Date  -->
                  <div>
                    <p>Date</p>
                    <p>{{ $formatDateString(new Date()) }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- button  -->
          <div class="bottom__area">
            <Button
              :isSpinner="loading"
              spinnerColor="var(--text-dark)"
              type="button"
              :elevation="1"
              height="5rem"
              width="100%"
              color="var(--primary-color)"
              :text="invoice.resolve ? 'Resolve Issue' : 'Download Receipt'"
              @click="resolve"
            />
          </div>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import showStatus from "~/mixins/showStatus";
export default {
  mixins: [showStatus],
  data() {
    return {
      showDrawer: false,
      elevation: 0,
      width: 496,
      errors: {},
      invoice: {},
      loading: false,
    };
  },
  mounted() {
    var nx = window.innerWidth;
    if (nx <= 540) {
      this.width = "100vw";
    }
    window.addEventListener("resize", function (event) {
      var w = window.innerWidth;
      nx = w;
    });
    $(window).resize(() => {
      if (nx <= 540) {
        this.width = "100vw";
      } else {
        this.width = 496;
      }
    });
  },
  methods: {
    closeDrawer() {
      if (this.permanent) return;
      this.showDrawer = false;
    },
    showPanel(value) {
      if (this.$refs.main__content) this.$refs.main__content.scrollTop = 0;
      this.showDrawer = true;
      this.errors = {};
      if (value) {
        this.invoice = value;
      }
    },
    handleScroll() {
      const main__content = this.$refs.main__content;
      const heightScrolled = main__content.scrollTop;
      // const initialHeight = main__content.scrollHeight;
      if (heightScrolled > 0) {
        this.elevation = 1;
      } else {
        this.elevation = 0;
      }
    },
    resolve() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2500);
    },
  },
};
</script>
