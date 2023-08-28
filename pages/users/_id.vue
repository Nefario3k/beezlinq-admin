<template>
  <div>
    <section class="pageContent">
      <div class="card_container user__card_container">
        <!--==================== user Header  ====================-->
        <div class="d-flex align-center justify-space-between gap-5">
          <!-- header nd label  -->
          <aside>
            <BackLink />
          </aside>
          <!-- controls  -->
          <div class="button__controls">
            <!-- Edit User  -->
            <Button
              @action="$refs.editUser.showPanel('must pass something (obj)')"
              :elevation="0"
              :outlined="true"
              textColor="var(--primary-dark-color)"
              width="max-content"
              text="Edit User"
              minWidth="9.6rem"
              height="3.6rem"
              color="var(--border)"
              contentClass="card__dropdown userBtns"
            />
            <!-- Upgrade  -->
            <Button
              @action="$refs.userUpgrade.showDialogue()"
              :elevation="0"
              :outlined="true"
              textColor="var(--primary-dark-color)"
              width="max-content"
              text="Upgrade"
              minWidth="9.6rem"
              height="3.6rem"
              color="var(--border)"
              contentClass="card__dropdown userBtns"
            />
            <!-- Suspend  -->
            <Button
              @action="$refs.userSuspend.showDialogue()"
              :elevation="0"
              :outlined="true"
              textColor="var(--primary-dark-color)"
              width="max-content"
              text="Suspend"
              minWidth="9.6rem"
              height="3.6rem"
              color="var(--border)"
              contentClass="card__dropdown userBtns"
            />
            <!-- Disable  -->
            <Button
              @action="$refs.userDisable.showDialogue()"
              :elevation="0"
              :outlined="true"
              textColor="var(--primary-dark-color)"
              width="max-content"
              text="Disable"
              minWidth="9.6rem"
              height="3.6rem"
              color="var(--border)"
              contentClass="card__dropdown userBtns"
            />
          </div>
        </div>
        <!--==================== user Info  ====================-->
        <div class="user_content_area">
          <!-- header  -->
          <header>
            <!-- image area  -->
            <div class="img_context">
              <div class="img_container">
                <img src="/images/temp/user.jpg" alt="" />
              </div>
              <div>
                <p class="header_big">Adam Kosher</p>
                <p class="high link">
                  <a href="mailto:adamkosher@gmail.com">adamkosher@gmail.com</a>
                </p>
              </div>
            </div>
            <!-- details  -->
            <v-row class="mini_card_row">
              <!-- Subscription -->
              <div class="col-12 col-sm-2 col-md-4">
                <div class="card__content">
                  <div class="content">
                    <div>
                      <p class="title">Subscription</p>
                      <p class="sub_header_big">Free Plan</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Plan -->
              <div class="col-12 col-sm-2 col-md-4">
                <div class="card__content">
                  <div class="content">
                    <div>
                      <p class="title">Plan</p>
                      <p class="sub_header_small">Expiring</p>
                    </div>
                    <v-progress-circular
                      :rotate="130"
                      :size="60"
                      :width="6"
                      :value="80"
                      class="progress__circular"
                      color="var(--primary-color)"
                    >
                      <p class="progrss__stat">
                        <span>{{ 28 }}</span>
                        <span> Days </span>
                      </p>
                    </v-progress-circular>
                  </div>
                </div>
              </div>
              <!-- Scan Unit -->
              <div class="col-12 col-md-4">
                <div class="card__content">
                  <div class="content">
                    <div>
                      <p class="title">Scan Unit</p>
                      <p class="sub_header_small">Remaining</p>
                    </div>
                    <p class="header_big_lte header_big">30</p>
                  </div>
                </div>
              </div>
            </v-row>
          </header>
          <!--==================== content  ====================-->
          <v-row>
            <!-- first half  -->
            <template>
              <!-- Phone Number -->
              <div class="col-12 col-sm-3">
                <p>Phone Number</p>
                <p class="high">
                  <a href="tel:+234803458797">+234803458797</a>
                </p>
              </div>
              <!-- Profession -->
              <div class="col-12 col-sm-3">
                <p>Profession</p>
                <p class="high">Lawyer</p>
              </div>
              <!-- Country -->
              <div class="col-12 col-sm-3">
                <p>Country</p>
                <p class="high">Nigeria</p>
              </div>
              <!-- House Number -->
              <div class="col-12 col-sm-3">
                <p>House Number</p>
                <p class="high"><i>#</i>09</p>
              </div>
            </template>
            <!-- second half  -->
            <template>
              <!-- Province -->
              <div class="col-12 col-sm-3">
                <p>Province</p>
                <p class="high">Abuja</p>
              </div>
              <!-- City -->
              <div class="col-12 col-sm-3">
                <p>City</p>
                <p class="high">Maitama</p>
              </div>
              <!-- Postal Code -->
              <div class="col-12 col-sm-3">
                <p>Postal Code</p>
                <p class="high">900901</p>
              </div>
              <!-- Address -->
              <div class="col-12 col-sm-3">
                <p>Address</p>
                <p class="high">Star Lake Close, Maitama, Abuja</p>
              </div>
            </template>
          </v-row>
        </div>
        <!--==================== tab area  ====================-->
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
          <!-- Created Cards -->
          <v-tab-item class="p-0 m-0">
            <!--==================== search input  ====================-->
            <div class="search__area mb-6">
              <SearchPageUserCards
                :tabIndicator="tabIndicator"
                :outlined="true"
                contentClass="outlined"
                textColor="var(--primary-color)"
              />
            </div>
            <!--==================== table  ====================-->
            <TablesUserCreate />
          </v-tab-item>
          <!-- Scanned Cards -->
          <v-tab-item class="p-0 m-0">
            <!--==================== search input  ====================-->
            <div class="search__area mb-6">
              <SearchPageUserCards :tabIndicator="tabIndicator" />
            </div>
            <!--==================== table  ====================-->
            <TablesUserCreate />
          </v-tab-item>
          <!-- Archived Cards -->
          <v-tab-item class="p-0 m-0">
            <!--==================== search input  ====================-->
            <div class="search__area mb-6">
              <SearchPageUserCards :tabIndicator="tabIndicator" />
            </div>
            <!--==================== table  ====================-->
            <TablesUserCreate />
          </v-tab-item>
          <!-- Connections -->
          <v-tab-item class="p-0 m-0">
            <!--==================== search input  ====================-->
            <div class="search__area mb-6">
              <SearchPageUserCards :tabIndicator="tabIndicator" />
            </div>
            <!--==================== table  ====================-->
            <TablesUserConnection />
          </v-tab-item>
          <!-- Transactions -->
          <v-tab-item class="p-0 m-0">
            <!--==================== search input  ====================-->
            <div class="search__area mb-6">
              <SearchPageTransaction />
            </div>
            <!--==================== table  ====================-->
            <TablesTransactionSingleUser />
          </v-tab-item>
          <!-- Activity Log -->
          <v-tab-item class="p-0 m-0">
            <!--==================== search input  ====================-->
            <div class="search__area mb-6">
              <SearchPageActivity />
            </div>
            <!--==================== table  ====================-->
            <TablesActivity />
          </v-tab-item>
        </v-tabs-items>
      </div>
    </section>
    <!--===================== panels and modals go here =====================-->
    <PanelEditUser
      @success="$refs.userEditInfo.showDialogue()"
      @showWarning="$refs.userWarning.showDialogue()"
      ref="editUser"
    />
    <ModalUserEditWarning
      @closePanel="
        (val) => {
          $refs.editUser.closePanel(val);
        }
      "
      ref="userWarning"
    />
    <ModalUserEditInfo
      @closePanel="
        (val) => {
          $refs.editUser.closePanel(val);
        }
      "
      ref="userEditInfo"
    />
    <ModalUserUpgrade ref="userUpgrade" />
    <ModalUserSuspend ref="userSuspend" />
    <ModalUserDisable ref="userDisable" />
    <ModalCardCreate ref="cardCreate" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabIndicator: 0,
      tabItems: [
        "Created Cards",
        "Scanned Cards",
        "Archived Cards",
        "Connections",
        "Transactions",
        "Activity Log",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>