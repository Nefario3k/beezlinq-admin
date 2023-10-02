<template>
  <div>
    <section class="pageContent">
      <!--============================= header =============================-->
      <div class="d-flex align-center justify-space-between mb-5">
        <h2 class="page_head mb-0">Settings</h2>
      </div>
      <!--========================= bottom section  =========================-->
      <div
        class="mb-5 card_container user__card_container no_inline user_no_line"
      >
        <!-- control  -->
        <div class="tabsArea user userTab">
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
          class="tab__items project_single_tab m-0"
        >
          <!-- API -->
          <v-tab-item class="p-0 m-0">
            <section class="settings__contaniner">
              <div
                class="d-flex align-center justify-space-between flex-wrap gap-5 mb-8"
              >
                <p class="capital">API Settings</p>
                <Button
                  @click="$refs.addApiKey.showPanel()"
                  :elevation="0"
                  textSize="1.4rem"
                  text="Manage keys"
                  minWidth="12.4rem"
                  height="4rem"
                  color="var(--primary-color)"
                />
              </div>
              <section style="margin-inline: -29px">
                <TablesApi />
              </section>
            </section>
          </v-tab-item>
          <!-- VAT -->
          <v-tab-item class="p-0 m-0">
            <section class="input__area settings__contaniner">
              <p class="capital mb-8">VAT Setting</p>
              <div class="general__container">
                <form class="row">
                  <!--====================== VAT Type ======================-->
                  <div class="col-12">
                    <label for="vat_percentage" class="input_label"
                      >VAT Type</label
                    >
                    <select
                      class="form-control select_field"
                      id="vat_percentage"
                    >
                      <option value="Percentage">Percentage</option>
                      <option value="Percentage">Percentage</option>
                      <option value="Percentage">Percentage</option>
                    </select>
                  </div>
                  <!--====================== For All Currency ======================-->
                  <div class="col-12">
                    <div class="d-flex align-center">
                      <v-switch
                        class="m-0 ms-1"
                        inset
                        :ripple="false"
                        hide-details
                        color="var(--primary-color)"
                      ></v-switch>
                      <label for="vat_percentage" class="mb-0 input_label"
                        >For All Currency</label
                      >
                    </div>
                  </div>
                  <div class="col-12">
                    <label class="input_label" for="naira">Naira</label>
                    <div class="relative password_field">
                      <input
                        class="form-control input_field"
                        type="number"
                        id="naira"
                        autocomplete="off"
                        placeholder="percentage"
                      />
                      <label
                        for="naira"
                        style="cursor: auto"
                        title="Toggle password view"
                        class="m-0 absolute password_toggle"
                      >
                        %
                      </label>
                    </div>
                  </div>
                  <div class="col-12">
                    <label class="input_label" for="dollar">dollar</label>
                    <div class="relative password_field">
                      <input
                        class="form-control input_field"
                        type="number"
                        id="dollar"
                        autocomplete="off"
                        placeholder="percentage"
                      />
                      <label
                        for="dollar"
                        style="cursor: auto"
                        title="Toggle password view"
                        class="m-0 absolute password_toggle"
                      >
                        %
                      </label>
                    </div>
                  </div>
                  <!--====================== button ======================-->
                  <div class="mt-5 col-12">
                    <div class="text-right">
                      <Button
                        type="button"
                        textSize="1.4rem"
                        :elevation="0"
                        height="40"
                        minWidth="124"
                        color="var(--primary-color)"
                        text="Save"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </v-tab-item>
        </v-tabs-items>
      </div>
    </section>
    <!--===================== panels and modals go here =====================-->
    <PanelEditPassword ref="editPassword" />
    <PanelCreateApiKeys ref="addApiKey" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabIndicator: 0,
      tabItems: ["API", "VAT"],
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped lang="scss">
p {
  font-size: 2rem;
  font-weight: 500;
}
</style>