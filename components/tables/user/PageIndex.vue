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
      <!-- user details  -->
      <template v-slot:item.user="{ item }">
        <div class="user_content capital">
          <div class="user_content_details">
            <div v-if="item.avatar" class="images__container bordered">
              <img :src="item.avatar" alt="avatar" />
            </div>
            <span @click="showPanel('view', item)">{{
              $getFullName(item.first_name, item.last_name)
            }}</span>
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
      <!-- user details  -->
      <template v-slot:item.country="{ item }">
        <div class="user_content capital">
          <div class="user_content_details">
            <div v-if="item.country.flag" class="images__container">
              <img :src="item.country.flag" alt="avatar" />
            </div>
            <p>{{ item.country.name }}</p>
          </div>
        </div>
      </template>

      <!-- is_disabled  -->
      <template v-slot:item.is_disabled="{ item }">
        <div class="user_content capital">
          <div class="user_content_details">
            <p class="danger" v-if="item.is_disabled">Disabled</p>
            <p class="verified" v-else>Enabled</p>
          </div>
        </div>
      </template>

      <!-- password_changed_at  -->
      <template v-slot:item.password_changed_at="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <p v-if="item.password_changed_at">
              {{ $formatDateString(item.password_changed_at) }}
            </p>
            <p v-else>No date available!</p>
          </div>
        </div>
      </template>

      <!-- date  -->
      <template v-slot:item.date="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <p v-if="item.last_login_at">
              {{ $formatDateString(item.last_login_at) }}
            </p>
            <p v-else>No date available!</p>
          </div>
        </div>
      </template>

      <!-- created  -->
      <template v-slot:item.created="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <p v-if="item.created_at">
              {{ $formatDateString(item.created_at) }}
            </p>
            <p v-else>No date available!</p>
          </div>
        </div>
      </template>

      <!-- updated_at  -->
      <template v-slot:item.updated_at="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <p v-if="item.updated_at">
              {{ $formatDateString(item.updated_at) }}
            </p>
            <p v-else>No date available!</p>
          </div>
        </div>
      </template>

      <!-- action  -->
      <template v-slot:item.action="{ item }">
        <div class="user_content_details" style="justify-content: center">
          <v-menu
            v-if="item.email != $auth.user.email"
            offset-y
            min-width="156"
          >
            <template v-slot:activator="{ on, attrs }">
              <div
                v-if="item.email != $auth.user.email"
                v-bind="attrs"
                v-on="on"
                class="action__activator"
              >
                <svg
                  width="17"
                  height="4"
                  viewBox="0 0 17 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_458_67292)">
                    <path
                      d="M6.89022 1.83858C6.89022 2.85374 7.71316 3.67668 8.72831 3.67668C9.74346 3.67668 10.5664 2.85374 10.5664 1.83858C10.5664 0.823431 9.74346 0.000488245 8.72831 0.000488201C7.71316 0.000488157 6.89022 0.823431 6.89022 1.83858Z"
                      fill="#333940"
                    />
                    <path
                      d="M13.3238 1.83858C13.3238 2.85374 14.1468 3.67668 15.1619 3.67668C16.1771 3.67668 17 2.85374 17 1.83858C17 0.823431 16.1771 0.000488245 15.1619 0.000488201C14.1468 0.000488157 13.3238 0.823431 13.3238 1.83858Z"
                      fill="#333940"
                    />
                    <path
                      d="M0.45711 1.83858C0.45711 2.85374 1.28005 3.67668 2.29521 3.67668C3.31036 3.67668 4.1333 2.85374 4.1333 1.83858C4.1333 0.823431 3.31036 0.000488245 2.29521 0.000488201C1.28005 0.000488157 0.45711 0.823431 0.45711 1.83858Z"
                      fill="#333940"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_458_67292">
                      <rect
                        width="3.67619"
                        height="16.5429"
                        fill="white"
                        transform="translate(17) rotate(90)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </template>
            <v-list class="dropdown__list">
              <v-list-item
                @click="showPanel('view', item)"
                class="dropdown__list-item"
              >
                <v-list-item-title class="dropdown__list-title"
                  >View Profile</v-list-item-title
                >
              </v-list-item>
              <v-list-item
                @click="showPanel('edit', item)"
                class="dropdown__list-item"
              >
                <v-list-item-title class="dropdown__list-title"
                  >Edit</v-list-item-title
                >
              </v-list-item>
              <v-list-item
                v-if="item.is_disabled !== 0"
                @click="showPanel('enableAdmin', item)"
                class="dropdown__list-item"
              >
                <v-list-item-title class="dropdown__list-title"
                  >Enable</v-list-item-title
                >
              </v-list-item>
              <v-list-item
                v-else
                @click="showPanel('disableAdmin', item)"
                class="dropdown__list-item"
              >
                <v-list-item-title class="dropdown__list-title"
                  >Disable</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
          <span v-else>---</span>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableLoader: false,
      headers: [
        {
          text: "User",
          align: "start",
          sortable: true,
          value: "user",
        },
        { text: "Email Address", value: "email" },
        { text: "Country", value: "country" },
        { text: "Profession", value: "job" },
        { text: "Card type", value: "type" },
        { text: "No. of Card", value: "card_no" },
        { text: "DATE", value: "created" },
        { text: "ACTION", value: "action" },
      ],
      tableData: [
        {
          first_name: "Adam",
          last_name: "Kosher",
          avatar: "/images/temp/user.jpg",
          email: "admakosher@gmail.com",
          country: {
            name: "Nigeria",
            flag: "/images/temp/flag/1.png",
          },
          job: "Lawyer",
          type: "Bizcard",
          card_no: 6,
        },
        {
          first_name: "Adam",
          last_name: "Kosher",
          avatar: "/images/temp/user.jpg",
          email: "admakosher@gmail.com",
          country: {
            name: "Nigeria",
            flag: "/images/temp/flag/1.png",
          },
          job: "Lawyer",
          type: "Bizcard",
          card_no: 6,
        },
        {
          first_name: "Adam",
          last_name: "Kosher",
          avatar: "/images/temp/user.jpg",
          email: "admakosher@gmail.com",
          country: {
            name: "Nigeria",
            flag: "/images/temp/flag/1.png",
          },
          job: "Lawyer",
          type: "Bizcard",
          card_no: 6,
        },
        {
          first_name: "Adam",
          last_name: "Kosher",
          avatar: "/images/temp/user.jpg",
          email: "admakosher@gmail.com",
          country: {
            name: "Nigeria",
            flag: "/images/temp/flag/1.png",
          },
          job: "Lawyer",
          type: "Bizcard",
          card_no: 6,
        },
        {
          first_name: "Adam",
          last_name: "Kosher",
          avatar: "/images/temp/user.jpg",
          email: "admakosher@gmail.com",
          country: {
            name: "Nigeria",
            flag: "/images/temp/flag/1.png",
          },
          job: "Lawyer",
          type: "Bizcard",
          card_no: 6,
        },
        {
          first_name: "Adam",
          last_name: "Kosher",
          avatar: "/images/temp/user.jpg",
          email: "admakosher@gmail.com",
          country: {
            name: "Nigeria",
            flag: "/images/temp/flag/1.png",
          },
          job: "Lawyer",
          type: "Bizcard",
          card_no: 6,
        },
        {
          first_name: "Adam",
          last_name: "Kosher",
          avatar: "/images/temp/user.jpg",
          email: "admakosher@gmail.com",
          country: {
            name: "Nigeria",
            flag: "/images/temp/flag/1.png",
          },
          job: "Lawyer",
          type: "Bizcard",
          card_no: 6,
        },
        {
          first_name: "Adam",
          last_name: "Kosher",
          avatar: "/images/temp/user.jpg",
          email: "admakosher@gmail.com",
          country: {
            name: "Nigeria",
            flag: "/images/temp/flag/1.png",
          },
          job: "Lawyer",
          type: "Bizcard",
          card_no: 6,
        },
        {
          first_name: "Adam",
          last_name: "Kosher",
          avatar: "/images/temp/user.jpg",
          email: "admakosher@gmail.com",
          country: {
            name: "Nigeria",
            flag: "/images/temp/flag/1.png",
          },
          job: "Lawyer",
          type: "Bizcard",
          card_no: 6,
        },
        {
          first_name: "Adam",
          last_name: "Kosher",
          avatar: "/images/temp/user.jpg",
          email: "admakosher@gmail.com",
          country: {
            name: "Nigeria",
            flag: "/images/temp/flag/1.png",
          },
          job: "Lawyer",
          type: "Bizcard",
          card_no: 6,
        },
        {
          first_name: "Adam",
          last_name: "Kosher",
          avatar: "/images/temp/user.jpg",
          email: "admakosher@gmail.com",
          country: {
            name: "Nigeria",
            flag: "/images/temp/flag/1.png",
          },
          job: "Lawyer",
          type: "Bizcard",
          card_no: 6,
        },
        {
          first_name: "Adam",
          last_name: "Kosher",
          avatar: "/images/temp/user.jpg",
          email: "admakosher@gmail.com",
          country: {
            name: "Nigeria",
            flag: "/images/temp/flag/1.png",
          },
          job: "Lawyer",
          type: "Bizcard",
          card_no: 6,
        },
        {
          first_name: "Adam",
          last_name: "Kosher",
          avatar: "/images/temp/user.jpg",
          email: "admakosher@gmail.com",
          country: {
            name: "Nigeria",
            flag: "/images/temp/flag/1.png",
          },
          job: "Lawyer",
          type: "Bizcard",
          card_no: 6,
        },
        {
          first_name: "Adam",
          last_name: "Kosher",
          avatar: "/images/temp/user.jpg",
          email: "admakosher@gmail.com",
          country: {
            name: "Nigeria",
            flag: "/images/temp/flag/1.png",
          },
          job: "Lawyer",
          type: "Bizcard",
          card_no: 6,
        },
        {
          first_name: "Adam",
          last_name: "Kosher",
          avatar: "/images/temp/user.jpg",
          email: "admakosher@gmail.com",
          country: {
            name: "Nigeria",
            flag: "/images/temp/flag/1.png",
          },
          job: "Lawyer",
          type: "Bizcard",
          card_no: 6,
        },
        {
          first_name: "Adam",
          last_name: "Kosher",
          avatar: "/images/temp/user.jpg",
          email: "admakosher@gmail.com",
          country: {
            name: "Nigeria",
            flag: "/images/temp/flag/1.png",
          },
          job: "Lawyer",
          type: "Bizcard",
          card_no: 6,
        },
        {
          first_name: "Adam",
          last_name: "Kosher",
          avatar: "/images/temp/user.jpg",
          email: "admakosher@gmail.com",
          country: {
            name: "Nigeria",
            flag: "/images/temp/flag/1.png",
          },
          job: "Lawyer",
          type: "Bizcard",
          card_no: 6,
        },
        {
          first_name: "Adam",
          last_name: "Kosher",
          avatar: "/images/temp/user.jpg",
          email: "admakosher@gmail.com",
          country: {
            name: "Nigeria",
            flag: "/images/temp/flag/1.png",
          },
          job: "Lawyer",
          type: "Bizcard",
          card_no: 6,
        },
        {
          first_name: "Adam",
          last_name: "Kosher",
          avatar: "/images/temp/user.jpg",
          email: "admakosher@gmail.com",
          country: {
            name: "Nigeria",
            flag: "/images/temp/flag/1.png",
          },
          job: "Lawyer",
          type: "Bizcard",
          card_no: 6,
        },
      ],
      pagination: {
        page: 1,
        itemsPerPage: 10,
        pageStart: 1,
        pageStop: 200,
        pageCount: 1,
        itemsLength: 7,
        last_page: 3,
      },
    };
  },
  methods: {
    showPanel(type, dataToShow) {
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

<style lang="scss" scoped></style>
