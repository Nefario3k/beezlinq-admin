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
              <p class="label">Message</p>
            </div>
            <ModalClose @closeModal="closeAll" />
          </header>
          <!--========================= header  =========================-->
          <header class="pt-4">
            <div class="left__wing">
              <h2>Create New Message</h2>
            </div>
            <!-- select drop down -->
            <v-menu :nudge-bottom="5" offset-y>
              <template v-slot:activator="{ on, attrs }">
                <div v-bind="attrs" v-on="on">
                  <Button
                    :elevation="0"
                    :outlined="true"
                    textColor="var(--primary-dark-color)"
                    width="max-content"
                    :svg="true"
                    svgRight="SvgAngleDown"
                    text="To all users"
                    minWidth="16rem"
                    height="4rem"
                    color="var(--border)"
                    contentClass="card__dropdown"
                  />
                </div>
              </template>
              <v-list class="dropdown__list userDropDown">
                <v-list-item class="dropdown__list-item">
                  <v-list-item-content>
                    <v-list-item-title class="dropdown__list-title"
                      >To all users</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="dropdown__list-item">
                  <v-list-item-content>
                    <v-list-item-title class="dropdown__list-title"
                      >Free Users</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="dropdown__list-item">
                  <v-list-item-content>
                    <v-list-item-title class="dropdown__list-title"
                      >Paid users</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="dropdown__list-item">
                  <v-list-item-content>
                    <v-list-item-title class="dropdown__list-title"
                      >New users</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="dropdown__list-item">
                  <v-list-item-content>
                    <v-list-item-title class="dropdown__list-title"
                      >Specific users</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-menu>
          </header>
          <!--====================== content ======================-->
          <section class="content__wrapper">
            <!--====================== name and desc ======================-->
            <v-row class="input__row">
              <!-- Subject of Message -->
              <div class="col-12">
                <label for="subject_message" class="input_label"
                  >Subject of Message <span>(Optional)</span></label
                >
                <input
                  type="text"
                  required
                  class="form-control input_field"
                  id="subject_message"
                  placeholder="Enter Message Subject"
                />
              </div>
              <!-- Message Body -->
              <div class="col-12 pb-0">
                <label for="message_body" class="input_label"
                  >Message Body</label
                >
                <textarea
                  placeholder="Enter Message here"
                  id="message_body"
                  required
                  class="form-control input_field"
                  rows=""
                  cols=""
                ></textarea>
                <span class="labelCounter">0/300</span>
              </div>
              <!-- image -->
              <div class="col-12 pt-0">
                <label for="message_body" class="input_label"
                  >Image <span>(optional)</span></label
                >
                <DragDrop
                  :svg="true"
                  :maxSize="1"
                  svgVal="SvgImageLarge"
                  contentClass="mt-2 image__drop"
                />
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
              text="Send Message"
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