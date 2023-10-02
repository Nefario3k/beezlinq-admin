<template>
  <div>
    <section class="pageContent">
      <!--============================= header =============================-->
      <div class="d-flex align-center justify-space-between mb-5">
        <h2 class="page_head mb-0">Admin Settings</h2>
      </div>
      <!--========================== top section  ==========================-->
      <v-row class="mb-4">
        <div class="col-4">
          <v-row class="m-0 card_container">
            <div class="col-6 border__bottom border__light">
              <h4 class="titleCard">Total Admin</h4>
              <p class="titleSubtext">{{ $formatNumber(12) }}</p>
            </div>
            <div class="col-6 border__bottom border__light">
              <h4 class="titleCard">Total Admin</h4>
              <p class="titleSubtext">{{ $formatNumber(12) }}</p>
            </div>
            <div class="col-6">
              <h4 class="titleCard">Total Roles</h4>
              <p class="titleSubtext">{{ $formatNumber(12) }}</p>
            </div>
            <div class="col-6">
              <h4 class="titleCard">Total Roles</h4>
              <p class="titleSubtext">{{ $formatNumber(12) }}</p>
            </div>
          </v-row>
        </div>
        <div class="col-8">
          <v-row class="m-0 card_container">
            <div class="col-12">
              <!-- header  -->
              <div class="mb-4 d-flex align-center justify-space-between gap-5">
                <h4 class="titleCard">Recent Activities</h4>
                <div style="grid-gap: 33px" class="d-flex align-center">
                  <Button
                    :elevation="0"
                    style="padding: 0"
                    class="p-0 m-0"
                    textColor="var(--primary-dark-color)"
                    text="Download"
                    width="max-content"
                    minWidth="max-content"
                    height="max-content"
                    color="transparent"
                  />
                  <Button
                    :elevation="0"
                    style="padding: 0"
                    class="p-0 m-0"
                    textColor="var(--primary-color)"
                    text="View All"
                    width="max-content"
                    minWidth="max-content"
                    height="max-content"
                    color="transparent"
                  />
                </div>
              </div>
              <!-- activities  -->
              <v-row class="">
                <div v-for="n in 4" :key="n + 212121" class="col-6">
                  <div class="img_context mb-0">
                    <!-- image  -->
                    <div class="img_container">
                      <img src="/images/temp/user2.jpg" alt="" />
                    </div>
                    <!-- content  -->
                    <div>
                      <div class="user__date">
                        <!-- activity  -->
                        <p class="main_text">
                          <a href="#">John Doe</a>
                        </p>
                        <p class="time_line">5 Mins ago</p>
                      </div>
                      <p class="label">
                        Purchased a <a href="#">Premium Plan</a>
                      </p>
                    </div>
                  </div>
                </div>
              </v-row>
            </div>
          </v-row>
        </div>
      </v-row>
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
          <!-- Settings -->
          <v-tab-item class="p-0 m-0">
            <!--==================== search input  ====================-->
            <div class="search__area mb-6">
              <SearchPageManageAdmin
                :tabIndicator="tabIndicator"
                :outlined="true"
                contentClass="outlined"
                textColor="var(--primary-color)"
                @showCreateModal="$refs.createAdmin.showPanel()"
              />
            </div>
            <!--==================== table  ====================-->
            <TablesAdmin />
          </v-tab-item>
          <!-- Roles -->
          <v-tab-item class="p-0 m-0">
            <!--==================== search input  ====================-->
            <div class="search__area mb-6">
              <SearchPageManageRole
                :tabIndicator="tabIndicator"
                :outlined="true"
                contentClass="outlined"
                textColor="var(--primary-color)"
                @showCreateModal="$refs.createRole.showDialogue()"
              />
            </div>
            <!--==================== table  ====================-->
            <TablesRole />
          </v-tab-item>
          <!-- Activity log -->
          <v-tab-item class="p-0 m-0">
            <!--==================== search input  ====================-->
            <div class="search__area mb-6">
              <SearchPageManageActivity
                :tabIndicator="tabIndicator"
                :currentView="currentView"
                contentClass="outlined"
                textColor="var(--primary-color)"
                @setGridLayout="setLayout"
              />
            </div>
            <!--==================== table  ====================-->
            <TablesGeneralActivity
              :currentView="currentView"
              ref="generalActivity"
            />
          </v-tab-item>
        </v-tabs-items>
      </div>
    </section>
    <!--===================== panels and modals go here =====================-->
    <PanelCreateAdmin ref="createAdmin" />
    <ModalCreateRole ref="createRole" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabIndicator: 0,
      tabItems: ["Settings", "Roles", "Activity log"],
      currentView: 6,
    };
  },
  methods: {
    setLayout(val) {
      this.currentView = val;
      this.$nextTick(() => {
        this.$refs.generalActivity.setGridLayout(val);
      });
    },
  },
  mounted() {},
};
</script>