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
          <section class="top__section">
            <!--========================= header  =========================-->
            <header>
              <div class="left__wing">
                <h2>Create Card</h2>
              </div>
              <ModalClose @closeModal="closeAll" />
            </header>
            <!--==================== tab area  ====================-->
            <!-- control  -->
            <div class="tabsArea user userTab less__gutter">
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
              <!-- Created Cards -->
              <v-tab-item class="tab_item" style="padding: 0 22px; margin: 0">
                <div class="templates__area">
                  <h3>Templates</h3>
                  <v-row>
                    <div
                      v-for="n in 10"
                      :key="n + 21212121212"
                      class="col-sm-2 col-md-4 col-12"
                    >
                      <div class="card_container no_inline templates_container">
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
                          <v-menu nudge-left="50%" offset-y min-width="15.6rem">
                            <template v-slot:activator="{ on, attrs }">
                              <div
                                v-bind="attrs"
                                v-on="on"
                                class="action__activator non_table"
                              >
                                <SvgDotsHorizontal />
                              </div>
                            </template>
                            <v-list class="dropdown__list">
                              <!-- Edit  -->
                              <v-list-item class="dropdown__list-item">
                                <v-list-item-content>
                                  <v-list-item-title
                                    class="dropdown__list-title"
                                    >Edit</v-list-item-title
                                  >
                                </v-list-item-content>
                              </v-list-item>
                              <!-- Archive  -->
                              <v-list-item class="dropdown__list-item">
                                <v-list-item-content>
                                  <v-list-item-title
                                    class="dropdown__list-title"
                                    >Archive</v-list-item-title
                                  >
                                </v-list-item-content>
                              </v-list-item>
                              <!-- Delete  -->
                              <v-list-item class="dropdown__list-item">
                                <v-list-item-content>
                                  <v-list-item-title
                                    class="dropdown__list-title"
                                    >Delete</v-list-item-title
                                  >
                                </v-list-item-content>
                              </v-list-item>
                            </v-list>
                          </v-menu>
                        </div>
                      </div>
                    </div>
                  </v-row>
                </div>
              </v-tab-item>
            </v-tabs-items>
          </section>
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
      tabIndicator: 0,
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