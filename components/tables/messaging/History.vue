<template>
  <div>
    <v-data-table
      v-if="!tableLoader"
      :headers="headers"
      :mobile-breakpoint="766"
      :disable-filtering="true"
      :disable-sort="true"
      :items="tableData"
      hide-default-footer
      :items-per-page="pagination.itemsPerPage"
      :page="pagination.page"
      :loading="tableLoader"
      loading-text="Loading user data"
      no-data-text="No user data available"
      :footer-props="{
        pagination: pagination,
        itemsPerPageText: 'Rows Per Page:',
      }"
      class="generic__table no__border_inline noGridLines"
    >
      <!-- message -->
      <template v-slot:item.message="{ item }">
        <div class="user_content capital">
          <div class="user_content_details gap-5">
            <div class="">
              <SvgEnvelop />
            </div>
            <div class="">
              <span
                style="color: var(--primary-color)"
                @click="
                  $refs.downloadReceipt.showPanel({ resolve: true, ...item })
                "
                >{{ item.message }}</span
              >
              <div class="delivery__info">
                <p>Received Users <strong>109</strong></p>
                <p>IOS Device <strong>22</strong></p>
                <p>Android Device <strong>88</strong></p>
                <p>Total Device <strong>109</strong></p>
              </div>
            </div>
          </div>
        </div>
      </template>
      <!-- duration  -->
      <template v-slot:item.created_by="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <p class="email" style="white-space: nowrap">
              {{ item.created_by }}
            </p>
          </div>
        </div>
      </template>
      <!-- status  -->
      <template v-slot:item.created_at="{ item }">
        <div class="user_content">
          <div class="user_content_details justify-center">
            <div
              class="chip__wrapper"
              style="white-space: nowrap; color: #00317f"
            >
              <span style="color: #00317f" class="">{{
                item.created_at.split(" ")[0]
              }}</span>
              <br />
              <span style="color: #97a4c0">{{
                item.created_at.split(" ")[1]
              }}</span>
            </div>
          </div>
        </div>
      </template>
      <!-- action  -->
      <template v-slot:item.action="{ item }">
        <div class="user_content_details" style="justify-content: center">
          <v-menu offset-y min-width="15.6rem">
            <template v-slot:activator="{ on, attrs }">
              <div
                v-bind="attrs"
                v-on="on"
                class="action__activator"
                style="min-width: 5rem"
              >
                <SvgDotsVertical />
              </div>
            </template>
            <v-list class="dropdown__list">
              <!-- user  -->
              <v-list-item
                @click="
                  $refs.downloadReceipt.showPanel({ resolve: true, ...item })
                "
                class="dropdown__list-item"
              >
                <v-list-item-content>
                  <v-list-item-title class="dropdown__list-title"
                    >Preview</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <!-- edit  -->
              <v-list-item
                @click="
                  $refs.editUserConnection.showPanel(
                    'must pass something (obj)'
                  )
                "
                class="dropdown__list-item"
              >
                <v-list-item-content>
                  <v-list-item-title class="dropdown__list-title"
                    >Edit</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <!-- Upgrade User -->
              <v-list-item
                @click="$refs.viewUpgrade.showPanel()"
                class="dropdown__list-item"
              >
                <v-list-item-content>
                  <v-list-item-title class="dropdown__list-title"
                    >Publish</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <!-- Suspend User -->
              <v-list-item
                @click="$refs.userSuspend.showDialogue()"
                class="dropdown__list-item"
              >
                <v-list-item-content>
                  <v-list-item-title class="dropdown__list-title"
                    >Delete</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </template>
      <!-- footer  -->
      <template v-slot:footer="{ props: { pagination, itemsPerPageText } }">
        <TablesFooter
          v-show="!tableLoader && tableData.length"
          :pagination="pagination"
          :itemsPerPageText="itemsPerPageText"
          :tableData="tableData"
          @getPerPage="
            (perPage) => {
              $emit('getPerPage', perPage);
            }
          "
          @loadMore="
            (val) => {
              $emit('loadMore', val);
            }
          "
          ref="tableFooter"
        />
      </template>
    </v-data-table>
    <LoaderTable v-else />
    <!--===================== panels and modals go here =====================-->
    <PanelViewMessage
      @success="$refs.userEditInfo.showDialogue()"
      @showWarning="$refs.userWarning.showDialogue()"
      ref="downloadReceipt"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableLoader: false,
      headers: [
        {
          text: "All Messages",
          align: "start",
          sortable: true,
          value: "message",
        },
        { text: "Created By", value: "created_by" },
        { text: "Date Created", value: "created_at" },
        { text: "Action", value: "action" },
      ],
      pagination: {
        page: 1,
        itemsPerPage: 10,
        pageStart: 1,
        pageStop: 200,
        pageCount: 1,
        itemsLength: 7,
        last_page: 200,
        itemsPerPageOptions: [5, 10, 15, 20, 25],
      },
    };
  },
  computed: {
    tableData() {
      var data = [];
      var obj = {
        message:
          "Planned XATM System maintenance. Access will be offline on August 12 from 12PM WAT until 6PM. Please bear with us and plan accordingly or contact your manager for more information.",
        created_by: "Super-Admin",
        created_at: "08/08/2023 09:30PM",
        // card_no: 6,
      };
      for (let index = 0; index < 16; index++) {
        data.push(obj);
      }

      return data;
    },
  },
  methods: {
    showPanel(type, dataToShow) {
      return;
      switch (type) {
        case "view":
          this.$refs.adminView.showPanel(dataToShow);
          break;
        case "edit":
          this.$refs.adminEdit.showPanel(dataToShow);
          break;
        case "disableAdmin":
          this.$refs.disableAdmin.showPanel(dataToShow);
          break;
        case "enableAdmin":
          this.$refs.enableAdmin.showPanel(dataToShow);
          break;

        default:
          this.$refs.adminEdit.showPanel(type);
          break;
      }
    },
  },
};
</script>
<style lang="scss">
div.delivery__info {
  display: flex;
  justify-content: flex-start;
  gap: 3rem;
  margin-top: 9px;

  span {
    display: block;
    color: #008dd2;
    font-size: 1.25rem !important;
    margin-top: 0.8rem;
  }

  strong {
    display: inline-block;
    padding-left: 1rem;
    color: #00317f;
    font-weight: 500;
  }
}
</style>
