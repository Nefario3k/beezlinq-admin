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
      :items-per-page="tableData.length"
      :page="pagination.page"
      :loading="tableLoader"
      loading-text="Loading user data"
      no-data-text="No user data available"
      :footer-props="{
        pagination: pagination,
        itemsPerPageText: 'Rows Per Page:',
      }"
      class="generic__table noAction noGridLines noHead"
    >
      <!-- name  -->
      <template v-slot:item.name="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <div>
              <SvgCogSwitch />
            </div>
            <p class="capital">{{ item.name }}</p>
          </div>
        </div>
      </template>
      <!-- codes  -->
      <template v-slot:item.codes="{ item }">
        <div style="width: 100%; max-width: 34.3rem" class="user_content">
          <div
            style="width: 100%"
            class="user_content_details flex-column align-start"
          >
            <div
              class="codesWrap"
              v-for="(code, id) in item.codes"
              :key="id + 7723"
            >
              <span>{{ code }}</span>
              <Button
                title="Copy"
                :ripple="false"
                :elevation="0"
                height="3rem"
                minWidth="3rem"
                class="p-0 m-0"
                :svg="true"
                svgLeft="SvgCopy"
                color="transparent"
              />
            </div>
          </div>
        </div>
      </template>
      <!-- status  -->
      <template v-slot:item.status="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <div class="chip__wrapper">
              <v-chip
                v-if="item.status === 'active'"
                small
                text-color="var(--primary-color)"
                color="var(--chip-bg4)"
                :ripple="false"
                class="plan__chips"
              >
                {{ item.status }}
              </v-chip>
              <v-chip
                small
                v-else
                text-color="var(--danger-color)"
                color="var(--chip-bg5)"
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
          <div class="user_content_details flex-column align-start">
            <p>
              {{ $formatActivityDate(new Date()) }}
            </p>
            <p class="capital waiting">Date Created</p>
          </div>
        </div>
      </template>
      <!-- action  -->
      <template v-slot:item.action="{ item }">
        <div class="user_content">
          <div class="user_content_details justify-center">
            <Button
              @click="$refs.editApiKey.showPanel()"
              :elevation="0"
              :outlined="true"
              textColor="var(--primary-color)"
              text="Manage"
              minWidth="8.6rem"
              height="3.6rem"
              color="var(--primary-color)"
            />
          </div>
        </div>
      </template>
    </v-data-table>
    <LoaderTable v-else />
    <PanelRequestUpgrade ref="requestUpgrade" />
    <PanelEditApiKeys ref="editApiKey" />
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
          text: "name",
          align: "start",
          sortable: true,
          value: "name",
        },
        { text: "codes", value: "codes" },
        { text: "Status/Enabled", value: "status" },
        { text: "created", value: "created_at" },
        { text: "action", value: "action" },
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
          name: "Paystack API",
          codes: [
            "GH0487hj83ggb83bbu82bbu2b383b8c8wdwdwudvwiudwiugduwbdwd",
            "GH0487hj83ggb83bbu82bbu2b383b8c8wdwdwudvwiudwiugduwbdwd",
          ],
          status: "active",
        },
        {
          name: "Google Analytics API",
          codes: [
            "GH0487hj83ggb83bbu82bbu2b383b8c8wdwdwudvwiudwiugduwbdwd",
            "GH0487hj83ggb83bbu82bbu2b383b8c8wdwdwudvwiudwiugduwbdwd",
          ],
          status: "inactive",
        },
        {
          name: "Google Analytics API",
          codes: ["GH0487hj83ggb83bbu82bbu2b383b8c8wdwdwudvwiudwiugduwbdwd"],
          status: "active",
        },
      ];
      for (let index = 0; index < 5; index++) {
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

