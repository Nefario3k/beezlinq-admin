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
        title="Profile Setting"
        :elevation="elevation"
        @closeDrawer="closeDrawer"
      />

      <div class="main_content_area">
        <form @submit.prevent="editAdmin" class="panel__content relative">
          <!-- main content  -->
          <div ref="main__content" @scroll="handleScroll" class="main__content">
            <!--========================== header  ==========================-->
            <header class="main__content__header">
              <h2 class="">Profile</h2>
            </header>
            <!--========================== content  ==========================-->
            <section class="input__area settings__contaniner">
              <div class="general__container">
                <v-row>
                  <!--=================== profile image ===================-->
                  <div class="col-12 mb-8">
                    <div class="d-flex align-center gap-5 flex-column">
                      <!--================== admin profile image ==================-->
                      <div class="img_container">
                        <img src="/images/temp/user.jpg" alt="" />
                      </div>
                      <!--==================== action buttons ====================-->
                      <div
                        class="d-flex align-center justify-space-center gap-3"
                      >
                        <Button
                          type="button"
                          :elevation="0"
                          height="40"
                          minWidth="128"
                          textSize="1.4rem"
                          color="var(--primary-color)"
                          text="Change Photo"
                        />
                        <Button
                          type="button"
                          :outlined="true"
                          textSize="1.4rem"
                          :elevation="0"
                          height="40"
                          minWidth="128"
                          textColor="var(--danger-color)"
                          color="var(--danger-color)"
                          text="Remove"
                        />
                      </div>
                    </div>
                  </div>
                  <!--====================== fname ======================-->
                  <div class="col-12">
                    <label for="edit_admin_fname" class="input_label"
                      >First Name</label
                    >
                    <input
                      value="John"
                      type="text"
                      disabled
                      required
                      class="form-control input_field"
                      id="edit_admin_fname"
                      placeholder="First name"
                    />
                  </div>
                  <!--====================== lname ======================-->
                  <div class="col-12">
                    <label for="edit_admin_lname" class="input_label"
                      >Last Name</label
                    >
                    <input
                      value="Doe"
                      type="text"
                      required
                      disabled
                      class="form-control input_field"
                      id="edit_admin_lname"
                      placeholder="Last name"
                    />
                  </div>
                  <!--====================== email ======================-->
                  <div class="col-12">
                    <label for="edit_admin_email" class="input_label"
                      >Email Address</label
                    >
                    <input
                      value="johnDoe@bexit.com.ng"
                      type="email"
                      required
                      disabled
                      class="form-control input_field"
                      id="edit_admin_email"
                      placeholder="Email"
                    />
                  </div>
                  <!--====================== Role/Access ======================-->
                  <div class="col-12 bordered">
                    <label for="edit_admin_Role/Access" class="input_label"
                      >Role/Access</label
                    >
                    <input
                      disabled
                      value="SuperAdmin"
                      type="text"
                      class="form-control input_field"
                      id="edit_admin_Role/Access"
                      placeholder="Role/Access"
                    />
                  </div>
                  <!--====================== Password ======================-->
                  <div class="col-12">
                    <div
                      class="d-flex justify-space-between align-center gap-5"
                    >
                      <label class="mb-0 input_label notDisabled"
                        >Password</label
                      >
                      <Button
                        @click="(showDrawer = false), $emit('editPassword')"
                        type="button"
                        :outlined="true"
                        textSize="1.4rem"
                        :elevation="0"
                        height="40"
                        minWidth="108"
                        textColor="var(--primary-color)"
                        color="var(--border)"
                        text="Change"
                      />
                    </div>
                  </div>
                </v-row>
              </div>
            </section>
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
