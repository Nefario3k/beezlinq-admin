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
              <p class="label">Plan & Features</p>
            </div>
            <ModalClose @closeModal="closeAll" />
          </header>
          <!--========================= header  =========================-->
          <header class="pt-4">
            <div class="left__wing">
              <h2>Add Plan</h2>
            </div>
          </header>
          <!--====================== content ======================-->
          <section class="content__wrapper">
            <!--====================== name and desc ======================-->
            <v-row class="input__row">
              <!-- Plan Name -->
              <div class="col-12 col-md-6">
                <label for="plan_name" class="input_label">Plan Name</label>
                <input
                  type="text"
                  required
                  class="form-control input_field"
                  id="plan_name"
                  placeholder="Enter plan name"
                />
              </div>
              <!-- Description -->
              <div class="col-12 col-md-6">
                <label for="subject_message" class="input_label"
                  >Description</label
                >
                <input
                  type="text"
                  required
                  class="form-control input_field"
                  placeholder="Enter Description"
                />
              </div>
              <!-- Plan Type -->
              <div class="col-12 col-md-6 pb-1">
                <label for="create_card_industry" class="input_label"
                  >Plan Type</label
                >
                <select class="form-control select_field" value="Legal">
                  <option value="">Paid</option>
                  <option value="">Free</option>
                </select>
              </div>
              <!-- Currency -->
              <div class="col-12 col-md-6 pb-1">
                <label for="create_card_industry" class="input_label"
                  >Currency</label
                >
                <select class="form-control select_field" value="Legal">
                  <option value="">Naira</option>
                  <option value="">Dollar</option>
                </select>
              </div>
              <!-- Monthly -->
              <div class="col-12 col-md-6">
                <label for="subject_message" class="input_label">Monthly</label>
                <input
                  type="text"
                  required
                  class="form-control input_field"
                  placeholder="Enter Monthly"
                />
              </div>
              <!-- Yearly -->
              <div class="col-12 col-md-6">
                <label for="subject_message" class="input_label">Yearly</label>
                <input
                  type="text"
                  required
                  class="form-control input_field"
                  placeholder="Enter Yearly"
                />
              </div>
              <!-- toggle set discount -->
              <div class="col-12">
                <v-switch
                  class="mt-0 ms-2"
                  inset
                  :ripple="false"
                  hide-details
                  color="var(--primary-color)"
                  label="Set Discount"
                  v-model="setDiscount"
                ></v-switch>
              </div>
              <template v-if="setDiscount">
                <!-- Discount Type -->
                <div class="col-12 col-md-6 pb-1">
                  <label for="create_card_industry" class="input_label"
                    >Discount Type</label
                  >
                  <select
                    class="form-control select_field"
                    v-model="discountType"
                  >
                    <option value="percent">Percentage</option>
                    <option value="amount">Fixed Amount</option>
                  </select>
                </div>
                <!-- Percentage -->
                <div class="col-12 col-md-6">
                  <label for="subject_message" class="input_label">{{
                    discountType == "percent" ? "Percentage" : "Amount"
                  }}</label>
                  <input
                    type="text"
                    required
                    class="form-control input_field"
                    :placeholder="`Enter ${
                      discountType == 'percent' ? 'Percentage' : 'Amount'
                    }`"
                  />
                </div>
              </template>
              <div class="features__list">
                <span class="title mt-6">SET FEATURES</span>
                <div
                  class="heading d-flex justify-space-between align-center mt-4"
                >
                  <span>Features</span>
                  <input type="text" name="" value="Action" disabled />
                </div>
                <div class="d-flex justify-space-between align-center">
                  <span>Number of cards</span>
                  <input type="text" name="" id="" value="3" />
                </div>
                <div class="d-flex justify-space-between align-center">
                  <span>Number of templates</span>
                  <input type="text" name="" id="" value="5" />
                </div>
                <div class="d-flex justify-space-between align-center">
                  <span>Number of images</span>
                  <input type="text" name="" id="" value="2" />
                </div>
                <div class="d-flex justify-space-between align-center">
                  <span>Number of videos</span>
                  <input type="text" name="" id="" value="Unlimited" />
                </div>
                <div class="d-flex justify-space-between align-center">
                  <span>Number of free scans</span>
                  <input type="text" name="" id="" value="10" />
                </div>
                <div class="d-flex justify-space-between align-center">
                  <span>Number of phone numbers</span>
                  <input type="text" name="" id="" value="Custom" />
                </div>
                <div class="d-flex justify-space-between align-center">
                  <span>Number of colors</span>
                  <input type="text" name="" id="" value="3" />
                </div>
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
      setDiscount: false,
      discountType: "percent",
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
<style lang="scss">
div.features__list {
  & > span.title {
    color: #97a4c0;
    font-size: 14px;
    font-weight: 500;
    display: inline-block;
  }

  & > div {
    padding: 1rem;
    padding-left: 2.2rem;
    border-bottom: 1px solid #e5ebf4;

    input:not([value="Action"]) {
      border: 1px solid #e5ebf4;
      padding: 0.8rem 1rem;
      border-radius: 0.6rem;
    }

    input:disabled {
      color: #00317f;
    }

    input:focus {
      outline: none;
      border: 1px solid #0062ff;
    }
  }

  div.heading {
    background-color: #f1f1f1;
    border-radius: 0.6rem;
    font-weight: 500;
  }
}
</style>