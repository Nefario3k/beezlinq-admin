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
          <header>
            <div class="left__wing">
              <h2>Create Card</h2>
            </div>
            <ModalClose @closeModal="closeAll" />
          </header>
          <!--==================== tab area  ====================-->
          <!-- control  -->
          <div class="mb-0 tabsArea user userTab less__gutter">
            <v-tabs
              center-active
              :show-arrows="false"
              v-model="tabIndicator"
              background-color="transparent"
              color="var(--primary-dark-color)"
              :hide-slider="false"
              class="v_tabs_wrapper"
            >
              <v-tab
                v-for="item in tabItems"
                :key="item"
                class="v_tabs_items"
                :ripple="false"
              >
                <span>{{ item }}</span>
              </v-tab>
            </v-tabs>
          </div>
          <!-- tab items  -->
          <v-tabs-items
            v-model="tabIndicator"
            class="tab__items project_single_tab m-0 p-0"
          >
            <!--====================== Select Template ======================-->
            <v-tab-item class="tab_item">
              <div class="content__wrapper">
                <h3>Templates</h3>
                <v-row>
                  <div
                    v-for="n in 10"
                    :key="n + 21212121212"
                    class="col-sm-2 col-md-4 col-12"
                  >
                    <div
                      class="card_container no_inline templates_container create__temp__container"
                    >
                      <!-- image  -->
                      <div class="temp_img_wrapper">
                        <div class="image__box">
                          <img src="/images/temp/templates/1.png" alt="" />
                        </div>
                      </div>
                      <!-- conent  -->
                      <div class="template__content">
                        <!-- content data  -->
                        <div>
                          <div>
                            <p class="label">Personal</p>
                            <p class="title_temp">Green Temp</p>
                          </div>
                          <p class="tag">
                            <span>free</span>
                          </p>
                        </div>
                        <!-- action  -->
                        <Button
                          @action="temp = n"
                          :elevation="0"
                          :outlined="true"
                          textColor="var(--primary-dark-color)"
                          :text="`${temp === n ? 'Selected' : 'Select Card'}`"
                          width="11rem"
                          height="3rem"
                          color="var(--border)"
                          :contentClass="`card__dropdown ${
                            temp === n ? 'active' : ''
                          }`"
                        />
                      </div>
                    </div>
                  </div>
                </v-row>
              </div>
            </v-tab-item>
            <!--====================== Card Setup ======================-->
            <v-tab-item class="tab_item">
              <div class="content__wrapper">
                <section class="input__card">
                  <p class="title__card bordered">SetUp Card</p>
                  <v-row class="input__row">
                    <!-- Card Name -->
                    <div class="col-12 col-md-6 pb-1">
                      <label for="create_card_name" class="input_label"
                        >Card Name</label
                      >
                      <input
                        type="text"
                        required
                        class="form-control input_field"
                        id="create_card_name"
                        placeholder="Enter card Name"
                      />
                    </div>
                    <!-- Select Industry  -->
                    <div class="col-12 col-md-6 pb-1">
                      <label for="create_card_industry" class="input_label"
                        >Select Industry</label
                      >
                      <select
                        class="form-control select_field"
                        id="create_card_industry"
                        value="Legal"
                      >
                        <option value="Legal">Legal</option>
                        <option value="User needs some milk">
                          User needs some milk
                        </option>
                        <option value="Legal">Legal</option>
                      </select>
                    </div>
                  </v-row>
                </section>
              </div>
            </v-tab-item>
            <!--====================== Personal Details ======================-->
            <v-tab-item class="tab_item">
              <div class="content__wrapper">
                <!-- Personal Information -->
                <section class="input__card">
                  <p class="title__card bordered">Personal Information</p>
                  <v-row class="input__row">
                    <!-- First Name -->
                    <div class="col-12 col-md-6 pb-1">
                      <label for="create_card_first_name" class="input_label"
                        >First Name</label
                      >
                      <input
                        type="text"
                        required
                        class="form-control input_field"
                        id="create_card_first_name"
                        placeholder="Enter First Name"
                        value="John"
                        disabled
                      />
                    </div>
                    <!-- Last Name -->
                    <div class="col-12 col-md-6 pb-1">
                      <label for="create_card_Last_name" class="input_label"
                        >Last Name</label
                      >
                      <input
                        type="text"
                        required
                        class="form-control input_field"
                        id="create_card_Last_name"
                        placeholder="Enter Last Name"
                        value="Doe"
                        disabled
                      />
                    </div>
                    <!-- Job Description -->
                    <div class="col-12 col-md-6 pb-1">
                      <label for="create_card_job_desc" class="input_label"
                        >Job Description</label
                      >
                      <input
                        type="text"
                        required
                        class="form-control input_field"
                        id="create_card_job_desc"
                        placeholder="Enter Job Description"
                      />
                    </div>
                    <!-- Company Name -->
                    <div class="col-12 col-md-6 pb-1">
                      <label for="create_card_company_name" class="input_label"
                        >Company Name</label
                      >
                      <input
                        type="text"
                        required
                        class="form-control input_field"
                        id="create_card_company_name"
                        placeholder="Enter Company Name"
                      />
                    </div>
                  </v-row>
                </section>
                <!-- Contact Information -->
                <section class="mt-5 input__card">
                  <p class="title__card bordered">Contact Information</p>
                  <!-- Email Address -->
                  <p class="title__card mb-1">Email Address</p>
                  <v-row class="input__row">
                    <div class="col-12 col-md-4">
                      <input
                        type="email"
                        required
                        class="form-control input_field"
                        placeholder="Enter email"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <input
                        type="email"
                        required
                        class="form-control input_field"
                        placeholder="Enter email"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <input
                        type="email"
                        required
                        class="form-control input_field"
                        placeholder="Enter email"
                      />
                    </div>
                  </v-row>
                  <!-- Web Address -->
                  <p class="title__card mb-1 mt-3">Web Address</p>
                  <v-row class="input__row">
                    <div class="col-12">
                      <input
                        type="url"
                        required
                        class="form-control input_field"
                        placeholder="Enter url"
                      />
                    </div>
                  </v-row>
                  <!-- Location Address -->
                  <p class="title__card mb-1 mt-3">Location Address</p>
                  <v-row class="input__row">
                    <div class="col-12">
                      <input
                        type="text"
                        required
                        class="form-control input_field"
                        placeholder="Start typing"
                      />
                    </div>
                  </v-row>
                </section>
              </div>
            </v-tab-item>
            <!--====================== About & Services ======================-->
            <v-tab-item class="tab_item">
              <div class="content__wrapper">
                <!-- About Me -->
                <section class="input__card">
                  <p class="title__card bordered">About Me</p>
                  <v-row class="input__row">
                    <div class="col-12 pb-1">
                      <client-only>
                        <VueEditor
                          placeholder="Enter bio here"
                          :editorOptions="$emptyEditorToolbar()"
                        />
                      </client-only>
                    </div>
                  </v-row>
                </section>
                <!-- Services -->
                <section class="mt-5 input__card">
                  <p class="title__card bordered">Services</p>
                  <!-- Service 1 -->
                  <p class="title__card mb-1">Service 1</p>
                  <v-row class="input__row">
                    <div class="col-12">
                      <input
                        type="text"
                        required
                        class="form-control input_field"
                        placeholder="Service 1 title"
                      />
                    </div>
                  </v-row>
                  <!-- Service 2 -->
                  <p class="title__card mb-1 mt-3">Service 2</p>
                  <v-row class="input__row">
                    <div class="col-12">
                      <input
                        type="text"
                        required
                        class="form-control input_field"
                        placeholder="Service 2 title"
                      />
                    </div>
                  </v-row>
                  <!-- Service 3 -->
                  <p class="title__card mb-1 mt-3">Service 3</p>
                  <v-row class="input__row">
                    <div class="col-12">
                      <input
                        type="text"
                        required
                        class="form-control input_field"
                        placeholder="Service 3 title"
                      />
                    </div>
                  </v-row>
                </section>
              </div>
            </v-tab-item>
          </v-tabs-items>
          <section class="bottom__section">
            <Button
              :elevation="0"
              height="5rem"
              minWidth="20.4rem"
              color="var(--primary-color)"
              text="Next"
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
      showModal: true,
      width: "100%",
      persistent: false,
      menuModel: false,
      tabIndicator: 3,
      temp: null,
      tabItems: [
        "Select Template",
        "Card Setup",
        "Personal Details",
        "About & Services",
        "Gallery",
      ],
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