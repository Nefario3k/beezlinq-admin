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
        title="Features"
        :elevation="elevation"
        @closeDrawer="closeDrawer"
      />

      <div class="main_content_area">
        <form class="panel__content relative">
          <!-- main content  -->
          <div ref="main__content" @scroll="handleScroll" class="main__content">
            <!--========================== header  ==========================-->
            <header class="main__content__header mt-4">
              <h2 class="">Add Feature</h2>
            </header>
            <section class="input__area">
              <v-row>
                <div class="col-12">
                  <label for="feature_name" class="input_label"
                    >Feature Name</label
                  >
                  <input
                    type="text"
                    required
                    class="form-control input_field"
                    id="feature_name"
                    placeholder="Enter feature name"
                  />
                </div>
                <div class="col-12">
                  <label for="feature_description" class="input_label"
                    >Tool tip Description</label
                  >
                  <textarea
                    placeholder="Enter feature description"
                    id="feature_description"
                    required
                    class="form-control input_field"
                  ></textarea>
                </div>
                <div class="col-12">
                  <label for="Feature_Option" class="input_label"
                    >Feature Option/Availability</label
                  >
                  <input
                    type="text"
                    required
                    class="form-control input_field"
                    id="Feature_Option"
                    placeholder="Enter option/availability"
                  />
                </div>
              </v-row>
            </section>
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
              text="Add"
              @click="resolve"
            />
          </div>
        </form>
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
label.input_label {
  color: var(--primary-dark-color);
  font-size: 1.6rem;
}

textarea.input_field {
  height: 8rem;
  min-height: auto !important;
}
</style>
