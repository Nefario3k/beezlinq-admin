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
        title="Password"
        :elevation="elevation"
        @closeDrawer="closeDrawer"
      />

      <div class="main_content_area">
        <form @submit.prevent="editUser" class="panel__content relative">
          <!-- main content  -->
          <div ref="main__content" @scroll="handleScroll" class="main__content">
            <!--========================== header  ==========================-->
            <header class="main__content__header">
              <h2 class="">Change Password</h2>
            </header>
            <!--========================== content  ==========================-->
            <section class="input__area">
              <div class="row">
                <!-- New Password -->
                <div class="col-12">
                  <label class="input_label">New Password</label>
                  <div class="relative password_field">
                    <input
                      class="form-control input_field"
                      :type="passwordType.main"
                      autocomplete="off"
                      placeholder="**********"
                      :disabled="loading"
                    />
                    <div
                      style="transform: translateY(-50%)"
                      title="Toggle password view"
                      @click="togglePassword('main')"
                      class="absolute password_toggle"
                    >
                      <SvgPasswordOpen
                        v-if="passwordType.main === 'password'"
                      />
                      <SvgPasswordClose v-else />
                    </div>
                  </div>
                </div>
                <!-- Confirm New Password -->
                <div class="col-12">
                  <label class="input_label">Confirm New Password</label>
                  <div class="relative password_field">
                    <input
                      class="form-control input_field"
                      :type="passwordType.confirm"
                      autocomplete="off"
                      placeholder="**********"
                      :disabled="loading"
                    />
                    <div
                      style="transform: translateY(-50%)"
                      title="Toggle password view"
                      @click="togglePassword('confirm')"
                      class="absolute password_toggle"
                    >
                      <SvgPasswordOpen
                        v-if="passwordType.confirm === 'password'"
                      />
                      <SvgPasswordClose v-else />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <!-- send button  -->
          <div class="bottom__area">
            <Button
              type="submit"
              :elevation="1"
              :disabled="loading"
              :isSpinner="loading"
              height="5rem"
              width="100%"
              color="var(--primary-color)"
              text="Change"
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
      passwordType: "password",
      elevation: 0,
      width: 496,
      userToEdit: {},
      backUpUser: "",
      admin_id: "",
      errors: {},
      passwordType: {
        main: "password",
        confirm: "password",
      },
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
    showPanel() {
      if (this.$refs.main__content) this.$refs.main__content.scrollTop = 0;
      this.showDrawer = true;
      this.errors = {};
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
    togglePassword(type) {
      if (this.passwordType[type] == "password") {
        this.passwordType[type] = "text";
      } else {
        this.passwordType[type] = "password";
      }
    },
  },
};
</script>
