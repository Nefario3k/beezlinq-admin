<template>
  <div>
    <v-dialog
      overlay-color="var(--scrim)"
      :overlay-opacity="1"
      :persistent="persistent"
      :max-width="926"
      v-model="showModal"
      :width="width"
    >
      <v-card color="var(--text-dark)" class="modal_box">
        <div class="card__create">
          <!--========================= header  =========================-->
          <header class="light__head">
            <div class="left__wing">
              <h2>Create Role</h2>
            </div>
            <ModalClose @closeModal="closeAll" />
          </header>
          <!--====================== content ======================-->
          <section class="content__wrapper">
            <!--====================== name and desc ======================-->
            <v-row class="input__row larger">
              <!-- Role Name -->
              <div class="col-12 col-md-6">
                <label for="create_role_name" class="input_label"
                  >Role Name</label
                >
                <input
                  type="text"
                  required
                  class="form-control input_field"
                  id="create_role_name"
                  placeholder="Enter Role Name"
                  value="John"
                />
              </div>
              <!-- Description -->
              <div class="col-12 col-md-6">
                <label for="create_role_desc" class="input_label"
                  >Description</label
                >
                <input
                  type="text"
                  required
                  class="form-control input_field"
                  id="create_role_desc"
                  placeholder="Enter Description"
                  value="Doe"
                />
              </div>
            </v-row>

            <p class="label">SET PERMISSIONS</p>
            <!--====================== pemissions table ======================-->
            <v-row class="input__row nawa">
              <div class="col-4">
                <TablesPermissionNames />
              </div>
              <div class="col-8">
                <TablesPermissionContent />
              </div>
            </v-row>
          </section>
          <section class="bottom__section">
            <Button
              @click="closeAll"
              :elevation="0"
              :outlined="true"
              textColor="var(--primary-color)"
              text="Close"
              minWidth="20.4rem"
              height="5rem"
              color="var(--border)"
            />
            <Button
              :elevation="0"
              height="5rem"
              minWidth="20.4rem"
              color="var(--primary-color)"
              text="Create"
            />
          </section>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      width: "100%",
      persistent: false,
      menuModel: false,
    };
  },
  methods: {
    refresh() {},
    showDialogue() {
      this.showModal = true;
    },
    closeAll() {
      this.showModal = false;
    },
  },
};
</script>