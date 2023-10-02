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
      class="generic__table"
    >
      <!-- user  -->
      <template v-slot:item.user="{ item }">
        <div class="user_content capital">
          <div class="user_content_details">
            <div v-if="item.avatar" class="images__container bordered">
              <img :src="item.avatar" alt="avatar" />
            </div>
            <p>{{ $getFullName(item.first_name, item.last_name) }}</p>
          </div>
        </div>
      </template>
      <!-- email  -->
      <template v-slot:item.email="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <p class="email">
              <a :href="`mailto:${item.email}`">{{ item.email }}</a>
            </p>
          </div>
        </div>
      </template>
      <!-- role  -->
      <template v-slot:item.role="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <p>{{ item.role }}</p>
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
        <div class="user_content_details" style="justify-content: center">
          <v-menu offset-y min-width="15.6rem">
            <template v-slot:activator="{ on, attrs }">
              <div v-bind="attrs" v-on="on" class="action__activator">
                <SvgDotsVertical />
              </div>
            </template>
            <v-list class="dropdown__list">
              <!-- Edit Admin  -->
              <v-list-item
                @click="$refs.editAdmin.showPanel(item)"
                class="dropdown__list-item"
              >
                <v-list-item-content>
                  <v-list-item-title class="dropdown__list-title"
                    >Edit Admin</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <!-- Disable Admin  -->
              <v-list-item class="dropdown__list-item">
                <v-list-item-content>
                  <v-list-item-title class="dropdown__list-title"
                    >Disable Admin</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <!-- Delete Admin -->
              <v-list-item class="dropdown__list-item">
                <v-list-item-content>
                  <v-list-item-title class="dropdown__list-title"
                    >Delete Admin</v-list-item-title
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
    <PanelEditAdmin ref="editAdmin" />
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
          text: "admin",
          align: "start",
          sortable: true,
          value: "user",
        },
        { text: "Email Address", value: "email" },
        { text: "role", value: "role" },
        { text: "last logged in", value: "created_at" },
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
      var obj = {
        id: 1,
        first_name: "Adam",
        last_name: "Kosher",
        avatar: "/images/temp/user2.jpg",
        email: "admakosher@gmail.com",
        role: "SuperAdmin",
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

