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
        title="Message Preview"
        :elevation="elevation"
        @closeDrawer="closeDrawer"
      />

      <div class="main_content_area">
        <div class="panel__content relative">
          <!-- main content  -->
          <div ref="main__content" @scroll="handleScroll" class="main__content">
            <!--========================== header  ==========================-->
            <header class="main__content__header mt-4">
              <span>Subject</span>
              <h2 class="">Application Error and Update</h2>
            </header>
            <div class="message_body">
              <span>Message Body</span>
              <p>
                Planned XATM System maintenance. Access will be offline on
                August 12 from 12PM WAT until 6PM. Please bear with us and plan
                accordingly or contact your manager for more information.
              </p>
              <div class="foot__note d-flex mt-6">
                <div class="">
                  <span>Recipient</span>
                  <p class="d-flex align-center">
                    <SvgCheckMark style="width: 2rem" />
                    <span class="p-elem pl-2">To all users</span>
                  </p>
                </div>
                <div class="ml-14">
                  <span>Date</span>
                  <p>09/08/2023</p>
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
              text="Edit"
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
<style lang="scss">
.main__content {
  span:not(.p-elem) {
    color: #97a4c0;
    font-size: 1.2rem;
  }

  p {
    color: #00317f;
    font-size: 14px;
    font-weight: 400;
  }

  .foot__note {
  }
}
</style>
