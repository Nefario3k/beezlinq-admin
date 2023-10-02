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
              <p class="title__warning">Do you want to upgrade this user?</p>
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
            <!--====================== available plans  ======================-->
            <div class="card__wrapper selectDiv">
              <div
                @click="selectedPlan = items.id"
                v-for="items in plans"
                :key="items.id"
                :class="`user__card ${
                  items.id === selectedPlan ? 'active' : ''
                }`"
              >
                <div>
                  <p class="title__card">{{ items.title }}</p>
                  <p class="label">{{ items.sub }}</p>
                </div>
                <div>
                  <SvgCheckMark />
                </div>
              </div>
            </div>

            <!--========================= duration  =========================-->
            <!-- Select Category  -->
            <div class="input__area">
              <label for="upgrade_user_plan_duration" class="input_label"
                >Duration</label
              >
              <select
                class="form-control select_field"
                id="upgrade_user_plan_duration"
                value="Monthly"
              >
                <option value="Monthly">Monthly</option>
                <option value="User needs some milk">
                  User needs some milk
                </option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>
          </div>
          <!--  button  -->
          <div class="bottom__area">
            <Button
              @click="showUpgradeModal"
              :disabled="!selectedPlan"
              type="button"
              :elevation="1"
              height="5rem"
              width="100%"
              color="var(--primary-color)"
              text="Send Request"
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
      plans: [
        {
          id: 1,
          title: "Basic Plan",
          sub: "Basic features",
        },
        {
          id: 2,
          title: "Beezlinq Pro",
          sub: "Full Package plan and extensive features",
        },
      ],
      selectedPlan: null,
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
    showUpgradeModal() {
      if (!this.selectedPlan) return;
      this.closeDrawer();
      this.$emit("showUpgradeModal");
    },
    showPanel(value) {
      if (this.$refs.main__content) this.$refs.main__content.scrollTop = 0;
      this.showDrawer = true;
      this.errors = {};
      this.selectedPlan = null;
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
