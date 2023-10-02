<template>
  <div>
    <v-data-table
      v-if="!tableLoader"
      :headers="headers"
      v-model="selected"
      :mobile-breakpoint="766"
      :disable-filtering="true"
      :disable-sort="true"
      :items="tableData"
      item-key="id"
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
      class="generic__table noAction noGridLines"
    >
      <!-- request  -->
      <template v-slot:item.request="{ item }">
        <div class="user_content capital">
          <div class="user_content_details">
            <p class="capital">{{ item.request }}</p>
          </div>
        </div>
      </template>
      <!-- user  -->
      <template v-slot:item.user="{ item }">
        <div class="user_content capital">
          <div class="user_content_details">
            <nuxt-link to="/users/121212">
              <span>{{ $getFullName(item.first_name, item.last_name) }}</span>
            </nuxt-link>
          </div>
        </div>
      </template>
      <!-- description  -->
      <template v-slot:item.description="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <p>{{ item.description ? item.description : "Nil" }}</p>
          </div>
        </div>
      </template>
      <!-- status  -->
      <template v-slot:item.status="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <div class="chip__wrapper">
              <v-chip
                v-if="item.status === 'approved'"
                small
                text-color="var(--primary-color)"
                color="var(--chip-bg4)"
                :ripple="false"
                class="plan__chips"
              >
                {{ item.status }}
              </v-chip>
              <v-chip
                v-else-if="item.status === 'pending'"
                small
                text-color="var(--primary-dark-color)"
                color="var(--chip-bg3)"
                :ripple="false"
                class="plan__chips"
              >
                {{ item.status }}
              </v-chip>
              <v-chip
                v-else
                small
                text-color="var(--chip-text2)"
                color="var(--chip-bg2)"
                :ripple="false"
                class="plan__chips"
              >
                {{ item.status }}
              </v-chip>
            </div>
          </div>
        </div>
      </template>
      <!-- created_at  -->
      <template v-slot:item.created_at="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <p>
              {{ $formatActivityDate(new Date()) }}
            </p>
          </div>
        </div>
      </template>
      <!-- action  -->
      <template v-slot:item.action="{ item }">
        <div class="user_content_details">
          <Button
            @click="$refs.requestUpgrade.showPanel()"
            :elevation="0"
            :outlined="true"
            textColor="var(--primary-color)"
            text="Open Request"
            minWidth="11.6rem"
            height="3.6rem"
            color="var(--primary-color)"
          />
        </div>
      </template>
      <!-- footer  -->
      <template v-slot:footer="{ props: { pagination, itemsPerPageText } }">
        <TablesFooter
          style="padding-inline: 29px"
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
    <PanelRequestUpgrade ref="requestUpgrade" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
      tableLoader: false,
      headers: [
        {
          text: "request",
          align: "start",
          sortable: true,
          value: "request",
        },
        { text: "user", value: "user" },
        { text: "description", value: "description" },
        { text: "Status/Enabled", value: "status" },
        { text: "created", value: "created_at" },
        { text: "", value: "action" },
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
      var obj = [
        {
          request: "Account Upgrade",
          first_name: "Adam",
          last_name: "Kosher",
          description: "Account upgrade to Pro Yearly plan",
          status: "approved",
        },
        {
          request: "Account Suspension",
          first_name: "John",
          last_name: "Doe",
          description: "",
          status: "pending",
          industry: "legal",
        },
        {
          request: "Account Suspension",
          first_name: "John",
          last_name: "Doe",
          description: "",
          status: "declined",
          industry: "legal",
        },
      ];
      for (let index = 0; index < 16; index++) {
        data = [...data, ...obj];
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

