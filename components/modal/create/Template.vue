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
        <div class="d-flex align-center w-100 h-100 justify-content-center">
          <div class="modal__content full__screen_template">
            <ModalClose @closeModal="closeAll" />
            <div class="content__wrapper">
              <!--===================== preview  =====================-->
              <div class="left__side">
                <h3>Add New Template</h3>
                <p class="label my-2">Preview</p>
                <!--===================== Web  =====================-->
                <template>
                  <div class="img_container">
                    <div class="text-center">
                      <div><SvgImage /></div>
                      <p class="img_label">Cover image here</p>
                    </div>
                  </div>
                  <p class="label mt-2 mb-10">Web Thumbnail</p>
                </template>
                <!--===================== mobile  =====================-->
                <template>
                  <div class="img_container mobile">
                    <div class="text-center">
                      <div><SvgImage /></div>
                      <p class="img_label">Cover image here</p>
                    </div>
                  </div>
                  <p class="label mt-2">Mobile Thumbnail</p>
                </template>
              </div>
              <!--===================== form  =====================-->
              <div class="right__side">
                <form class="row">
                  <!-- Template Name  -->
                  <div class="col-12 pb-1">
                    <label for="create_temp_name" class="input_label"
                      >Template Name</label
                    >
                    <input
                      type="text"
                      required
                      class="form-control input_field"
                      id="create_temp_name"
                      placeholder="Enter card name here"
                    />
                  </div>
                  <!-- Select Category  -->
                  <div class="col-12 pb-1">
                    <label for="create_temp_category" class="input_label"
                      >Select Category</label
                    >
                    <select
                      class="form-control select_field"
                      id="create_temp_category"
                      value="Personal"
                    >
                      <option value="Personal">Personal</option>
                      <option value="User needs some milk">
                        User needs some milk
                      </option>
                      <option value="Personal">Personal</option>
                    </select>
                  </div>
                  <!-- Preview Card  -->
                  <div class="col-12 pb-1">
                    <label for="create_temp_card_preview" class="input_label"
                      >Preview Card</label
                    >
                    <select
                      class="form-control select_field"
                      id="create_temp_card_preview"
                      value="Select Preview Card"
                    >
                      <option value="Select Preview Card">
                        Select Preview Card
                      </option>
                      <option value="User needs some milk">
                        User needs some milk
                      </option>
                      <option value="Personal">Personal</option>
                    </select>
                  </div>
                  <!-- Status  -->
                  <div class="col-6 pb-1">
                    <label for="create_temp_status" class="input_label"
                      >Status</label
                    >
                    <select
                      class="form-control select_field"
                      id="create_temp_status"
                      value="Inactive"
                    >
                      <option value="Inactive">Inactive</option>
                      <option value="User needs some milk">
                        User needs some milk
                      </option>
                      <option value="Personal">Personal</option>
                    </select>
                  </div>
                  <!-- Plan  -->
                  <div class="col-6 pb-1">
                    <label for="create_temp_Plan" class="input_label"
                      >Plan</label
                    >
                    <select
                      class="form-control select_field"
                      id="create_temp_Plan"
                      value="Free"
                    >
                      <option value="Free">Free</option>
                      <option value="User needs some milk">
                        User needs some milk
                      </option>
                      <option value="Personal">Personal</option>
                    </select>
                  </div>
                  <!-- Custom Template  -->
                  <div class="col-12">
                    <v-switch
                      class="mt-0 ms-2"
                      inset
                      :ripple="false"
                      hide-details
                      color="var(--primary-color)"
                      label="Custom Template"
                    ></v-switch>
                  </div>
                  <!-- Web Thumbnail  -->
                  <div class="col-12 pb-1">
                    <label for="" class="input_label">Web Thumbnail</label>
                  </div>
                  <!-- Mobile Thumbnail  -->
                  <div class="col-12 pb-1">
                    <label for="" class="input_label">Mobile Thumbnail</label>
                  </div>
                  <!-- Custom Colour  -->
                  <div class="col-12 pb-1">
                    <div class="color_label">
                      <label for="" class="input_label">Custom Colour</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: true,
      width: "100%",
      persistent: false,
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