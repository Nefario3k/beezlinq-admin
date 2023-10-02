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
      class="generic__table noAction"
    >
      <!-- invoice  -->
      <template v-slot:item.invoice="{ item }">
        <div class="user_content capital">
          <div class="user_content_details">
            <span
              @click="
                $refs.downloadReceipt.showPanel({ resolve: true, ...item })
              "
              >{{ item.invoice }}</span
            >
          </div>
        </div>
      </template>
      <!-- duration  -->
      <template v-slot:item.duration="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <p class="email">
              {{ item.duration }}
            </p>
          </div>
        </div>
      </template>
      <!-- status  -->
      <template v-slot:item.status="{ item, index }">
        <div class="user_content">
          <div class="user_content_details justify-center">
            <div class="chip__wrapper">
              <v-chip
                v-if="index % 2 == 0"
                small
                text-color="var(--chip-text)"
                color="var(--chip-bg)"
                :ripple="false"
                class="plan__chips"
              >
                {{ item.status }}
              </v-chip>
              <v-chip
                v-else-if="index % 3 == 0"
                small
                text-color="var(--chip-text2)"
                color="var(--chip-bg2)"
                :ripple="false"
                class="plan__chips"
              >
                {{ "failed" }}
              </v-chip>
              <v-chip
                v-else
                small
                text-color="var(--primary-dark-color)"
                color="var(--table)"
                :ripple="false"
                class="plan__chips"
              >
                {{ "Pending" }}
              </v-chip>
            </div>
          </div>
        </div>
      </template>
      <!-- amount  -->
      <template v-slot:item.amount="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <p>{{ $formatNairaCurrency(item.amount) }}</p>
          </div>
        </div>
      </template>
      <!-- type  -->
      <template v-slot:item.type="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <p>{{ item.type }}</p>
          </div>
        </div>
      </template>
      <!-- gateway  -->
      <template v-slot:item.gateway="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <p>{{ item.gateway }}</p>
          </div>
        </div>
      </template>
      <!-- created_at  -->
      <template v-slot:item.created_at="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <p>
              {{ $formatDateString(new Date()) }}
            </p>
          </div>
        </div>
      </template>
      <!-- action  -->
      <template v-slot:item.action="{ item }">
        <div class="user_content_details">
          <div
            title="Download Invoice"
            style="cursor: pointer"
            @click="$refs.downloadReceipt.showPanel(item)"
            class="p-0 m-0 user_content_details download"
          >
            <span>Download</span>
            <div>
              <SvgDownload />
            </div>
          </div>
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
    <PanelViewReceipt
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
      selected: [],
      tableLoader: false,
      headers: [
        {
          text: "Invoice/Plan",
          align: "start",
          sortable: true,
          value: "invoice",
        },
        { text: "Duration", value: "duration" },
        { text: "Status", value: "status" },
        { text: "Amount", value: "amount" },
        { text: "Payment Type", value: "type" },
        { text: "Payment Gateway", value: "gateway" },
        { text: "Date", value: "created_at" },
        { text: "Download", value: "action" },
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
        id: 1,
        amount: 20500,
        invoice: "Basic PLan ",
        duration: "20 Jan, 2023 - 16 Jan 2024",
        email: "admakosher@gmail.com",
        status: "Successful",
        gateway: "Paystack",
        type: "Plan Subscription",
        card_no: 6,
      };
      for (let index = 0; index < 16; index++) {
        let dune = structuredClone(obj);
        dune.id = dune.id + index;
        data.push(dune);
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

