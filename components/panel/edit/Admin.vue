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
        title="Administrators"
        :elevation="elevation"
        @closeDrawer="closeDrawer"
      />

      <div class="main_content_area">
        <form @submit.prevent="editAdmin" class="panel__content relative">
          <!-- main content  -->
          <div ref="main__content" @scroll="handleScroll" class="main__content">
            <!--========================== header  ==========================-->
            <header class="main__content__header">
              <h2 class="">Edit Admin</h2>
            </header>
            <!--========================== content  ==========================-->
            <section class="input__area">
              <div class="row">
                <!-- fname  -->
                <div class="col-12 pb-1">
                  <label for="edit_admin_fName" class="input_label"
                    >First Name</label
                  >
                  <input
                    type="text"
                    :disabled="permanent"
                    required
                    class="form-control input_field"
                    id="edit_admin_fName"
                    placeholder="First name"
                    v-model="panelContent.first_name"
                  />
                </div>
                <!-- lname  -->
                <div class="col-12 pb-1">
                  <label for="edit_admin_lName" class="input_label"
                    >Last Name</label
                  >
                  <input
                    type="text"
                    :disabled="permanent"
                    required
                    class="form-control input_field"
                    id="edit_admin_lName"
                    placeholder="Last name"
                    v-model="panelContent.last_name"
                  />
                </div>
                <!-- email_address  -->
                <div class="col-12 pb-1">
                  <label for="edit_admin_email_address" class="input_label"
                    >Email Address</label
                  >
                  <input
                    type="email"
                    class="form-control input_field"
                    id="edit_admin_email_address"
                    placeholder="Enter text here"
                    v-model="panelContent.email_address"
                  />
                </div>
                <!-- Role/Access -->
                <div class="col-12">
                  <label class="input_label" for="edit_admin_Role"
                    >Role/Access</label
                  >
                  <select
                    class="form-control select_field"
                    id="edit_admin_Role"
                    v-model="panelContent.role"
                  >
                    <option value="Template Manager">Template Manager</option>
                    <option value="Template Manager">Template Manager</option>
                    <option value="Template Manager">Template Manager</option>
                  </select>
                </div>
                <!-- password  -->
                <div class="col-12 pb-1">
                  <label class="input_label" for="edit_admin_password"
                    >Password</label
                  >
                  <div class="relative password_field">
                    <input
                      :class="`form-control input_field ${
                        panelContent.password ? 'hasValue' : ''
                      }`"
                      :type="passwordType"
                      id="edit_admin_password"
                      autocomplete="off"
                      placeholder="Enter Password"
                      :disabled="loading"
                      v-model="panelContent.password"
                    />
                    <div
                      style="transform: translateY(-50%)"
                      title="Toggle password view"
                      @click="togglePassword"
                      class="absolute password_toggle"
                    >
                      <SvgPasswordOpen v-if="passwordType === 'password'" />
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
              :disabled="loading || disableBtn().disable"
              :isSpinner="loading"
              height="5rem"
              width="100%"
              color="var(--primary-color)"
              text="Save"
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
      panelContent: {},
      backUpContent: {},
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
      this.allow_close_all = false;
      this.errors = {};
      if (value) {
        this.panelContent = {
          first_name: "Adam",
          last_name: "Kosher",
          email_address: "adam@bexit.com.ng",
          password: "",
          role: "Template Manager",
        };
        this.backUpContent = structuredClone(this.panelContent);
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
    disableBtn() {
      var disable = true;
      // seperated for a reason
      Object.entries(this.panelContent).forEach(([key, value]) => {
        if (this.backUpContent[key] != value) {
          disable = false;
        }
      });
      Object.entries(this.panelContent).forEach(([key, value]) => {
        if (
          this.backUpContent[key] != value &&
          value == "" &&
          key !== "password"
        ) {
          disable = true;
        }
      });
      return {
        disable: disable,
      };
    },
    async editAdmin() {
      if (this.disableBtn().disable) return;
      this.$emit("success");
      this.permanent = true;
      return;
      this.errors = {};
      try {
        // set headers
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        // set check
        var form = false;
        var reloadRole = false;
        // set form Data
        const data = new FormData();
        Object.entries(this.panelContent).forEach(([key, value]) => {
          // verify change in data fields
          if (value != "") {
            if (value != this.backUpContent[key]) {
              data.append(key, value);
              if (key === "role_id") reloadRole = true;
              form = true;
            }
          }
        });

        if (
          this.passwordReset.new_password &&
          !this.$setPermission("admin.edit_password")
        ) {
          this.errors = {
            new_password: [
              "You dont have permission to edit an admin passwords",
            ],
          };
          return;
        }

        if (form && this.passwordReset.new_password) {
          data.append("_method", "patch");
          data.append("admin_id", this.userId);
          this.permanent = true;
          await this.$axios.post("admin/edit", data, config);
          await this.$axios.post("admin/edit_password", this.passwordReset);

          this.$emit(
            "adminEdited",
            "Admin details & password updated successfully"
          );
          this.showDrawer = false;
          this.permanent = false;
        } else if (form) {
          this.permanent = true;
          data.append("_method", "PATCH");
          data.append("admin_id", this.admin_id);
          await this.$axios.post("admin/edit", data, config).then((res) => {
            this.permanent = false;
            this.$emit("adminEdited", res.data.response_message);
            this.showDrawer = false;
          });
        } else if (this.passwordReset.new_password) {
          this.permanent = true;
          await this.$axios
            .post("admin/edit_password", this.passwordReset)
            .then((res) => {
              this.$emit("adminEdited", res.data.response_message);
              this.showDrawer = false;
              this.permanent = false;
            });
        }
        if (reloadRole) this.$store.dispatch("roleAll");
      } catch (err) {
        if (err.response?.data?.errors) {
          this.errors = err.response.data.errors;
          this.showError(err.response?.data?.message);
        } else {
          this.showError(err.response?.data?.error?.message);
        }
      }
    },
    togglePassword() {
      if (this.passwordType == "password") {
        this.passwordType = "text";
      } else {
        this.passwordType = "password";
      }
    },
  },
};
</script>
