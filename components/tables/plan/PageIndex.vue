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
      class="generic__table"
    >
      <!-- name -->
      <template v-slot:item.name="{ item }">
        <div class="user_content capital">
          <div class="user_content_details gap-5">
            <span
              style="color: var(--primary-color)"
              @click="
                $refs.downloadReceipt.showPanel({ resolve: true, ...item })
              "
              >{{ item.name }}</span
            >
          </div>
        </div>
      </template>
      <!-- description  -->
      <template v-slot:item.description="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <p style="white-space: nowrap">
              {{ item.description }}
            </p>
          </div>
        </div>
      </template>
      <!-- monthly  -->
      <template v-slot:item.monthly="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <p>
              {{ item.monthly.split(" ")[0] }} |
              {{ item.monthly.split(" ")[1] }}
            </p>
          </div>
        </div>
      </template>
      <!-- yearly -->
      <template v-slot:item.yearly="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <p>
              {{ item.yearly.split(" ")[0] }} |
              {{ item.yearly.split(" ")[1] }}
            </p>
          </div>
        </div>
      </template>
      <template v-slot:item.created_at="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <p>
              {{ item.created_at }}
            </p>
          </div>
        </div>
      </template>
      <!-- action  -->
      <template v-slot:item.action="{ item }">
        <div
          class="user_content_details actions"
          style="justify-content: center; grid-gap: 5px"
        >
          <Button
            title="Edit"
            :elevation="0"
            height="3rem"
            minWidth="3rem"
            class="p-0 m-0"
            :svg="true"
            svgLeft="SvgActionsEdit"
            color="transparent"
          />
          <Button
            title="Delete"
            :elevation="0"
            height="3rem"
            minWidth="3rem"
            class="p-0 m-0 deleteBtn"
            :svg="true"
            svgLeft="SvgActionsDelete"
            color="transparent"
          />
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
          text: "Plan Name",
          align: "start",
          sortable: true,
          value: "name",
        },
        { text: "Plan Description", value: "description" },
        { text: "Monthly", value: "monthly" },
        { text: "Yearly", value: "yearly" },
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
        name: "Basic Plan ",
        description: "Limited number of features usage",
        monthly: "NGN12,000 $9.00",
        yearly: "NGN13,000 $19.00",
        created_at: "17 Jan, 2023",
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
<style lang="scss"></style>
