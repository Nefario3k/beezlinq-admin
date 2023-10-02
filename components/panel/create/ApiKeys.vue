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
        title="API Keys"
        :elevation="elevation"
        @closeDrawer="closeDrawer"
      />

      <div class="main_content_area">
        <form class="panel__content relative">
          <!-- main content  -->
          <div ref="main__content" @scroll="handleScroll" class="main__content">
            <!--========================== header  ==========================-->
            <header class="main__content__header mt-4">
              <h2 class="">Manage Keys</h2>
            </header>
            <section class="input__area">
              <v-row>
                <!-- API Name/Source -->
                <div class="col-12">
                  <label for="api_source" class="input_label"
                    >API Name/Source</label
                  >
                  <input
                    type="text"
                    required
                    class="form-control input_field"
                    id="api_source"
                    placeholder="API Name/Source"
                  />
                </div>
                <!-- Description -->
                <div class="col-12">
                  <label for="api_description" class="input_label"
                    >Description</label
                  >
                  <textarea
                    placeholder="Description"
                    id="api_description"
                    required
                    class="form-control input_field"
                  ></textarea>
                </div>
                <!-- API Keys -->
                <div class="col-12">
                  <label class="input_label">API Keys</label>
                  <div class="d-flex flex-column gap-5 mb-3">
                    <div v-for="n in count" :key="n">
                      <input
                        type="text"
                        required
                        class="form-control input_field"
                        placeholder="Enter Key Name"
                      />
                      <div
                        :class="`mt-2 relative ${
                          n > 1 ? 'password_field chip' : ''
                        }`"
                      >
                        <input
                          type="text"
                          required
                          class="form-control input_field"
                          placeholder="Paste key here"
                        />
                        <div
                          style="top: 45%"
                          v-if="n > 1"
                          class="absolute password_toggle"
                        >
                          <v-chip
                            @click="count--"
                            small
                            text-color="var(--danger-color)"
                            color="var(--chip-bg5)"
                            :ripple="true"
                            class="mt-0 plan__chips"
                          >
                            Delete
                          </v-chip>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text-right">
                    <Button
                      @click="count++"
                      :elevation="0"
                      class="p-0 noBefore"
                      :ripple="false"
                      textSize="1.4rem"
                      textColor="var(--primary-color)"
                      text="Add More"
                      :svg="true"
                      svgLeft="SvgPlus"
                      width="max-content"
                      height="4rem"
                      color="transparent"
                    />
                  </div>
                </div>
                <!-- status -->
                <div class="col-12">
                  <label for="api_status" class="mb-4 input_label"
                    >Status</label
                  >
                  <div class="d-flex align-center gap-3">
                    <label for="api_status" class="mb-0 small input_label"
                      >Inactive</label
                    >
                    <v-switch
                      id="api_status"
                      class="m-0 ms-2"
                      inset
                      :ripple="false"
                      hide-details
                      color="var(--primary-color)"
                    ></v-switch>
                    <label for="api_status" class="mb-0 small input_label"
                      >Active</label
                    >
                  </div>
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
              text="Create"
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
      count: 1,
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
