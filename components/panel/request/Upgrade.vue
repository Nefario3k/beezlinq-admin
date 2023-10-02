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
        title="Upgrade User"
        :elevation="elevation"
        @closeDrawer="closeDrawer"
      />

      <div class="main_content_area">
        <div class="panel__content relative">
          <!-- main content  -->
          <div ref="main__content" @scroll="handleScroll" class="main__content">
            <!--========================== header  ==========================-->
            <header class="main__content__header">
              <h2 class="">Upgrade User</h2>
            </header>
            <!--======================= user warning  =======================-->
            <div class="warning__area">
              <p class="title__warning">
                Do you want to approve the upgrade this user?
              </p>
              <p>
                Upgrading this user means he will no longer be on a free plan.
              </p>
            </div>
            <!--======================== user avatar  ========================-->
            <div class="img_context">
              <div class="img_container">
                <img src="/images/temp/user.jpg" alt="" />
              </div>
              <div>
                <p class="capital">Adam Kosher</p>
                <p class="link">
                  <a href="mailto:adamkosher@gmail.com">adamkosher@gmail.com</a>
                  <span class="tag">Free Plan</span>
                </p>
              </div>
            </div>
            <!--========================= user plan  =========================-->
            <div class="card__wrapper">
              <div class="user__card">
                <div>
                  <p class="title__card">Beezlinq Pro</p>
                  <p class="label">Full Package plan and extensive features</p>
                </div>
                <div>
                  <p>Monthly plan</p>
                </div>
              </div>
            </div>
            <!--======================= user warning  =======================-->
            <div class="warning__area">
              <p class="title__warning mb-3">Admin request from:</p>
              <div class="img_context">
                <div class="img_container">
                  <img src="/images/temp/user2.jpg" alt="" />
                </div>
                <div>
                  <p class="capital">John Doe</p>
                  <p style="font-weight: 400">Plan Administrator</p>
                </div>
              </div>
            </div>
          </div>
          <!-- send button  -->
          <div class="bottom__area">
            <Button
              @click="closeDrawer"
              :outlined="true"
              type="button"
              :elevation="1"
              height="5rem"
              width="100%"
              color="#f00"
              textColor="#f00"
              text="Decline"
            />
            <Button
              type="button"
              :elevation="1"
              height="5rem"
              width="100%"
              color="var(--primary-color)"
              text="Upgrade"
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
  },
};
</script>
